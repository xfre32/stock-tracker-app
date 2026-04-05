import { Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CompanyProfile } from '../../../../shared/models/company.model';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [SlicePipe, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.scss',
})
export class CompanyProfileComponent {
  readonly profile = input.required<CompanyProfile>();

  formatMarketCap(value: number): string {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}T`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}B`;
    return `$${value.toFixed(0)}M`;
  }
}
