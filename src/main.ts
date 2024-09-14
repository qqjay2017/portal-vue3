import store from '@/store'
import { Dialog, ImagePreview, Notify, Toast } from 'vant'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
// normalize.css
import 'normalize.css/normalize.css'
// vant 组件样式
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
// 全局样式
import './styles/index.less'

const app = createApp(App)

app.use(store)
app.use(router)

app.use(Toast)
app.use(Dialog)
app.use(Notify)
app.use(ImagePreview)

app.mount('#app')
