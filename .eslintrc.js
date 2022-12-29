const react = require("eslint-plugin-react");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "typescript", "react"],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    "no-console": "error",
    "typescript/member-ordering": [
      "error",
      {
        default: [
          "static-field",
          "static-method",
          "instance-field",
          "constructor",
          "instance-method",
        ],
      },
    ],
    "react/sort-comp": [
      "error",
      {
        order: [
          "constructor",
          "getDerivedStateFromProps",
          "shouldComponentUpdate",
          "render",
          "componentDidUpdate",
          "componentDidMount",
        ],
      },
    ],
  },
};
