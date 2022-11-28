import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { StockSearch } from "../interfaces/stock-search.interface";
import { environment } from "src/environments/environment";
import { Quote } from "../interfaces/quote.interface";
import { InsiderSentiment } from "../interfaces/insider-sentiment.interface";

@Injectable({providedIn: 'root'})
export class ApiService{
    constructor(private http: HttpClient) {}

    searchStock(symbol: string): Observable<StockSearch>{
        return this.http.get<StockSearch>(
            `${environment.endPoint}/search?q=${symbol}&token=${environment.apiKey}`);
    }

    getQuote(symbol: string): Observable<Quote>{
        return this.http.get<Quote>(
            `${environment.endPoint}/quote?symbol=${symbol}&token=${environment.apiKey}`
        );
    }

    getInsiderSentiment(symbol: string, duration: {from: string; to: string}): Observable<InsiderSentiment> {
        return this.http.get<InsiderSentiment>(
            `${environment.endPoint}/stock/insider-sentiment?symbol=${symbol}&from=${duration.from}&to=${duration.to}&token=${environment.apiKey}`
        );
    }
}