import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Stock } from "src/app/shared/interfaces/stock.interface";
import { StocksListControllerService } from "./services/stocks-list-controller.service";

@Component({
    selector: 'app-stocks-list',
    templateUrl: './stocks-list.component.html'
})
export class StocksListComponent implements OnInit{

    public stockList$: Observable<Stock[]>;

    constructor(private stockList: StocksListControllerService) {
        this.stockList$ = this.stockList.getStockList$();
    }

    ngOnInit(): void {
        this.stockList.createStockList();
    }

    public removeStock(stock: Stock) {
        this.stockList.removeStock(stock)
    }

}