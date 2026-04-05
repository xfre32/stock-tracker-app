import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'monthName', standalone: true })
export class MonthNamePipe implements PipeTransform {
  transform(month: number): string {
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(2000, month - 1));
  }
}
