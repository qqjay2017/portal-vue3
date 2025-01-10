import type { WebViewJavascriptBridge } from './bridge'

export {}

declare global {
  interface Window {
    NimCefWebInstance: any
    YW: any
    WVJBCallbacks?: ((bridge: WebViewJavascriptBridge) => void)[]
    WebViewJavascriptBridge?: WebViewJavascriptBridge
    YHSERVICECONFIG: {
      appId: string
      gateway: string
      base: string
      baseAPI?: string
      encMode?: any
      appSecret?: string
    }
  }
}
