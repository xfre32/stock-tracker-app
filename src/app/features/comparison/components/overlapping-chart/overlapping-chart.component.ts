import { Component, input, effect, signal, inject, ElementRef, ViewChild, OnDestroy, AfterViewInit, computed } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createChart, IChartApi, ISeriesApi, Time } from 'lightweight-charts';
import { forkJoin, catchError, of, switchMap, tap, finalize, combineLatest } from 'rxjs';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TwelveDataApiService } from '../../../../core/services/twelve-data-api.service';
import { ThemeService } from '../../../../core/services/theme.service';
import { CandleData } from '../../../../shared/models/candle.model';

const SERIES_COLORS = ['#3b82f6', '#10b981', '#a855f7', '#f59e0b', '#ef4444'];

@Component({
  selector: 'app-overlapping-chart',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './overlapping-chart.component.html',
  styleUrl: './overlapping-chart.component.scss'
})
export class OverlappingChartComponent implements OnDestroy, AfterViewInit {
  @ViewChild('chartContainerRef') chartContainerRef!: ElementRef<HTMLElement>;
  
  readonly symbols = input.required<string[]>();
  
  readonly legendItems = computed(() => {
    return this.symbols().map((symbol, index) => ({
      symbol,
      color: SERIES_COLORS[index % SERIES_COLORS.length],
    }));
  });
  
  private readonly twelveDataApi = inject(TwelveDataApiService);
  private readonly themeService = inject(ThemeService);
  
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  private chart: IChartApi | null = null;
  private readonly chartReady = signal<boolean>(false);
  private seriesMap = new Map<string, ISeriesApi<"Line">>();
  private resizeObserver?: ResizeObserver;

  constructor() {
    effect(() => {
      this.themeService.isDark();
      this.updateChartTheme();
    });

    // Reactive data flow using switchMap to handle race conditions (F-REL-002)
    combineLatest([toObservable(this.symbols), toObservable(this.chartReady)])
      .pipe(
        tap(([activeSymbols, ready]) => {
          if (!ready || !this.chart) return;
          this.cleanupRemovedSymbols(activeSymbols);
        }),
        switchMap(([activeSymbols, ready]) => {
          if (!ready || !this.chart || activeSymbols.length === 0) return of(null);

          // Only fetch for symbols we don't already have
          const symbolsToFetch = activeSymbols.filter((sym) => !this.seriesMap.has(sym));
          if (symbolsToFetch.length === 0) return of(null);

          this.loading.set(true);
          this.error.set(null);

          const requests = symbolsToFetch.map((symbol) =>
            this.twelveDataApi.getTimeSeries(symbol, '1day', 66).pipe(
              catchError(() => of(null)) // 3 months data (approx 66 trading days)
            )
          );

          return forkJoin({
            symbols: of(symbolsToFetch),
            activeSymbols: of(activeSymbols),
            results: forkJoin(requests),
          }).pipe(
            finalize(() => {
              // Extra check to ensure we only stop loading if this is still the active request
              this.loading.set(false);
            }),
            catchError(() => {
              this.error.set('Failed to load chart data');
              return of(null);
            })
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe((data) => {
        if (data && 'results' in data) {
          this.processChartResults(data.symbols, data.activeSymbols, data.results as (CandleData[] | null)[]);
        }
      });
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    const container = this.chartContainerRef.nativeElement;
    
    this.chart = createChart(container, {
      width: container.clientWidth,
      height: 400,
      layout: {
        background: { color: 'transparent' },
        textColor: '#9ca3af',
      },
      grid: {
        vertLines: { color: 'rgba(156, 163, 175, 0.1)' },
        horzLines: { color: 'rgba(156, 163, 175, 0.1)' },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
      },
      crosshair: {
        mode: 1, // Normal
      }
    });

    this.updateChartTheme();

    // Use ResizeObserver for responsive chart
    this.resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || entries[0].target !== container) return;
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0 && this.chart) {
        this.chart.applyOptions({ width, height });
      }
    });
    this.resizeObserver.observe(container);

    // Initial load triggered via chartReady signal
    this.chartReady.set(true);
  }

  private updateChartTheme(): void {
    if (!this.chart) return;
    const isDark = this.themeService.isDark();
    this.chart.applyOptions({
      layout: {
        textColor: isDark ? '#9ca3af' : '#4b5563',
      },
      grid: {
        vertLines: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' },
        horzLines: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' },
      }
    });
  }

  private cleanupRemovedSymbols(activeSymbols: string[]): void {
    const currentSymbols = Array.from(this.seriesMap.keys());
    currentSymbols.forEach((sym) => {
      if (!activeSymbols.includes(sym)) {
        this.chart?.removeSeries(this.seriesMap.get(sym)!);
        this.seriesMap.delete(sym);
      }
    });
  }

  private processChartResults(symbolsToFetch: string[], activeSymbols: string[], results: (CandleData[] | null)[]): void {
    if (!this.chart) return;

    results.forEach((data, index) => {
      const symbol = symbolsToFetch[index];
      if (data && data.length > 0) {
        const color = SERIES_COLORS[activeSymbols.indexOf(symbol) % SERIES_COLORS.length];
        const lineSeries = this.chart!.addLineSeries({
          color,
          lineWidth: 2,
          crosshairMarkerVisible: true,
          lastValueVisible: false,
          priceLineVisible: false,
        });

        // Convert CandleData to LineData format (time, value) using close price
        const lineData = data.map((candle: CandleData) => ({
          time: candle.time as Time,
          value: candle.close,
        }));

        lineSeries.setData(lineData);
        this.seriesMap.set(symbol, lineSeries);
      }
    });

    this.chart!.timeScale().fitContent();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    if (this.chart) {
      this.chart.remove();
      this.chart = null;
    }
  }
}
