import { fileURLToPath, URL } from 'node:url'
import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssPluginPx2rem from 'postcss-plugin-px2rem'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'

// eslint-disable-next-line node/prefer-global/process
const isDev = process.env.NODE_ENV === 'development'
// https://vite.dev/config/
export default defineConfig({
  base: isDev ? '/' : '/drug-identity',
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
      dirs: [
        './src/utils/**',
        './src/hooks/**',
        './src/hooks/page-data',
      ],
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
  css: {
    postcss: {
      plugins: [
        postcssPluginPx2rem({
          rootValue: 100, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
          // unitPrecision: 5, //允许REM单位增长到的十进制数字。
          // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
          // propBlackList: [], //黑名单
          exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          // selectorBlackList: [], //要忽略并保留为px的选择器
          // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreIdentifier后，replace将自动设置为true。
          // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
          mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
          minPixelValue: 3, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
        }),
      ],
    },
  },
  server: {
    proxy: {
      '/tmnl': {
        target: 'https://dev.ylzpay.com/api/yyds',
        changeOrigin: true,
      },
      '/mobile': {
        target: 'https://dev.ylzpay.com/api/msis',
        changeOrigin: true, // 通用测试环境
      },
    },
  },
})
