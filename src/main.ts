import { Dialog, ImagePreview, Notify, Popup, Toast } from 'vant'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import 'virtual:uno.css'
import 'normalize.css/normalize.css'
import '@/styles/index.less'
// vant 组件样式
import 'vant/lib/toast/style'
import 'vant/lib/dialog/style'
import 'vant/lib/notify/style'
import 'vant/lib/image-preview/style'
import 'vant/lib/popup/style'

function initApplication() {
  const app = createApp(App)
  app.use(store)
  app.use(Toast)
  app.use(Dialog)
  app.use(Notify)
  app.use(ImagePreview)
  app.use(Popup)
  app.use(router)

  app.mount('#app')
}

platformApi.setupWebViewJavascriptBridge(initApplication)
