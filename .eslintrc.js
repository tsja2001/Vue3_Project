module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "'$store' is not defined": 'off',
    'eslint@typescript-eslint/explicit-module-boundary-types': 'off',
    'Missing return type on function.eslint@typescript-eslint/explicit-module-boundary-types':
      'off',
    'eslint@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
