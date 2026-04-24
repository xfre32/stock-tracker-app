import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { AuthResponse } from '../../shared/models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly storage = inject(StorageService);
  private readonly baseUrl = environment.apiBaseUrl;

  readonly currentUser = signal<string | null>(this.storage.get<string>('username'));
  readonly isLoggedIn = computed(() => !!this.currentUser());

  register(username: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, {
      username, email, password
    }).pipe(tap(res => this.storeTokens(res)));
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, {
      username, password
    }).pipe(tap(res => this.storeTokens(res)));
  }

  logout(): void {
    this.storage.remove('accessToken');
    this.storage.remove('refreshToken');
    this.storage.remove('username');
    this.currentUser.set(null);
  }

  getAccessToken(): string | null {
    return this.storage.get<string>('accessToken');
  }

  private storeTokens(res: AuthResponse): void {
    this.storage.set('accessToken', res.accessToken);
    this.storage.set('refreshToken', res.refreshToken);
    this.storage.set('username', res.username);
    this.currentUser.set(res.username);
  }
}
