export function useRouteParams<P = Record<string, string>>() {
  const route = useRoute()
  return {
    ...route.query,
    ...route.params,
  } as P
}
