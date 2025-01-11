export function useRouteMeta() {
  const route = useRoute()

  return computed(() => {
    return route.meta || {}
  })
}
