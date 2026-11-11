import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', {
      useESM: true,
    }],
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
    '^@nestjs/(.*)$': '<rootDir>/../node_modules/@nestjs/$1',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;