import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WatchlistStore } from '../../data-access/watchlist.store';
import { StockCardComponent } from '../../../../shared/components/stock-card/stock-card.component';
import { SkeletonCardComponent } from '../../../../shared/components/skeleton-card/skeleton-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [StockCardComponent, SkeletonCardComponent, EmptyStateComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent {
  readonly store = inject(WatchlistStore);
  private readonly router = inject(Router);

  loadingSymbols() {
    return Array.from(this.store.loading());
  }

  onViewDetails(symbol: string): void {
    this.router.navigate(['/stock', symbol]);
  }
}
