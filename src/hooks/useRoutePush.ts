import type { RouteLocationRaw } from 'vue-router'

export function useRoutePush() {
  const router = useRouter()
  const push = (to: RouteLocationRaw) => {
    return router.push(to)
  }
  const pushPage = (page: 'package') => {
    return router.push(`/${page}`)
  }
  const pushPackageDetail = (code = '') => {
    return router.push(`/package-detail/${code}`)
  }
  return {
    push,
    pushPage,
    pushPackageDetail,
  }
}
