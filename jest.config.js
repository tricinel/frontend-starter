module.exports = {
  roots: ['src'],
  collectCoverageFrom: ['src/**/*.+(js|jsx)'],
  testMatch: ['**/__tests__/**/*.+(js|jsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/fixtures/',
    '/__tests__/helpers/',
    '__mocks__'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/fixtures/',
    '/__tests__/helpers/',
    '__mocks__',
    'src/(umd|cjs|esm)-entry.js$',
    '.stories.js$'
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
