import { Injectable, signal, OnDestroy } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebSocketService implements OnDestroy {
  private stomp: RxStomp | null = null;
  private subscription: Subscription | null = null;

  // Expose a signal for the latest trade
  readonly lastTrade = signal<{ symbol: string; price: number; timestamp: number } | null>(null);

  connect(): void {
    if (this.stomp) return;

    this.stomp = new RxStomp();
    this.stomp.configure({
      brokerURL: environment.wsBaseUrl,
      reconnectDelay: 5000,
      debug: (msg: string) => {
        if (!environment.production) {
          console.log(new Date(), msg);
        }
      }
    });
    this.stomp.activate();

    this.subscription = this.stomp.watch('/topic/trades').subscribe(msg => {
      try {
        const trade = JSON.parse(msg.body);
        this.lastTrade.set(trade);
      } catch (e) {
        console.error('Error parsing trade message:', e);
      }
    });
  }

  subscribe(symbol: string): void {
    if (!this.stomp?.connected()) {
      this.connect();
    }
    // Send subscription request to backend via STOMP
    this.stomp?.publish({ 
      destination: '/app/subscribe', 
      body: symbol.toUpperCase() 
    });
  }

  unsubscribe(symbol: string): void {
    this.stomp?.publish({ 
      destination: '/app/unsubscribe', 
      body: symbol.toUpperCase() 
    });
  }

  disconnect(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.stomp?.deactivate();
    this.stomp = null;
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}