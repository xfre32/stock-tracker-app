import {
  Component, ElementRef, OnDestroy, afterNextRender, inject, input, effect, signal,
} from '@angular/core';
import { createChart, IChartApi, ISeriesApi, ColorType, Time } from 'lightweight-charts';
import { MatButtonToggleModule, MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThemeService } from '../../../../core/services/theme.service';
import { ChartApiService } from '../../../../core/services/chart-api.service';
import { CandleData } from '../../../../shared/models/candle.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-price-chart',
  standalone: true,
  imports: [MatButtonToggleModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './price-chart.component.html',
  styleUrl: './price-chart.component.scss',
})
export class PriceChartComponent implements OnDestroy {
  readonly symbol = input.required<string>();

  private readonly elRef = inject(ElementRef);
  private readonly themeService = inject(ThemeService);
  private readonly chartApi = inject(ChartApiService);

  private chart: IChartApi | null = null;
  private series: ISeriesApi<'Area' | 'Candlestick'> | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private dataSubscription: Subscription | null = null;

  chartType: 'area' | 'candlestick' = 'area';
  readonly chartLoading = signal(false);

  readonly timeframes = [
    { label: '1D', interval: '5min', outputsize: 78, isIntraday: true },
    { label: '1W', interval: '15min', outputsize: 140, isIntraday: true },
    { label: '1M', interval: '1day', outputsize: 22, isIntraday: false },
    { label: '3M', interval: '1day', outputsize: 66, isIntraday: false },
    { label: '6M', interval: '1day', outputsize: 130, isIntraday: false },
    { label: '1Y', interval: '1day', outputsize: 252, isIntraday: false },
  ];
  selectedTimeframe = signal(this.timeframes[3]); // Default 3M

  constructor() {
    afterNextRender(() => {
      this.initChart();
    });

    effect(() => {
      this.themeService.isDark();
      if (this.chart) {
        this.applyTheme();
      }
    });
  }

  onTimeframeToggle(event: MatButtonToggleChange): void {
    this.selectedTimeframe.set(event.value);
    this.loadChartData();
  }

  loadChartData(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    this.chartLoading.set(true);
    const tf = this.selectedTimeframe();

    this.dataSubscription = this.chartApi
      .getTimeSeries(this.symbol(), tf.interval, tf.outputsize)
      .subscribe({
        next: (data) => {
          this.chartLoading.set(false);
          if (data.length > 0 && this.chart) {
            this.updateChartOptions(tf.isIntraday);
            this.rebuildSeries(data);
          }
        },
        error: () => {
          this.chartLoading.set(false);
          // Potential to show error state in UI
        },
      });
  }

  private updateChartOptions(isIntraday: boolean): void {
    if (!this.chart) return;
    this.chart.applyOptions({
      timeScale: {
        timeVisible: isIntraday,
        secondsVisible: false,
      },
    });
  }

  private initChart(): void {
    const container = this.elRef.nativeElement.querySelector('.chart-card__container');
    if (!container) return;

    this.chart = createChart(container, {
      width: container.clientWidth,
      height: 400,
      layout: {
        textColor: this.themeService.isDark() ? '#d1d5db' : '#374151',
        background: { type: ColorType.Solid, color: 'transparent' },
      },
      grid: {
        vertLines: { color: this.themeService.isDark() ? '#374151' : '#e5e7eb' },
        horzLines: { color: this.themeService.isDark() ? '#374151' : '#e5e7eb' },
      },
      crosshair: { mode: 0 },
      rightPriceScale: { borderColor: this.themeService.isDark() ? '#374151' : '#e5e7eb' },
      timeScale: {
        borderColor: this.themeService.isDark() ? '#374151' : '#e5e7eb',
        timeVisible: this.selectedTimeframe().isIntraday,
      },
    });

    this.loadChartData();

    let lastWidth = container.clientWidth;
    this.resizeObserver = new ResizeObserver(entries => {
      if (this.chart && entries[0]) {
        const newWidth = entries[0].contentRect.width;
        this.chart.applyOptions({ width: newWidth });

        // If the width expands from 0 (e.g. tab switch), ensures the data fills the space.
        if (lastWidth === 0 && newWidth > 0) {
          this.chart.timeScale().fitContent();
        }
        lastWidth = newWidth;
      }
    });
    this.resizeObserver.observe(container);
  }

  rebuildSeries(providedData?: CandleData[]): void {
    if (!this.chart) return;

    if (this.series) {
      this.chart.removeSeries(this.series);
      this.series = null;
    }

    const data = providedData;
    if (!data || data.length === 0) return;

    if (this.chartType === 'candlestick') {
      const candlestickSeries = this.chart.addCandlestickSeries({
        upColor: '#16a34a',
        downColor: '#dc2626',
        borderUpColor: '#16a34a',
        borderDownColor: '#dc2626',
        wickUpColor: '#16a34a',
        wickDownColor: '#dc2626',
      });
      candlestickSeries.setData(data.map(d => ({
        time: d.time as Time,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
      })));
      this.series = candlestickSeries;
    } else {
      const areaSeries = this.chart.addAreaSeries({
        lineColor: '#3b82f6',
        topColor: 'rgba(59, 130, 246, 0.4)',
        bottomColor: 'rgba(59, 130, 246, 0.0)',
        lineWidth: 2,
      });
      areaSeries.setData(data.map((d: CandleData) => ({ time: d.time as Time, value: d.close })));
      this.series = areaSeries;
    }

    this.chart.timeScale().fitContent();
  }

  private applyTheme(): void {
    if (!this.chart) return;
    const isDark = this.themeService.isDark();
    this.chart.applyOptions({
      layout: {
        textColor: isDark ? '#d1d5db' : '#374151',
        background: { type: ColorType.Solid, color: 'transparent' },
      },
      grid: {
        vertLines: { color: isDark ? '#374151' : '#e5e7eb' },
        horzLines: { color: isDark ? '#374151' : '#e5e7eb' },
      },
      rightPriceScale: { borderColor: isDark ? '#374151' : '#e5e7eb' },
      timeScale: { borderColor: isDark ? '#374151' : '#e5e7eb' },
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.dataSubscription?.unsubscribe();
    this.chart?.remove();
    this.chart = null;
    this.series = null;
  }
}
