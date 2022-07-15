const prettierConfig = require('./.prettierrc');

module.exports = {
  root: true,
  extends: '@react-native-community',
  'prettier/prettier': ['error', prettierConfig],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
