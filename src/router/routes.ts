import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import PackageDetail from '@/views/package-detail/index.vue'
import Package from '@/views/package/index.vue'

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
        component: Dashboard,
        meta: {
          hideHeader: true,
          activeMenu: 'dashboard',
        },

      },
      {
        path: 'package',
        name: 'Package',
        component: Package,
        meta: {
          hideHeader: true,
          activeMenu: 'dashboard',
        },

      },
      {
        path: 'package-detail/:id',
        component: PackageDetail,
        name: 'PackageDetail',
        meta: {
          title: '整包药品详情',
          hideMenu: false,
          hideHeader: false,
          activeMenu: 'dashboard',
        },
      },
    ],
  },
]

export default routes
