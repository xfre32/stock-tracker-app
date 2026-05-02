import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface WatchlistItemResponse {
  symbol: string;
  addedAt: string;
}

export interface WatchlistItemRequest {
  symbol: string;
}

@Injectable({ providedIn: 'root' })
export class WatchlistApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/watchlist`;

  getWatchlist(): Observable<WatchlistItemResponse[]> {
    return this.http.get<WatchlistItemResponse[]>(this.baseUrl);
  }

  addSymbol(symbol: string): Observable<WatchlistItemResponse> {
    return this.http.post<WatchlistItemResponse>(this.baseUrl, { symbol });
  }

  removeSymbol(symbol: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${symbol}`);
  }
}
