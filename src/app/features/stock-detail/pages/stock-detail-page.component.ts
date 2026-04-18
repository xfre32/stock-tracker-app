import { Component, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { switchMap, tap, finalize, catchError } from 'rxjs/operators';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FinnhubApiService } from '../../../core/services/finnhub-api.service';
import { CompanyProfileComponent } from '../components/company-profile/company-profile.component';
import { KeyMetricsComponent } from '../components/key-metrics/key-metrics.component';
import { PriceChartComponent } from '../components/price-chart/price-chart.component';
import { InsiderSentimentComponent } from '../components/insider-sentiment/insider-sentiment.component';
import { NewsFeedComponent } from '../components/news-feed/news-feed.component';

import { CompanyNews, CompanyProfile } from '../../../shared/models/company.model';
import { InsiderSentimentData } from '../../../shared/models/sentiment.model';
import { StockQuote } from '../../../shared/models/stock.model';
import { WatchlistStore } from '../../dashboard/data-access/watchlist.store';

@Component({
  selector: 'app-stock-detail-page',
  standalone: true,
  imports: [
    MatTabsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule,
    CompanyProfileComponent, KeyMetricsComponent, PriceChartComponent,
    InsiderSentimentComponent, NewsFeedComponent,
  ],
  templateUrl: './stock-detail-page.component.html',
  styleUrl: './stock-detail-page.component.scss',
})
export class StockDetailPageComponent {
  readonly symbol = input.required<string>();

  private readonly api = inject(FinnhubApiService);
  private readonly router = inject(Router);
  private readonly watchlistStore = inject(WatchlistStore);

  readonly loading = signal(true);
  readonly profile = signal<CompanyProfile | null>(null);
  readonly quote = signal<StockQuote | null>(null);
  readonly sentiment = signal<InsiderSentimentData[]>([]);
  readonly news = signal<CompanyNews[]>([]);

  constructor() {
    // Reactive data flow responsive to symbol changes (F-REL-003)
    toObservable(this.symbol)
      .pipe(
        tap(() => this.resetState()),
        switchMap((sym) => {
          if (!sym) return of(null);

          this.loading.set(true);
          const today = new Date().toISOString().split('T')[0];
          const sixMonthsAgo = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

          // Use switchMap to ensure only results from the latest symbol are processed
          return forkJoin({
            profile: this.api.getCompanyProfile(sym).pipe(catchError(() => of(null))),
            quote: this.api.getQuote(sym).pipe(catchError(() => of(null))),
            sentiment: this.api.getInsiderSentiment(sym, sixMonthsAgo, today).pipe(
              catchError(() => of({ data: [], symbol: sym }))
            ),
            news: this.api.getCompanyNews(sym, sixMonthsAgo, today).pipe(catchError(() => of([]))),
          }).pipe(
            finalize(() => this.loading.set(false)),
            catchError(() => of(null))
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe((data) => {
        if (data) {
          this.profile.set(data.profile);
          this.quote.set(data.quote);
          this.sentiment.set(data.sentiment?.data ?? []);
          this.news.set(data.news ?? []);
        }
      });
  }

  private resetState(): void {
    const sym = this.symbol();
    this.loading.set(true);
    this.profile.set(null);
    this.quote.set(null);
    this.sentiment.set([]);
    this.news.set([]);

    // Pre-populate quote from watchlist for "instant-on" feel
    const watchlistItem = this.watchlistStore.items().find((i) => i.symbol === sym);
    if (watchlistItem) {
      this.quote.set({
        c: watchlistItem.currentPrice,
        d: watchlistItem.change,
        dp: watchlistItem.percentChange,
        h: watchlistItem.highPrice,
        l: watchlistItem.lowPrice,
        o: watchlistItem.openPrice,
        pc: watchlistItem.previousClose,
        t: 0,
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
