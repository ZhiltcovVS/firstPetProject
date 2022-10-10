module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-constant-condition': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-param-reassign': 'off',
  },
};
