module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/recommended', 'airbnb-base', 'loopback'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  globals: {
    expect: true,
    assert: true,
    require: true,
    request: true
  }
}
