import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Sentiment } from "src/app/shared/interfaces/sentiment.interface";
import { StockSentimentService } from "./services/stock-sentiment.service";

@Component({
    selector: 'app-stock-sentiment',
    templateUrl: 'stock-sentiment.component.html'
})
export class StockSentimentComponent {
    public sentiment$: Observable<Sentiment>;

    constructor(private sentiment: StockSentimentService, private route: ActivatedRoute) {
        this.sentiment$ = this.sentiment.getStockSentiment(this.route.snapshot.params['symbol']);
    }

}
