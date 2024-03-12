module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['prettier', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'sentry.client.config.js',
    'sentry.client.server.js',
    'tailwind.config.js',
    'postcss.config.js',
    'next.config.js',
    'gen/**/*',
    '.eslintrc.js',
  ],
  rules: {
    // TODO: Fix this in the future
    'no-duplicate-imports': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
