
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/config-eslint/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  plugins: [],
  settings: {

  }

};
