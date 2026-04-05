import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError, retry, timer } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notification = inject(NotificationService);

  return next(req).pipe(
    retry({
      count: 2,
      delay: (error, retryCount) => {
        if (error instanceof HttpErrorResponse && (error.status === 429 || error.status >= 500)) {
          return timer(retryCount * 1000);
        }
        return throwError(() => error);
      },
    }),
    catchError((error: HttpErrorResponse) => {
      let message = 'An unexpected error occurred';
      if (error.status === 0) {
        message = 'Network error — please check your internet connection';
      } else if (error.status === 401) {
        message = 'Invalid API key — please check your Finnhub configuration';
      } else if (error.status === 429) {
        message = 'Rate limit exceeded — please wait a moment and try again';
      } else if (error.status >= 500) {
        message = 'Server error — Finnhub may be experiencing issues';
      }
      notification.error(message);
      return throwError(() => error);
    }),
  );
};
