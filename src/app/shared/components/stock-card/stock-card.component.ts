import { Component, input, output } from '@angular/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TrendIndicatorComponent } from '../trend-indicator/trend-indicator.component';
import { WatchlistItem } from '../../models/stock.model';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, TrendIndicatorComponent],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.scss',
})
export class StockCardComponent {
  readonly item = input.required<WatchlistItem>();
  readonly remove = output<string>();
  readonly viewDetails = output<string>();
}
