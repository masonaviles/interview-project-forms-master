module.exports = {
  root: false,
  plugins: ['@typescript-eslint'],
  extends: ['center-react'],
  ignorePatterns: ['**/cypress/*', '**/*.stories.tsx', '**/*.test.js', '*.config.js'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}
