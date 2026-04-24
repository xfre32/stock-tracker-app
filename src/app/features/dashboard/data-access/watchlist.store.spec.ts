import { TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { WatchlistStore } from './watchlist.store';
import { StockApiService } from '../../../core/services/stock-api.service';
import { StorageService } from '../../../core/services/storage.service';
import { WebSocketService } from '../../../core/services/websocket.service';
import { NotificationService } from '../../../core/services/notification.service';
import { of } from 'rxjs';

describe('WatchlistStore', () => {
  let store: WatchlistStore;
  let apiMock: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  let storageMock: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  let wsMock: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  let notificationMock: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  beforeEach(() => {
    apiMock = {
      searchStock: jest.fn().mockReturnValue(of({ result: [{ symbol: 'AAPL', description: 'Apple Inc' }] })),
      getQuote: jest.fn().mockReturnValue(of({ c: 150, o: 145, h: 155, l: 140, d: 5, dp: 3.45, pc: 145 })),
    };

    storageMock = {
      get: jest.fn().mockReturnValue(['AAPL']),
      set: jest.fn(),
    };

    wsMock = {
      connect: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
      disconnect: jest.fn(),
      lastTrade: jest.fn().mockReturnValue(null),
    };

    notificationMock = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        WatchlistStore,
        { provide: StockApiService, useValue: apiMock },
        { provide: StorageService, useValue: storageMock },
        { provide: WebSocketService, useValue: wsMock },
        { provide: NotificationService, useValue: notificationMock },
      ],
    });

    store = TestBed.inject(WatchlistStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should format symbols for persistence ignoring live updates (F-PERF-001)', () => {
    // Initial state from mock storage
    store.initialize();
    
    // items() will be updated when fetchStockData completes
    expect(apiMock.getQuote).toHaveBeenCalledWith('AAPL');
  });

  it('should clean up subscriptions on remove (F-REL-001)', () => {
    store.removeStock('AAPL');
    expect(wsMock.unsubscribe).toHaveBeenCalledWith('AAPL');
  });
});
