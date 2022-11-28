import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'month'})
export class MonthNamePipe implements PipeTransform{
    transform(monthNumber: number): string {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', {month: 'long'});
    }
}