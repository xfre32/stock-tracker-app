import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TrendIndicatorComponent } from '../../../../shared/components/trend-indicator/trend-indicator.component';
import { StockQuote } from '../../../../shared/models/stock.model';

@Component({
  selector: 'app-key-metrics',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, TrendIndicatorComponent],
  templateUrl: './key-metrics.component.html',
  styleUrl: './key-metrics.component.scss',
})
export class KeyMetricsComponent {
  readonly quote = input.required<StockQuote>();
}
