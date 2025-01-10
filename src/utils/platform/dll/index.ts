import type { PlatformApi, SetupWebViewJavascriptBridge } from '@/typings'

const setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge = (callback) => {
  return callback()
}

const dllPlatformApi: PlatformApi = {
  setupWebViewJavascriptBridge,

}

export default dllPlatformApi
