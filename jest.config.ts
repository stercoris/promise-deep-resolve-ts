import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts'],
  rootDir: './src',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
};
export default config;
