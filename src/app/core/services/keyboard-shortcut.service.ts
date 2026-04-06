import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KeyboardShortcutService {
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
}
