import { Injectable, OnDestroy, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KeyboardShortcutService implements OnDestroy {
  readonly searchTriggered = signal(false);

  private keydownHandler = (event: KeyboardEvent) => {
    // Check for Ctrl + K or Cmd + K (Mac)
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.searchTriggered.set(true);
      // Reset after a tick so it can be triggered again
      setTimeout(() => this.searchTriggered.set(false), 50);
    }
  };

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.keydownHandler);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.keydownHandler);
    }
  }
}
