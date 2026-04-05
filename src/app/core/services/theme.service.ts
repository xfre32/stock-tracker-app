import { Injectable, signal, effect, inject, Renderer2, RendererFactory2 } from '@angular/core';
import { StorageService } from './storage.service';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storage = inject(StorageService);
  private readonly renderer: Renderer2;

  readonly theme = signal<Theme>(this.loadInitialTheme());
  readonly isDark = () => this.theme() === 'dark-theme';

  constructor() {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);

    effect(() => {
      const current = this.theme();
      const opposite: Theme = current === 'dark-theme' ? 'light-theme' : 'dark-theme';
      this.renderer.removeClass(document.documentElement, opposite);
      this.renderer.addClass(document.documentElement, current);
      this.storage.set('theme', current);
    });
  }

  toggle(): void {
    this.theme.update(t => t === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  private loadInitialTheme(): Theme {
    const saved = this.storage.get<Theme>('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
  }
}
