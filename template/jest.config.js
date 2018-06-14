module.exports = {
  preset: 'jest-preset-loopback',
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  setupTestFrameworkScriptFile: './jest.plugins.js',
};
