import useSWRV from 'swrv'

export function usePackageDetailData(id: string) {
  return useSWRV(`package-detail-${id}`, () => https({
    url: '/api/kernel/traceCode/decode',
    method: 'post',
    params: {
      billType: 102,
      deviceCode: 'mock123456',
      isBulk: false,
      traceCodes: [id],
    },
  }), {
    shouldRetryOnError: false,
    revalidateOnFocus: false,

  })
}
