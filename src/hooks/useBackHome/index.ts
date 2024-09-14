export function useBackHome({ replace = true }: { replace: boolean }) {
  const router = useRouter()

  const backHome = () => {
    router.push({ path: '/', replace })
  }

  return {
    backHome,
  }
}
