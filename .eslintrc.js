module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/indent': ['error', 2],
    'space-infix-ops': ['error'],
    'space-before-blocks': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error'],
    'no-trailing-spaces': 'error',
    'semi-spacing': 'error',
    'semi': [2, 'always'],
    'indent': ['error', 2],
    'max-len': ['error', { code: 200 }],
    'space-before-function-paren': ['error', { anonymous: "never", named: "never", asyncArrow: "always" }],
    'arrow-spacing': ['error'],
    'key-spacing': 'error',
    'space-in-parens': 'error',
    'no-spaced-func': 'error',
    'keyword-spacing': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    "comma-dangle": ["error", "never"],
    "no-console": "warn",
    quotes: ["error", "single",  { avoidEscape: true }]    
  }
};
