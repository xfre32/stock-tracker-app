import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { merge, Observable } from "rxjs";
import { Stock } from "src/app/shared/interfaces/stock.interface";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { StocksListExtractorService } from "./stocks-list-Extractor.service";
import { StocksListSaveService } from "./stocks-list-save.service";

@Injectable({providedIn: 'root'})
export class StocksListControllerService {
    constructor(private save: StocksListSaveService, private extractor: StocksListExtractorService, private localStorage: LocalStorageService) {}

    public createStockList(): void {
        const createStockList = this.extractor.createStockList(this.localStorage.getData('searched_symbols'));
        this.setStockList(createStockList);
        this.loadStockList(createStockList)
    }

    public loadStockList(stockList: Stock[]): void {
        const stockListHttpCall$ = _.map(stockList, (stock) => this.extractor.extractStock(stock.symbol));
        merge(...stockListHttpCall$).subscribe((stock) => this.updateStockList(stock));
    }

    public updateStockList(stock: Stock) {
        let newStockList = this.getStockList();
        const id = _.findIndex(newStockList, {symbol: stock.symbol});
        newStockList[id] = stock;
        this.setStockList(newStockList);
    }

    public addStock(symbol: string): void{
        const stockList = this.getStockList();
        this.setStockList([...stockList, {symbol: symbol, isLoaded: false}]);
        this.extractor.extractStock(symbol).subscribe((newStock) => this.updateStockList(newStock));        
    }

    public removeStock(removedStock: Stock): void{
        const searchedSymbols = this.localStorage.getData('searched_symbols');
        _.remove(searchedSymbols, (symbol) => symbol === removedStock.symbol);
        this.localStorage.saveData('searched_symbols', searchedSymbols);

        const stocksList = this.getStockList();
        _.remove(stocksList, (stock) => stock === removedStock);
        this.setStockList(stocksList);
    }

    public getStockList$(): Observable<Stock[]> {
        return this.save.getStocksList$();
    }

    public getStockList(): Stock[] {
        return this.save.getStocksList();
    }

    private setStockList(newStockList: Stock[]): void {
        this.save.setStocksList(newStockList);
    }

}