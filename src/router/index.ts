import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   abortController.abort()
//   next()
// })
// router.afterEach(() => {
//   abortController.init()
// })

export default router
