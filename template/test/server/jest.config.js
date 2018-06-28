module.exports = {
  preset: 'jest-preset-loopback',
  moduleFileExtensions: [
    'js',
    'json',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupTestFrameworkScriptFile: './jest.plugins.js',
};
