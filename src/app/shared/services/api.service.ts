import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { StockSearch } from "../interfaces/stock-search.interface";
import { Quote } from "../interfaces/quote.interface";
import { InsiderSentiment } from "../interfaces/insider-sentiment.interface";

@Injectable({providedIn: 'root'})
export class ApiService{
    private endPoint: string = 'https://finnhub.io/api/v1';
    private apiKey: string = 'bu4f8kn48v6uehqi3cqg';
    
    constructor(private http: HttpClient) {}

    searchStock(symbol: string): Observable<StockSearch>{
        return this.http.get<StockSearch>(
            `${this.endPoint}/search?q=${symbol}&token=${this.apiKey}`);
    }

    getQuote(symbol: string): Observable<Quote>{
        return this.http.get<Quote>(
            `${this.endPoint}/quote?symbol=${symbol}&token=${this.apiKey}`
        );
    }

    getInsiderSentiment(symbol: string, duration: {from: string; to: string}): Observable<InsiderSentiment> {
        return this.http.get<InsiderSentiment>(
            `${this.endPoint}/stock/insider-sentiment?symbol=${symbol}&from=${duration.from}&to=${duration.to}&token=${this.apiKey}`
        );
    }
}