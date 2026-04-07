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
      this.sanitizeValue(item.symbol),
      this.sanitizeValue(item.name),
      this.sanitizeValue(item.currentPrice),
      this.sanitizeValue(item.change),
      this.sanitizeValue(item.percentChange),
      this.sanitizeValue(item.openPrice),
      this.sanitizeValue(item.highPrice),
      this.sanitizeValue(item.lowPrice),
      this.sanitizeValue(item.previousClose),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    this.downloadFile(csvContent, `watchlist_export_${new Date().toISOString().split('T')[0]}.csv`, 'text/csv');
  }

  /**
   * Sanitizes a value to prevent CSV injection.
   * If a value starts with characteristics that could trigger a formula (=, +, -, @),
   * it prefixes it with a single quote.
   */
  private sanitizeValue(value: string | number | null | undefined): string {
    if (value === null || value === undefined) return '';
    
    // Convert to string and escape existing quotes
    let stringValue = value.toString().replace(/"/g, '""');
    
    // Check for common formula triggers
    const formulaTriggers = ['=', '+', '-', '@'];
    if (formulaTriggers.some(trigger => stringValue.startsWith(trigger))) {
      stringValue = `'${stringValue}`;
    }

    // Wrap in double quotes if it contains commas or was sanitized
    return `"${stringValue}"`;
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
