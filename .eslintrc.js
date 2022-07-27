module.exports = {
  extends: ['alloy', 'alloy/typescript', 'next/core-web-vitals', 'plugin:jest/recommended'],
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ['better-styled-components', 'jest'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'better-styled-components/sort-declarations-alphabetically': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
