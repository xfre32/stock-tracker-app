import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketCap',
  standalone: true
})
export class MarketCapPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) return '';
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}T`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}B`;
    return `$${value.toFixed(0)}M`;
  }
}
