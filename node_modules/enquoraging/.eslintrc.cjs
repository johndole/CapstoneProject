module.exports = {
  extends: "eslint:recommended",
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    "requireConfigFile": false,
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    "quotes": ["warn", "double"]
  }
};