import { Component, input, signal, inject } from '@angular/core';
import { CurrencyPipe, PercentPipe, CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin, of } from 'rxjs';
import { catchError, switchMap, tap, finalize } from 'rxjs/operators';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FinnhubApiService } from '../../../../core/services/finnhub-api.service';
import { MarketCapPipe } from '../../../../shared/pipes/market-cap.pipe';
import { StockQuote } from '../../../../shared/models/stock.model';
import { CompanyProfile } from '../../../../shared/models/company.model';

interface ComparisonFetchResult {
  symbol: string;
  quote: StockQuote | null;
  profile: CompanyProfile | null;
}

export interface ComparisonMetricRow {
  name: string;
  key: string;
  format: 'currency' | 'decimal' | 'percent' | 'none' | 'marketCap';
  values: Record<string, number | string | null>;
}

@Component({
  selector: 'app-comparison-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule, CurrencyPipe, PercentPipe, MarketCapPipe],
  templateUrl: './comparison-table.component.html',
  styleUrl: './comparison-table.component.scss',
})
export class ComparisonTableComponent {
  readonly symbols = input.required<string[]>();
  private readonly api = inject(FinnhubApiService);

  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
  readonly dataSource = signal<ComparisonMetricRow[]>([]);
  readonly displayedColumns = signal<string[]>(['metric']);

  constructor() {
    // Reactive data flow using switchMap to handle race conditions (F-REL-002)
    toObservable(this.symbols)
      .pipe(
        tap((activeSymbols) => {
          this.displayedColumns.set(['metric', ...activeSymbols]);
          if (activeSymbols.length === 0) {
            this.dataSource.set([]);
          }
        }),
        switchMap((activeSymbols) => {
          if (activeSymbols.length === 0) return of([]);

          this.loading.set(true);
          this.error.set(null);

          const requests = activeSymbols.map((symbol) =>
            forkJoin({
              symbol: of(symbol),
              quote: this.api.getQuote(symbol).pipe(catchError(() => of(null))),
              profile: this.api.getCompanyProfile(symbol).pipe(catchError(() => of(null))),
            })
          );

          return forkJoin(requests).pipe(
            finalize(() => this.loading.set(false)),
            catchError(() => {
              this.error.set('Failed to load comparison data.');
              return of([]);
            })
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe((results) => {
        this.dataSource.set(this.buildTableRows(results as ComparisonFetchResult[]));
      });
  }

  private buildTableRows(results: ComparisonFetchResult[]): ComparisonMetricRow[] {
    const rows: ComparisonMetricRow[] = [
      { name: 'Company Name', key: 'name', format: 'none', values: {} },
      { name: 'Current Price', key: 'c', format: 'currency', values: {} },
      { name: 'Change', key: 'd', format: 'currency', values: {} },
      { name: 'Change (%)', key: 'dp', format: 'percent', values: {} },
      { name: 'Open', key: 'o', format: 'currency', values: {} },
      { name: 'High', key: 'h', format: 'currency', values: {} },
      { name: 'Low', key: 'l', format: 'currency', values: {} },
      { name: 'Previous Close', key: 'pc', format: 'currency', values: {} },
      { name: 'Market Cap', key: 'marketCapitalization', format: 'marketCap', values: {} },
    ];

    results.forEach(res => {
      const sym = res.symbol;
      const quote = res.quote;
      const profile = res.profile;

      rows.find(r => r.key === 'name')!.values[sym] = profile?.name ?? 'N/A';
      rows.find(r => r.key === 'c')!.values[sym] = quote?.c ?? null;
      rows.find(r => r.key === 'd')!.values[sym] = quote?.d ?? null;
      rows.find(r => r.key === 'dp')!.values[sym] = quote?.dp !== null && quote?.dp !== undefined ? quote.dp / 100 : null;
      rows.find(r => r.key === 'o')!.values[sym] = quote?.o ?? null;
      rows.find(r => r.key === 'h')!.values[sym] = quote?.h ?? null;
      rows.find(r => r.key === 'l')!.values[sym] = quote?.l ?? null;
      rows.find(r => r.key === 'pc')!.values[sym] = quote?.pc ?? null;
      rows.find(r => r.key === 'marketCapitalization')!.values[sym] = profile?.marketCapitalization
        ? profile.marketCapitalization
        : null;
    });

    return rows;
  }
}
