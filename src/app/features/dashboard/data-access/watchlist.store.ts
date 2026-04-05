import { Injectable, inject, signal, computed, effect } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FinnhubApiService } from '../../../core/services/finnhub-api.service';
import { StorageService } from '../../../core/services/storage.service';
import { NotificationService } from '../../../core/services/notification.service';
import { WatchlistItem } from '../../../shared/models/stock.model';

@Injectable({ providedIn: 'root' })
export class WatchlistStore {
  private readonly api = inject(FinnhubApiService);
  private readonly storage = inject(StorageService);
  private readonly notification = inject(NotificationService);

  // State
  readonly items = signal<WatchlistItem[]>([]);
  readonly loading = signal<Set<string>>(new Set());
  readonly error = signal<string | null>(null);

  // Derived state
  readonly count = computed(() => this.items().length);
  readonly isEmpty = computed(() => this.items().length === 0 && this.loading().size === 0);
  readonly symbols = computed(() => this.items().map(i => i.symbol));

  constructor() {
    effect(() => {
      const symbols = this.items().map(i => i.symbol);
      this.storage.set('watchlist', symbols);
    });
  }

  initialize(): void {
    const savedSymbols = this.storage.get<string[]>('watchlist') ?? [];
    if (savedSymbols.length === 0) return;
    savedSymbols.forEach(symbol => this.addLoadingPlaceholder(symbol));
    savedSymbols.forEach(symbol => this.fetchStockData(symbol));
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
    this.fetchStockData(upperSymbol);
  }

  removeStock(symbol: string): void {
    this.items.update(items => items.filter(i => i.symbol !== symbol));
    this.notification.success(`${symbol} removed from watchlist`);
  }

  private addLoadingPlaceholder(symbol: string): void {
    this.loading.update(set => new Set(set).add(symbol));
  }

  private fetchStockData(symbol: string): void {
    forkJoin({
      search: this.api.searchStock(symbol),
      quote: this.api.getQuote(symbol),
    }).subscribe({
      next: ({ search, quote }) => {
        const name = search.result?.[0]?.description ?? symbol;
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
        this.items.update(items => {
          const existing = items.findIndex(i => i.symbol === symbol);
          if (existing >= 0) {
            const copy = [...items];
            copy[existing] = item;
            return copy;
          }
          return [...items, item];
        });
        this.loading.update(set => {
          const newSet = new Set(set);
          newSet.delete(symbol);
          return newSet;
        });
      },
      error: () => {
        this.loading.update(set => {
          const newSet = new Set(set);
          newSet.delete(symbol);
          return newSet;
        });
        this.items.update(items => items.filter(i => i.symbol !== symbol));
      },
    });
  }
}
