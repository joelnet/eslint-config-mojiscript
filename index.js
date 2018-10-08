module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["better", "fp", "prefer-arrow"],
  extends: "plugin:fp/recommended",
  rules: {
    "indent-legacy": ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "func-call-spacing": ["error", "always", { allowNewlines: true }],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-dupe-keys": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-unexpected-multiline": ["off"],
    "no-labels": "error",
    "no-unused-vars": ["error", { "after-used": null }],
    "max-params": ["error", 1],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "arrow-body-style": ["error", "never"],
    "arrow-spacing": "error",
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: false, allowUnboundThis: false }
    ],
    "no-var": ["error"],
    "object-curly-spacing": ["error", "always"],
    "prefer-const": ["error"],
    "prefer-template": ["error"],
    "prefer-arrow/prefer-arrow-functions": "error",
    "comma-dangle": ["error", "never"],
    "no-ternary": ["error"],
    "function-paren-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "always"],
    "array-element-newline": ["error", "consistent"],
    "eol-last": ["error", "always"],
    "better/no-ifs", ["error"],
    "fp/no-mutation": ["error", { commonjs: true }],
    "fp/no-unused-expression": ["off"]
  },
  overrides: {
    files: [".mjs"]
  }
};
