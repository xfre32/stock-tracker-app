import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CandleData } from '../../shared/models/candle.model';

@Injectable({ providedIn: 'root' })
export class ChartApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  getTimeSeries(symbol: string, interval: string, outputsize: number): Observable<CandleData[]> {
    return this.http.get<CandleData[]>(`${this.baseUrl}/charts/${symbol}/timeseries`, {
      params: { interval, outputsize: outputsize.toString() }
    });
  }
}
