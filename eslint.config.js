import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  ignores: [
    'vite.config.ts',
  ],
})
