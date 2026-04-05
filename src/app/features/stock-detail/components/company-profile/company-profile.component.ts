import { Component, input } from '@angular/core';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CompanyProfile } from '../../../../shared/models/company.model';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.scss',
})
export class CompanyProfileComponent {
  readonly profile = input.required<CompanyProfile>();
}
