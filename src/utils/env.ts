export const isAndroid = navigator.userAgent.includes('Android') && navigator.userAgent.includes('deviceType=terminal')
export const isDll = navigator.userAgent.includes('49')
export const isMac = !isAndroid && !isDll
