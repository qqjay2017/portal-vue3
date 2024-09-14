
import 'virtual:uno.css'

import { createApp } from 'vue'
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";

import store from "@/store";


import App from './App.vue'
import router from './router';

const app = createApp(App)

app.use(store);
app.use(router);


app.mount('#app')
