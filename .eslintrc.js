module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "react", "@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:react/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    parser: "typescript-eslint-parser",
    ecmaVersion: 2018,
    sourceType: "module",
    project: "tsconfig.json"
  }
};