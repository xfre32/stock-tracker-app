import { Injectable } from "@angular/core";
import { Stock } from "src/app/shared/interfaces/stock.interface";
import { ApiService } from "src/app/shared/services/api.service";
import * as _ from 'lodash';
import { combineLatest, map, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class StocksListExtractorService {
    constructor(private api: ApiService) {}

    public createStockList(searchedSymbols: string[]): Stock[] {
        return _.map(searchedSymbols, (symbol: string) => ({symbol: symbol, isLoaded: false}));
    }

    public extractStock(symbol: string): Observable<Stock>{
        return combineLatest({ stockSearch: this.api.searchStock(symbol), quote: this.api.getQuote(symbol) }).pipe(
            map(({stockSearch, quote}) => ({
                symbol: symbol,
                isLoaded: true,
                data: {name: stockSearch.result[0].description, currentPrice: quote.c, percentChange: quote.dp, highPrice: quote.h, openingPrice: quote.o}
            }))
        );
    }
}