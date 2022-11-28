import { Injectable } from "@angular/core";
import * as moment from "moment";
import { combineLatest, map, Observable } from "rxjs";
import { Sentiment } from "src/app/shared/interfaces/sentiment.interface";
import { ApiService } from "src/app/shared/services/api.service";

@Injectable({providedIn: 'root'})
export class StockSentimentService {
    constructor(private api: ApiService) {}

    public getStockSentiment(symbol: string): Observable<Sentiment> {
        return this.extractStockSentiment(symbol, this.calcDuration())
    }

    public extractStockSentiment(symbol: string, duration: {from: string, to: string}): Observable<Sentiment>{
        return combineLatest({stockSearch: this.api.searchStock(symbol), insiderSentiment: this.api.getInsiderSentiment(symbol, duration)}).pipe(
            map(({stockSearch, insiderSentiment}) => ({
                symbol: symbol,
                name: stockSearch.result[0].description,
                data: insiderSentiment.data
            }))
        );
    }

    public calcDuration(): {from: string, to: string} {
        const msInHour = 1000 * 60 * 60;
        const msInDay = 24 * msInHour;
        const msInThreeMonths = 3 * 30 * msInDay;
        const today = new Date();
        const threeMonthsBack = today.getTime() - msInThreeMonths;

        return { from: moment(new Date(threeMonthsBack)).format('YYYY-MM-DD'), to: moment(new Date(today)).format('YYYY-MM-DD') };
    }
}