import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { StocksListControllerService } from "./stocks-list/services/stocks-list-controller.service";
import * as _ from 'lodash'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public stockInput: string = '';
    constructor(private localStorage: LocalStorageService, private stockList: StocksListControllerService) {}

    public trackStock(stockInput: string): void{
        console.log(stockInput)
        const currentSearchedSymbols = this.localStorage.getData('searched_symbols');

        if (_.find(currentSearchedSymbols, (searchedSymbol) => searchedSymbol === stockInput)) {
            alert(`${stockInput} has already been added to watchlist`);
          } else {
            if (currentSearchedSymbols) {
              this.localStorage.saveData('searched_symbols', [...currentSearchedSymbols, stockInput]);
            } else {
              this.localStorage.saveData('searched_symbols', [stockInput]);
            }
            this.stockList.addStock(stockInput);
          }
      
          this.stockInput = '';
    }

    ngOnInit(): void {
        
    }

}