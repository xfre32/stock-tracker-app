/** Raw Finnhub /stock/candle response */
export interface CandleResponse {
  c: number[];  // Close prices
  h: number[];  // High prices
  l: number[];  // Low prices
  o: number[];  // Open prices
  t: number[];  // Timestamps (Unix)
  v: number[];  // Volumes
  s: string;    // Status (ok/no_data)
}

/** Transformed for TradingView Lightweight Charts */
export interface CandleData {
  time: string | number;   // YYYY-MM-DD
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}
