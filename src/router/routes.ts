import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/views/loading/index.vue'),
    meta: { title: '加载中' },
  },

  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: '/loading',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          hideHeader: true,
          activeMenu: 'dashboard',
        },

      },
    ],
  },
]

export default routes
