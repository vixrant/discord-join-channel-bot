module.exports = {
  env: {
    node: true,
    mongo: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'spaced-comment': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
  },
};
