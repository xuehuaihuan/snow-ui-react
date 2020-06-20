module.exports = {
  "extends": [
    'standard-react',
    'standard',
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/no-var-requires": 0
  }
}