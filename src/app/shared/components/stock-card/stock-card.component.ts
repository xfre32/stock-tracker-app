import { Component, effect, input, output, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TrendIndicatorComponent } from '../trend-indicator/trend-indicator.component';
import { WatchlistItem } from '../../models/stock.model';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, TrendIndicatorComponent],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.scss',
})
export class StockCardComponent {
  readonly item = input.required<WatchlistItem>();
  readonly remove = output<string>();
  readonly viewDetails = output<string>();
  readonly updateDirection = signal<'up' | 'down' | null>(null);

  constructor() {
    let previousPrice: number | null = null;
    effect(() => {
      const currentPrice = this.item().currentPrice;
      if (previousPrice !== null && currentPrice !== previousPrice) {
        // Price changed
        this.updateDirection.set(currentPrice > previousPrice ? 'up' : 'down');
        setTimeout(() => this.updateDirection.set(null), 1000); // 1s visible state before fade out
      }
      previousPrice = currentPrice;
    });
  }
}
