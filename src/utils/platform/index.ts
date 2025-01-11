import androdPlatformApi from './android'
import dllPlatformApi from './dll'
import macPlatformApi from './mac'

console.log({isAndroid, isDll
, })

export const platformApi = isAndroid ? androdPlatformApi : isDll ? dllPlatformApi : macPlatformApi
