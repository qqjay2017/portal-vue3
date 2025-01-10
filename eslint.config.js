import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  formatters: true,
  vue: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    overrides: {
      'array-element-newline': 'error',
      'array-bracket-newline': 'error',
    },

  },
  typescript: true,

})
