export default {
  env: {
    node: true,
    es2024: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    strict: ["error", "global"],
    "prefer-const": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
