module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/*.spec.js',
    '!**/node_modules/**',
  ],
  projects: [
    {
      displayName: 'server',
      testMatch: [
        '<rootDir>/server/**/*.spec.js',
        '<rootDir>/index.spec.js',
      ],
      preset: 'jest-preset-loopback',
      moduleFileExtensions: [
        'js',
        'json',
      ],
      transform: {
        '^.+\\.js$': 'babel-jest',
      },
      setupTestFrameworkScriptFile: './jest.plugins.js',
    },
    {
      displayName: 'test',
      testMatch: ['<rootDir>/test/**/*.spec.js'],
    },
    {
      displayName: 'client',
      testMatch: ['<rootDir>/client/**/*.spec.js'],
      moduleFileExtensions: [
        'js',
        'json',
        'vue',
      ],
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
      },
    },
    {
      displayName: 'common',
      testMatch: ['<rootDir>/common/**/*.spec.js'],
    },
  ],
};
