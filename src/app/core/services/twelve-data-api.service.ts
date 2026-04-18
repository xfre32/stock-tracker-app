import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CandleData } from '../../shared/models/candle.model';

interface TwelveDataTimeSeriesResponse {
  status?: string;
  message?: string;
  values?: TwelveDataValue[];
}

interface TwelveDataValue {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

@Injectable({ providedIn: 'root' })
export class TwelveDataApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.twelveData.baseUrl;
  private readonly apiKey = environment.twelveData.apiKey;

  /**
   * Fetch time-series data from Twelve Data
   * @param symbol Stock ticker
   * @param interval Data interval (e.g., '5min', '15min', '1day')
   * @param outputsize Number of data points to fetch
   */
  getTimeSeries(symbol: string, interval: string, outputsize: number): Observable<CandleData[]> {
    return this.http.get<TwelveDataTimeSeriesResponse>(`${this.baseUrl}/time_series`, {
      params: {
        symbol,
        interval,
        outputsize: outputsize.toString(),
        apikey: this.apiKey,
      },
    }).pipe(
      map((response) => {
        if (response.status === 'error') {
          throw new Error(response.message || 'Twelve Data API Error');
        }
        return this.transformToCandles(response.values ?? []);
      })
    );
  }

  private transformToCandles(values: TwelveDataValue[]): CandleData[] {
    return values
      .map((v) => {
        // Twelve Data returns 'YYYY-MM-DD' or 'YYYY-MM-DD HH:mm:ss'
        // Conver to Unix timestamp (seconds) for most reliable scaling in Lightweight Charts
        const timestamp = Math.floor(Date.parse(v.datetime) / 1000);

        return {
          // Lightweight Charts accepts number (Unix timestamp) or string (YYYY-MM-DD)
          // We provide number to handle intraday data correctly
          time: timestamp,
          open: parseFloat(v.open),
          high: parseFloat(v.high),
          low: parseFloat(v.low),
          close: parseFloat(v.close),
          volume: parseInt(v.volume, 10),
        };
      })
      .reverse(); // Twelve Data returns newest-first, Lightweight Charts needs oldest-first
  }
}
