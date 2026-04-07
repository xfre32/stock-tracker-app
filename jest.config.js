const { createEsmPreset } = require('jest-preset-angular/presets');

const basePreset = createEsmPreset();

module.exports = {
  ...basePreset,
  moduleNameMapper: {
    ...(basePreset.moduleNameMapper ?? {}),
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@angular|rxjs|tslib|lightweight-charts)/)',
  ],
};
