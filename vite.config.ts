import { fileURLToPath, URL } from 'node:url'
import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  // server: { host: '192.168.0.101' },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      dts: 'src/typings/auto-imports.d.ts',
      resolvers: [VantResolver()],
      dirs: ['./src/utils/**', './src/hooks/**'],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue'],
      dts: 'src/typings/components.d.ts',
      dirs: ['src/components'],
      directoryAsNamespace: true,
      include: [
        /\.vue$/,
        /\.vue\?vue/,
      ],
      resolvers: [VantResolver()],
    }),
    Unocss(),
    viteCompression(),
    createHtmlPlugin({ inject: { data: {} } }),
  ],
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),

    },
  },
})
