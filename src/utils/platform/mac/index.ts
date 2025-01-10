import type { PlatformApi, SetupWebViewJavascriptBridge } from '@/typings'

const setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge = (callback) => {
  return callback()
}

const macPlatformApi: PlatformApi = {
  setupWebViewJavascriptBridge,

}

export default macPlatformApi
