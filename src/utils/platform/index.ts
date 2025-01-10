import androdPlatformApi from './android'
import dllPlatformApi from './dll'
import macPlatformApi from './mac'

export const platformApi = isAndroid ? androdPlatformApi : isDll ? dllPlatformApi : macPlatformApi
