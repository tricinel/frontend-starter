module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    node: true
  },
  extends: [
    'frontwerk',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error'
  }
};
