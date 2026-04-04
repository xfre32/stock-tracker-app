import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { StockSearch } from "../interfaces/stock-search.interface";
import { Quote } from "../interfaces/quote.interface";
import { InsiderSentiment } from "../interfaces/insider-sentiment.interface";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class ApiService{
    private base: string = environment.base;
    private token: string = environment.token;

    constructor(private http: HttpClient) {}

    searchStock(symbol: string): Observable<StockSearch>{
      const queryParams = new URLSearchParams({ q: symbol, token: this.token });
        return this.http.get<StockSearch>(`${this.base}/search?${queryParams}`);
    }

    getQuote(symbol: string): Observable<Quote>{
      const queryParams = new URLSearchParams({ symbol: symbol, token: this.token });
        return this.http.get<Quote>(`${this.base}/quote?${queryParams}`);
    }

    getInsiderSentiment(symbol: string, duration: {from: string; to: string}): Observable<InsiderSentiment> {
      const queryParams = new URLSearchParams({
        symbol: symbol,
        from: duration.from,
        to: duration.to,
        token: this.token
      })
        return this.http.get<InsiderSentiment>(`${this.base}/stock/insider-sentiment?${queryParams}`);
    }
}
