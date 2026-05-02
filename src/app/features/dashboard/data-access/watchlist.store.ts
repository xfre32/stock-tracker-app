import { Injectable, inject, signal, computed, effect, OnDestroy, untracked } from '@angular/core';
import { forkJoin, of, EMPTY } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { StockApiService } from '../../../core/services/stock-api.service';
import { StorageService } from '../../../core/services/storage.service';
import { NotificationService } from '../../../core/services/notification.service';
import { WatchlistItem, StockSearchResult } from '../../../shared/models/stock.model';
import { WebSocketService } from '../../../core/services/websocket.service';
import { AuthService } from '../../../core/services/auth.service';
import { WatchlistApiService } from '../../../core/services/watchlist-api.service';

@Injectable({ providedIn: 'root' })
export class WatchlistStore implements OnDestroy {
  private readonly api = inject(StockApiService);
  private readonly storage = inject(StorageService);
  private readonly notification = inject(NotificationService);
  private readonly ws = inject(WebSocketService);
  private readonly auth = inject(AuthService);
  private readonly watchlistApi = inject(WatchlistApiService);

  // State
  readonly items = signal<WatchlistItem[]>([]);
  readonly loading = signal<Set<string>>(new Set());
  readonly error = signal<string | null>(null);
  private initialized = false;

  // Derived state
  readonly count = computed(() => this.items().length);
  readonly isEmpty = computed(() => this.items().length === 0 && this.loading().size === 0);
  readonly symbols = computed(() => this.items().map(i => i.symbol));

  // Decouple membership from live price updates for persistence
  private readonly persistedSymbols = computed(() => this.items().map(i => i.symbol).sort());

  constructor() {
    // Persistence effect for local storage (fallback)
    effect(() => {
      const symbols = this.persistedSymbols();
      const isLoggedIn = this.auth.isLoggedIn();
      if (this.initialized && !isLoggedIn) {
        this.storage.set('watchlist', symbols);
      }
    });

    // Reactive price updates
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

    // Handle authentication state changes
    effect(() => {
      const isLoggedIn = this.auth.isLoggedIn();
      // Re-initialize when login state changes (but ignore first run if already initialized)
      if (this.initialized) {
        untracked(() => this.initialize());
      }
    });
  }

  initialize(): void {
    this.initialized = true;
    this.items.set([]); // Reset items before loading
    
    if (this.auth.isLoggedIn()) {
      this.loadFromBackend();
    } else {
      this.loadFromLocalStorage();
    }
  }

  private loadFromBackend(): void {
    this.watchlistApi.getWatchlist().subscribe({
      next: (entries) => {
        const symbols = entries.map(e => e.symbol);
        if (symbols.length > 0) {
          this.ws.connect();
          symbols.forEach(symbol => {
            this.addLoadingPlaceholder(symbol);
            this.fetchStockData(symbol);
          });
        }
      },
      error: () => this.notification.error('Failed to load watchlist from server')
    });
  }

  private loadFromLocalStorage(): void {
    const savedSymbols = this.storage.get<string[]>('watchlist') ?? [];
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

    if (this.auth.isLoggedIn()) {
      this.watchlistApi.addSymbol(upperSymbol).subscribe({
        next: () => {
          this.addLoadingPlaceholder(upperSymbol);
          this.ws.connect();
          this.fetchStockData(upperSymbol);
        },
        error: (err) => this.notification.error(err.error?.message || `Failed to add ${upperSymbol}`)
      });
    } else {
      this.addLoadingPlaceholder(upperSymbol);
      this.ws.connect();
      this.fetchStockData(upperSymbol);
    }
  }

  removeStock(symbol: string): void {
    if (this.auth.isLoggedIn()) {
      this.watchlistApi.removeSymbol(symbol).subscribe({
        next: () => this.performRemoval(symbol),
        error: () => this.notification.error(`Failed to remove ${symbol}`)
      });
    } else {
      this.performRemoval(symbol);
    }
  }

  private performRemoval(symbol: string): void {
    this.items.update(items => items.filter(i => i.symbol !== symbol));
    this.notification.success(`${symbol} removed from watchlist`);
    this.ws.unsubscribe(symbol);

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
        }),
        catchError((err) => {
          this.handleFetchError(symbol, err);
          return EMPTY;
        })
      )
      .subscribe(({ quote, name }) => {
        this.handleFetchSuccess(symbol, quote, name);
      });
  }

  private handleFetchSuccess(symbol: string, quote: any, name: string): void {
    this.ws.subscribe(symbol);
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
  }

  private handleFetchError(symbol: string, err: any): void {
    this.ws.unsubscribe(symbol);
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
  }

  ngOnDestroy(): void {
    this.ws.disconnect();
  }
}

