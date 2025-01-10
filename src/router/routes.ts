import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: { name: 'Loading' },

    children: [
      {
        path: 'loading',
        name: 'Loading',
        component: () => import('@/views/loading/index.vue'),
        meta: { title: '加载中' },
      },
    ],
  },
]

export default routes
