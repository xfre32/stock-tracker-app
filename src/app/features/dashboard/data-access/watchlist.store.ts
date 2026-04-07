import { Injectable, inject, signal, computed, effect, OnDestroy } from '@angular/core';
import { forkJoin, of, switchMap } from 'rxjs';
import { FinnhubApiService } from '../../../core/services/finnhub-api.service';
import { StorageService } from '../../../core/services/storage.service';
import { NotificationService } from '../../../core/services/notification.service';
import { WatchlistItem, StockSearchResult } from '../../../shared/models/stock.model';
import { WebSocketService } from '../../../core/services/websocket.service';

@Injectable({ providedIn: 'root' })
export class WatchlistStore implements OnDestroy {
  private readonly api = inject(FinnhubApiService);
  private readonly storage = inject(StorageService);
  private readonly notification = inject(NotificationService);
  private readonly ws = inject(WebSocketService);

  // State
  readonly items = signal<WatchlistItem[]>([]);
  readonly loading = signal<Set<string>>(new Set());
  readonly error = signal<string | null>(null);
  private initialized = false;

  // Derived state
  readonly count = computed(() => this.items().length);
  readonly isEmpty = computed(() => this.items().length === 0 && this.loading().size === 0);
  readonly symbols = computed(() => this.items().map(i => i.symbol));

  // Decouple membership from live price updates for persistence (F-PERF-001)
  private readonly persistedSymbols = computed(() => this.items().map(i => i.symbol).sort());

  constructor() {
    effect(() => {
      const symbols = this.persistedSymbols();
      if (this.initialized) {
        this.storage.set('watchlist', symbols);
      }
    });

    effect(() => {
      const trade = this.ws.lastTrade();
      if (!trade) return;
      this.items.update(items =>
        items.map(item =>
          item.symbol === trade.symbol
            ? { ...item, currentPrice: trade.price, change: trade.price - item.previousClose, percentChange: ((trade.price - item.previousClose) / item.previousClose) * 100 }
            : item
        )
      );
    });
  }

  initialize(): void {
    const savedSymbols = this.storage.get<string[]>('watchlist') ?? [];
    this.initialized = true;
    if (savedSymbols.length === 0) return;
    this.ws.connect();
    savedSymbols.forEach(symbol => {
      this.addLoadingPlaceholder(symbol);
      this.fetchStockData(symbol);
    });
  }

  addStock(symbol: string): void {
    const upperSymbol = symbol.toUpperCase().trim();
    if (!upperSymbol) {
      this.notification.warning('Please enter a stock symbol');
      return;
    }
    if (this.symbols().includes(upperSymbol)) {
      this.notification.warning(`${upperSymbol} is already in your watchlist`);
      return;
    }
    this.addLoadingPlaceholder(upperSymbol);
    this.ws.connect();
    this.fetchStockData(upperSymbol);
  }

  removeStock(symbol: string): void {
    this.items.update(items => items.filter(i => i.symbol !== symbol));
    this.notification.success(`${symbol} removed from watchlist`);
    this.ws.unsubscribe(symbol);

    // Disconnect if no active tracked stocks (F-REL-001)
    if (this.persistedSymbols().length === 0) {
      this.ws.disconnect();
    }
  }

  private addLoadingPlaceholder(symbol: string): void {
    this.loading.update(set => new Set(set).add(symbol));
  }

  private fetchStockData(symbol: string): void {
    this.api
      .searchStock(symbol)
      .pipe(
        switchMap((search) => {
          const match = search.result?.find(
            (r: StockSearchResult) => r.symbol === symbol || r.displaySymbol === symbol
          );
          if (!match) {
            throw new Error(`Symbol "${symbol}" not found`);
          }
          return forkJoin({
            quote: this.api.getQuote(symbol),
            name: of(match.description ?? symbol),
          });
        })
      )
      .subscribe({
        next: ({ quote, name }) => {
          this.ws.subscribe(symbol); // Subscribe only after successful validation (F-REL-001)
          const item: WatchlistItem = {
            symbol,
            name,
            currentPrice: quote.c,
            openPrice: quote.o,
            highPrice: quote.h,
            lowPrice: quote.l,
            change: quote.d,
            percentChange: quote.dp,
            previousClose: quote.pc,
          };
          this.items.update((items) => {
            const existing = items.findIndex((i) => i.symbol === symbol);
            if (existing >= 0) {
              const copy = [...items];
              copy[existing] = item;
              return copy;
            }
            return [...items, item];
          });
          this.loading.update((set) => {
            const newSet = new Set(set);
            newSet.delete(symbol);
            return newSet;
          });
        },
        error: (err) => {
          this.ws.unsubscribe(symbol); // Clean up on validation failure (F-REL-001)
          this.loading.update((set) => {
            const newSet = new Set(set);
            newSet.delete(symbol);
            return newSet;
          });
          this.items.update((items) => items.filter((i) => i.symbol !== symbol));
          this.notification.warning(
            err.message?.includes('not found')
              ? `"${symbol}" is not a valid stock symbol`
              : `Failed to load data for ${symbol}`
          );
        },
      });
  }

  ngOnDestroy(): void {
    this.ws.disconnect();
  }
}
