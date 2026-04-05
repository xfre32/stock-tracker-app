import { Component, input } from '@angular/core';
import { DatePipe, SlicePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CompanyNews } from '../../../../shared/models/company.model';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [DatePipe, SlicePipe, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss',
})
export class NewsFeedComponent {
  readonly news = input.required<CompanyNews[]>();

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
