import { Injectable, signal } from "@angular/core";
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
    private socket: WebSocket | null = null;
    private readonly apiKey = environment.finnhub.apiKey;
    private subscribedSymbols = new Set<string>();

    private intentionalDisconnect = false;

    // Expose a signal for the latest trade
    readonly lastTrade = signal<{ symbol: string; price: number; timestamp: number } | null>(null);

    connect(): void {
        if (this.socket) return;
        this.intentionalDisconnect = false;
        this.socket = new WebSocket(`wss://ws.finnhub.io?token=${this.apiKey}`);

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'trade' && data.data?.length > 0) {
                const trade = data.data[data.data.length - 1]; // latest trade
                this.lastTrade.set({
                    symbol: trade.s,
                    price: trade.p,
                    timestamp: trade.t,
                });
            }
        };

        this.socket.onopen = () => {
            // Re-subscribe to any pending symbols
            this.subscribedSymbols.forEach(s => this.sendSubscriptionStatus(s, 'subscribe'));
        };

        this.socket.onclose = () => {
            this.socket = null;
            if (!this.intentionalDisconnect) {
                setTimeout(() => this.connect(), 5000);
            }
        };
    }

    subscribe(symbol: string): void {
        this.subscribedSymbols.add(symbol);
        this.sendSubscriptionStatus(symbol, 'subscribe');
    }

    unsubscribe(symbol: string): void {
        this.subscribedSymbols.delete(symbol);
        this.sendSubscriptionStatus(symbol, 'unsubscribe');
    }

    private sendSubscriptionStatus(symbol: string, status: 'subscribe' | 'unsubscribe'): void {
        if (this.socket?.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ type: status, symbol }));
        }
    }

    disconnect(): void {
        this.intentionalDisconnect = true;
        this.socket?.close();
        this.socket = null;
        this.subscribedSymbols.clear();
    }
}