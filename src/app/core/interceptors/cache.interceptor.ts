import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

interface CacheEntry {
  response: HttpResponse<unknown>;
  expiry: number;
}

const cache = new Map<string, CacheEntry>();

// Default TTL: 60 seconds for quote data, 5 minutes for profiles
const TTL_MAP: Record<string, number> = {
  '/quote': 60_000,
  '/stock/profile2': 300_000,
  '/company-news': 300_000,
  '/stock/insider-sentiment': 300_000,
  '/search': 120_000,
  '/time_series': 300_000,
};

function getTTL(url: string): number {
  for (const [path, ttl] of Object.entries(TTL_MAP)) {
    if (url.includes(path)) return ttl;
  }
  return 60_000; // default 1 minute
}

const MAX_CACHE_SIZE = 100;

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  // Only cache GET requests
  if (req.method !== 'GET') return next(req);

  const cacheKey = req.urlWithParams;
  const cached = cache.get(cacheKey);

  // LRU: If hit, move to end of Map and return if not expired
  if (cached) {
    cache.delete(cacheKey);
    if (cached.expiry > Date.now()) {
      cache.set(cacheKey, cached); // Re-insert at the end
      return of(cached.response.clone());
    }
  }

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse && event.status === 200) {
        // Eviction policy: Remove oldest if full (F-PERF-003)
        if (cache.size >= MAX_CACHE_SIZE) {
          const firstKey = cache.keys().next().value;
          if (firstKey !== undefined) cache.delete(firstKey);
        }

        cache.set(cacheKey, {
          response: event.clone(),
          expiry: Date.now() + getTTL(req.url),
        });
      }
    })
  );
};
