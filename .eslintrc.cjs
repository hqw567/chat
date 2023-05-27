/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')
console.log(import.meta.env)

module.exports = {
  root: true,
  extends: [
    '@antfu',
  ],
  rules: {
    'no-undef': 'off',
    'no-console': import.meta.env.MODE === 'development' ? 'off' : 'warn',
  },
}
