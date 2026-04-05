import {
  Component, ElementRef, OnDestroy, afterNextRender, inject, input, effect,
} from '@angular/core';
import { createChart, IChartApi, ISeriesApi, ColorType } from 'lightweight-charts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ThemeService } from '../../../../core/services/theme.service';
import { CandleData } from '../../../../shared/models/candle.model';

@Component({
  selector: 'app-price-chart',
  standalone: true,
  imports: [MatButtonToggleModule, MatCardModule],
  templateUrl: './price-chart.component.html',
  styleUrl: './price-chart.component.scss',
})
export class PriceChartComponent implements OnDestroy {
  readonly candles = input.required<CandleData[]>();
  readonly symbol = input.required<string>();

  private readonly elRef = inject(ElementRef);
  private readonly themeService = inject(ThemeService);
  private chart: IChartApi | null = null;
  private series: ISeriesApi<any> | null = null;
  private resizeObserver: ResizeObserver | null = null;
  chartType: 'area' | 'candlestick' = 'area';

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

    effect(() => {
      const data = this.candles();
      if (data.length > 0 && this.chart) {
        this.rebuildSeries();
      }
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
        timeVisible: false,
      },
    });

    this.rebuildSeries();

    this.resizeObserver = new ResizeObserver(entries => {
      if (this.chart && entries[0]) {
        this.chart.applyOptions({ width: entries[0].contentRect.width });
      }
    });
    this.resizeObserver.observe(container);
  }

  rebuildSeries(): void {
    if (!this.chart) return;

    if (this.series) {
      this.chart.removeSeries(this.series);
      this.series = null;
    }

    const data = this.candles();
    if (data.length === 0) return;

    if (this.chartType === 'candlestick') {
      this.series = this.chart.addCandlestickSeries({
        upColor: '#16a34a',
        downColor: '#dc2626',
        borderUpColor: '#16a34a',
        borderDownColor: '#dc2626',
        wickUpColor: '#16a34a',
        wickDownColor: '#dc2626',
      });
      this.series?.setData(data as any);
    } else {
      this.series = this.chart.addAreaSeries({
        lineColor: '#3b82f6',
        topColor: 'rgba(59, 130, 246, 0.4)',
        bottomColor: 'rgba(59, 130, 246, 0.0)',
        lineWidth: 2,
      });
      this.series?.setData(data.map(d => ({ time: d.time, value: d.close })) as any);
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
    this.chart?.remove();
    this.chart = null;
    this.series = null;
  }
}
