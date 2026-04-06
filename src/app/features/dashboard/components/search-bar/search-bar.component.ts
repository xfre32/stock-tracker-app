import { Component, output, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FinnhubApiService } from '../../../../core/services/finnhub-api.service';
import { StockSearchResult } from '../../../../shared/models/stock.model';
import { catchError, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { KeyboardShortcutService } from '../../../../core/services/keyboard-shortcut.service';
import { ElementRef, ViewChild, effect } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatAutocompleteModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  readonly searchInput = new FormControl('');
  readonly suggestions = signal<StockSearchResult[]>([]);
  readonly search = output<string>();

  @ViewChild('searchInputRef') inputElement!: ElementRef<HTMLInputElement>;

  private readonly api = inject(FinnhubApiService);
  private readonly shortcuts = inject(KeyboardShortcutService);

  constructor() {
    effect(() => {
      if (this.shortcuts.searchTriggered()) {
        this.inputElement.nativeElement.focus();
      }
    });
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(term => !!term && term.trim().length >= 1),
      switchMap(term => this.api.searchStock(term!).pipe(
        catchError(() => of({ count: 0, result: [] }))
      )),
    ).subscribe(response => {
      this.suggestions.set(
        (response.result ?? [])
          .filter((r: StockSearchResult) => r.type === 'Common Stock')
          .slice(0, 8)
      );
    });
  }

  onSubmit(): void {
    const value = this.searchInput.value?.trim().toUpperCase();
    if (value) {
      this.search.emit(value);
      this.searchInput.setValue('');
    }
  }

  onSelect(event: MatAutocompleteSelectedEvent): void {
    this.search.emit(event.option.value);
    this.searchInput.setValue('');
  }
}
