const { createEsmPreset } = require('jest-preset-angular/presets');

const basePreset = createEsmPreset();

module.exports = {
  ...basePreset,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    ...(basePreset.moduleNameMapper ?? {}),
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!(tslib|rxjs)/)'],
};
