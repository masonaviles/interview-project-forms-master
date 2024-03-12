const importOrder = [
  'dotenv',
  // '.(css|scss)$',
  'reflect-metadata',
  '^cdktf$',
  '^(react|react-native)$',
  '<THIRD_PARTY_MODULES>',
  '^@\\/c?(.*)$',
  '^@center-inc/?(.*)$',
  '^src/?(.*)$',
  '^(.*).(css)$',
  '^[./]',
]

/** @type {import("@ianvs/prettier-plugin-sort-imports").Config}  */
const config = {
  bracketSpacing: true,
  printWidth: 88,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: ['.github/**/*.yml'],
      options: {
        tabWidth: 4,
        printWidth: 110,
      },
    },
  ],
}

module.exports = config
