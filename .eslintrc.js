module.exports = {
  root: true,
  env: {
    browser: true,

    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
  },
}
