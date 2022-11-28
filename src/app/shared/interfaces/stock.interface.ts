export interface Stock {
    symbol: string;
    data?: {name?: string; currentPrice?: number; percentChange?: number; highPrice?: number; openingPrice?: number; currentTrend?: any;};
    isLoaded: boolean;
}