module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        endOfLine: 'auto',
        'react/prop-types': {
          enabled: off,
        },
      },
    ],
    seni: 'off',
  },
}
