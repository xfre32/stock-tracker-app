import { Injectable } from '@angular/core';
import { WatchlistItem } from '../../shared/models/stock.model';

@Injectable({ providedIn: 'root' })
export class ExportService {
  /**
   * Generates a CSV from the watchlist items and triggers a browser download.
   */
  exportWatchlistToCsv(items: WatchlistItem[]): void {
    if (items.length === 0) return;

    // Headers exactly as specified in the Phase 2 Implementation Plan
    const headers = [
      'Symbol',
      'Name',
      'Price',
      'Change',
      'Change %',
      'Open',
      'High',
      'Low',
      'Prev Close',
    ];

    const rows = items.map((item) => [
      item.symbol,
      `"${item.name}"`, // Quote names to handle commas
      item.currentPrice,
      item.change,
      item.percentChange,
      item.openPrice,
      item.highPrice,
      item.lowPrice,
      item.previousClose,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    this.downloadFile(csvContent, `watchlist_export_${new Date().toISOString().split('T')[0]}.csv`, 'text/csv');
  }

  private downloadFile(content: string, filename: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  }
}
