import { Component, inject, OnInit } from '@angular/core';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { WatchlistComponent } from '../components/watchlist/watchlist.component';
import { WatchlistStore } from '../data-access/watchlist.store';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SearchBarComponent, WatchlistComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
  readonly store = inject(WatchlistStore);

  ngOnInit(): void {
    this.store.initialize();
  }
}
