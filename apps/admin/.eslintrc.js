
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/config-eslint/react-internal.js", "plugin:tailwindcss/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  plugins: ["tailwindcss"],
  settings: {
    "tailwindcss": {
      config: "./tailwind.config.js"
    }
  }

};
