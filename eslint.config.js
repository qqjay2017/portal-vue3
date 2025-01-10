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
      'style/curly-newline': 'error',
      'style/object-property-newline': 'error',
      'object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: false,
        },
      ],
    },

  },
  typescript: true,
  rules: { 'no-console': 'warn' },

})
