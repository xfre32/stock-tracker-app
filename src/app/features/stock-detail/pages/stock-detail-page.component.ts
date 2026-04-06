import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

import { CompanyProfile, CompanyNews } from '../../../shared/models/company.model';
import { StockQuote } from '../../../shared/models/stock.model';
import { InsiderSentimentData } from '../../../shared/models/sentiment.model';

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
export class StockDetailPageComponent implements OnInit {
  readonly symbol = input.required<string>();

  private readonly api = inject(FinnhubApiService);
  private readonly router = inject(Router);

  readonly loading = signal(true);
  readonly profile = signal<CompanyProfile | null>(null);
  readonly quote = signal<StockQuote | null>(null);
  readonly sentiment = signal<InsiderSentimentData[]>([]);
  readonly news = signal<CompanyNews[]>([]);

  ngOnInit(): void {
    this.loadData();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  private loadData(): void {
    const sym = this.symbol();
    const today = new Date().toISOString().split('T')[0];
    const sixMonthsAgo = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    forkJoin({
      profile: this.api.getCompanyProfile(sym).pipe(catchError(() => of(null))),
      quote: this.api.getQuote(sym).pipe(catchError(() => of(null))),
      sentiment: this.api.getInsiderSentiment(sym, sixMonthsAgo, today).pipe(catchError(() => of({ data: [], symbol: sym }))),
      news: this.api.getCompanyNews(sym, sixMonthsAgo, today).pipe(catchError(() => of([]))),
    }).subscribe({
      next: (data) => {
        this.profile.set(data.profile);
        this.quote.set(data.quote);
        this.sentiment.set(data.sentiment?.data ?? []);
        this.news.set(data.news ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
