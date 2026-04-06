import { Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CompanyProfile } from '../../../../shared/models/company.model';
import { MarketCapPipe } from '../../../../shared/pipes/market-cap.pipe';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [SlicePipe, MatCardModule, MatIconModule, MatChipsModule, MarketCapPipe],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.scss',
})
export class CompanyProfileComponent {
  readonly profile = input.required<CompanyProfile>();
}
