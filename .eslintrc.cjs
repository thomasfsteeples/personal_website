module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:jsx-a11y/strict",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "react-refresh"],
  rules : {
    "react-refresh/only-export-components" : "error",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"]
  },
  root: true,
};
