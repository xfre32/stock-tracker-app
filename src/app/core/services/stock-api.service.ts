import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StockSearchResponse, StockQuote } from '../../shared/models/stock.model';
import { CompanyProfile, CompanyNews } from '../../shared/models/company.model';
import { InsiderSentimentResponse } from '../../shared/models/sentiment.model';

@Injectable({ providedIn: 'root' })
export class StockApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  searchStock(query: string): Observable<StockSearchResponse> {
    return this.http.get<StockSearchResponse>(`${this.baseUrl}/stocks/search`, {
      params: { q: query }
    });
  }

  getQuote(symbol: string): Observable<StockQuote> {
    return this.http.get<StockQuote>(`${this.baseUrl}/stocks/${symbol}/quote`);
  }

  getCompanyProfile(symbol: string): Observable<CompanyProfile> {
    return this.http.get<CompanyProfile>(`${this.baseUrl}/stocks/${symbol}/profile`);
  }

  getCompanyNews(symbol: string, from: string, to: string): Observable<CompanyNews[]> {
    return this.http.get<CompanyNews[]>(`${this.baseUrl}/stocks/${symbol}/news`, {
      params: { from, to }
    });
  }

  getInsiderSentiment(symbol: string, from: string, to: string): Observable<InsiderSentimentResponse> {
    return this.http.get<InsiderSentimentResponse>(`${this.baseUrl}/stocks/${symbol}/sentiment`, {
      params: { from, to }
    });
  }
}
