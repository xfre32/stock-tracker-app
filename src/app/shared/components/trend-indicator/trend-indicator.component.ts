import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-trend-indicator',
  standalone: true,
  imports: [MatIconModule, DecimalPipe],
  templateUrl: './trend-indicator.component.html',
  styleUrl: './trend-indicator.component.scss',
})
export class TrendIndicatorComponent {
  readonly value = input.required<number>();
}
