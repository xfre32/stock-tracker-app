// Copy this file as environment.ts and environment.prod.ts
// Replace the placeholder values with your actual API credentials
// NEVER commit the actual environment.ts or environment.prod.ts files

export const environment = {
  production: false, // set to true for environment.prod.ts
  finnhub: {
    baseUrl: 'https://finnhub.io/api/v1',
    apiKey: 'YOUR_FINNHUB_API_KEY_HERE' // Get your free key at https://finnhub.io/register
  }
};
