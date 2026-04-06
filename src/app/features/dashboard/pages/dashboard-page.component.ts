import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { WatchlistComponent } from '../components/watchlist/watchlist.component';
import { WatchlistStore } from '../data-access/watchlist.store';
import { ExportService } from '../../../core/services/export.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    SearchBarComponent, WatchlistComponent, MatButtonModule, MatIconModule, MatTooltipModule
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
  readonly store = inject(WatchlistStore);
  private readonly exportService = inject(ExportService);

  ngOnInit(): void {
    this.store.initialize();
  }

  exportToCsv(): void {
    this.exportService.exportWatchlistToCsv(this.store.items());
  }
}
