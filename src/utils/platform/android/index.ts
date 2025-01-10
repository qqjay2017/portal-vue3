import type { PlatformApi, SetupWebViewJavascriptBridge } from '@/typings'

/**
 *
 * @param callback bridge设置成功后的回调
 * @returns
 *
 */
const setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge = (callback) => {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  const WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

const androdPlatformApi: PlatformApi = {
  setupWebViewJavascriptBridge,

}

export default androdPlatformApi
