import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { StockSearchResponse, StockQuote } from '../../shared/models/stock.model';
import { CompanyProfile, CompanyNews } from '../../shared/models/company.model';
import { InsiderSentimentResponse } from '../../shared/models/sentiment.model';
import { CandleResponse, CandleData } from '../../shared/models/candle.model';

@Injectable({ providedIn: 'root' })
export class FinnhubApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.finnhub.baseUrl;
  private readonly apiKey = environment.finnhub.apiKey;

  private params(extra: Record<string, string> = {}): HttpParams {
    return new HttpParams({ fromObject: { token: this.apiKey, ...extra } });
  }

  searchStock(query: string): Observable<StockSearchResponse> {
    return this.http.get<StockSearchResponse>(`${this.baseUrl}/search`, {
      params: this.params({ q: query }),
    });
  }

  getQuote(symbol: string): Observable<StockQuote> {
    return this.http.get<StockQuote>(`${this.baseUrl}/quote`, {
      params: this.params({ symbol }),
    });
  }

  getCompanyProfile(symbol: string): Observable<CompanyProfile> {
    return this.http.get<CompanyProfile>(`${this.baseUrl}/stock/profile2`, {
      params: this.params({ symbol }),
    });
  }

  getCompanyNews(symbol: string, from: string, to: string): Observable<CompanyNews[]> {
    return this.http.get<CompanyNews[]>(`${this.baseUrl}/company-news`, {
      params: this.params({ symbol, from, to }),
    });
  }

  getInsiderSentiment(symbol: string, from: string, to: string): Observable<InsiderSentimentResponse> {
    return this.http.get<InsiderSentimentResponse>(`${this.baseUrl}/stock/insider-sentiment`, {
      params: this.params({ symbol, from, to }),
    });
  }

  getCandles(symbol: string, resolution: string, from: number, to: number): Observable<CandleData[]> {
    return this.http.get<CandleResponse>(`${this.baseUrl}/stock/candle`, {
      params: this.params({
        symbol,
        resolution,
        from: from.toString(),
        to: to.toString(),
      }),
    }).pipe(
      map(response => this.transformCandles(response)),
    );
  }

  private transformCandles(response: CandleResponse): CandleData[] {
    if (response.s !== 'ok' || !response.t) return [];
    return response.t.map((timestamp, i) => ({
      time: new Date(timestamp * 1000).toISOString().split('T')[0],
      open: response.o[i],
      high: response.h[i],
      low: response.l[i],
      close: response.c[i],
      volume: response.v[i],
    }));
  }
}
