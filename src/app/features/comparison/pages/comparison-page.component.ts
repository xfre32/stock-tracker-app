import { Component, signal, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { NotificationService } from '../../../core/services/notification.service';
import { FinnhubApiService } from '../../../core/services/finnhub-api.service';
import { SearchBarComponent } from '../../dashboard/components/search-bar/search-bar.component';
import { ComparisonTableComponent } from '../components/comparison-table/comparison-table.component';
import { OverlappingChartComponent } from '../components/overlapping-chart/overlapping-chart.component';

@Component({
  selector: 'app-comparison-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatChipsModule,
    SearchBarComponent,
    ComparisonTableComponent,
    OverlappingChartComponent,
  ],
  templateUrl: './comparison-page.component.html',
  styleUrl: './comparison-page.component.scss',
})
export class ComparisonPageComponent {
  readonly symbols = signal<string[]>([]);
  private readonly api = inject(FinnhubApiService);
  private readonly notification = inject(NotificationService);

  addStock(symbol: string): void {
    const upperSymbol = symbol.toUpperCase().trim();

    if (this.symbols().includes(upperSymbol)) {
      this.notification.warning(`${upperSymbol} is already being compared.`);
      return;
    }

    if (this.symbols().length >= 3) {
      this.notification.warning('You can compare a maximum of 3 stocks at once.');
      return;
    }

    this.api.searchStock(upperSymbol).subscribe({
      next: (search) => {
        const match = search.result?.find(
          (r: any) => r.symbol === upperSymbol || r.displaySymbol === upperSymbol
        );
        if (!match) {
          this.notification.warning(`"${upperSymbol}" is not a valid stock symbol.`);
        } else {
          this.symbols.update(current => [...current, upperSymbol]);
        }
      },
      error: () => {
        this.notification.warning(`Failed to validate symbol "${upperSymbol}".`);
      }
    });
  }

  removeStock(symbol: string): void {
    this.symbols.update(current => current.filter(s => s !== symbol));
  }
}
