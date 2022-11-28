import { InsiderSentimentData } from "./insider-sentiment.interface";

export interface Sentiment{
    symbol: string;
    name: string;
    data: InsiderSentimentData[]
}