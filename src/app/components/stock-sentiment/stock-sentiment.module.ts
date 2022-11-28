import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MonthNamePipe } from "./pipes/month-name.pipe";
import { StockSentimentComponent } from "./stock-sentiment.component";

const routes: Routes = [
    {
        path: '',
        component: StockSentimentComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class StockSentimentRoutingModule{}

@NgModule({
    declarations: [StockSentimentComponent, MonthNamePipe],
    imports: [CommonModule, StockSentimentRoutingModule],
    providers: []
})
export class StockSentimentModule{}