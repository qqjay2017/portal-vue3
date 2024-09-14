import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

import Demo from '@/views/demo/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: { name: 'Demo' },
    children: [
      {
        path: 'demo',
        name: 'Demo',
        component: Demo,
        meta: {
          title: 'demo主页',
        },
      },
      {
        path: 'webview',
        name: 'Webview',
        component: () => import('@/views/webview/index.vue'),
        meta: {
          title: 'demo主页',
        },
      },
      {
        path: 'tools',
        name: 'Tools',
        component: Demo,
        meta: {
          title: '工具',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: Demo,
        meta: {
          title: '关于',
          noCache: true,
        },
      },
    ],
  },
]

export default routes
