/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [],
  extends: ['next/core-web-vitals'],
  rules: {},
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
