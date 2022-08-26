module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/lib/setup-tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'src/lib'],
  moduleNameMapper: {
    '@/components/(.*)': ['<rootDir>/src/components/$1'],
    '@/lib/(.*)': ['<rootDir>/src/lib/$1'],
    '@/pages/(.*)': ['<rootDir>/src/pages/$1'],
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,
  },
}
