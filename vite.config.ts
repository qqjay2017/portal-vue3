
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";

import { createHtmlPlugin } from "vite-plugin-html";


const root: string = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, "");

  return {
    base: env.VITE_PUBLIC_PATH || "/",

    server: {
      port: 8080,
      proxy: {

      }
    },
    // base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      // vant 组件自动按需引入
      Components({ 
        dts: "src/typings/components.d.ts",
        resolvers: [VantResolver()] }),
      UnoCSS(),
      vueSetupExtend(),
      // 生产环境 gzip 压缩资源
      viteCompression(),
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || "false"
          }
        }
      }),
    ],

    // 允许 setup 语法糖上添加组件名属性



    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  }
})
