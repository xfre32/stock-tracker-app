import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MonthNamePipe } from '../../../../shared/pipes/month-name.pipe';
import { InsiderSentimentData } from '../../../../shared/models/sentiment.model';

@Component({
  selector: 'app-insider-sentiment',
  standalone: true,
  imports: [DecimalPipe, MatTableModule, MonthNamePipe],
  templateUrl: './insider-sentiment.component.html',
  styleUrl: './insider-sentiment.component.scss',
})
export class InsiderSentimentComponent {
  readonly sentiment = input.required<InsiderSentimentData[]>();
  readonly displayedColumns = ['month', 'change', 'mspr'];
}
