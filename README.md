# [Stock Tracker App](https://xfre32.github.io/stock-tracker-app/)

A real-time stock tracking application built with Angular. Track stock prices, view insider sentiment, and manage your watchlist.

## Prerequisites

- [Node.js](https://nodejs.org/) (v22+)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)
- A free [Finnhub](https://finnhub.io/register) API key

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/xfre32/stock-tracker-app.git
   cd stock-tracker-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment files:
   ```bash
   cp src/environments/environment.template.ts src/environments/environment.ts
   cp src/environments/environment.template.ts src/environments/environment.prod.ts
   ```

4. Edit the environment files and replace `YOUR_FINNHUB_API_KEY_HERE` with your actual Finnhub API key. Set `production: true` in `environment.prod.ts`.

## Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload on source changes.

## Build

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Testing

```bash
ng test
```

## Deployment

This project is deployed to GitHub Pages via the `gh-pages` branch.
