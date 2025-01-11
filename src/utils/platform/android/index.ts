import type { PlatformApi, SetupWebViewJavascriptBridge } from '@/typings'

export function generateWebviewCallHandler(method = '') {
  return (param = {}) => {
    window.WebViewJavascriptBridge.callHandler(
      'YHJavaScriptCallHandler',
      {
        method,
        param,
      },
      (responseData) => {
        console.log('JS received response:', responseData)
      },
    )
  }
}

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

function getDeviceInfo() {
  return Promise.resolve({
    capacity: '243617',
    dev_model: 'To be filled by O.E.M.',
    dev_serial: 'HMDF4AS210507000148',
    deviceNo: 'HMDF4AS210507000148',
    host: 'DESKTOP-7N03N9B',
    ip: '192.168.11.131',
    local_time: '2024-11-05 14:26:21',
    mac: '68-ED-A4-65-57-58',
    net_scope: 'External',
    net_type: 'Wired',
    os: 'Windows 10 Enterprise',
    uptime: '2024-11-05 14:40:59',
    useful_capacity: '172633',
    version: '2.1.1.25',
  })
}

const androdPlatformApi: PlatformApi = {
  setupWebViewJavascriptBridge,
  getDeviceInfo,
  scanBarcode: generateWebviewCallHandler('scanBarcode'),

}

export default androdPlatformApi
