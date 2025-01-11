export {}

declare global {
  interface Window {

    YW: any
    WVJBCallbacks?: ((bridge: WebViewJavascriptBridge) => void)[]
    WebViewJavascriptBridge?: WebViewJavascriptBridge
    NimCefWebInstance: {
      call: (
        name: string,
        data?: any,
        callback: (
          err?: any,
          res?: any
        ) => any
      ) => any
      registe: (name: any, calllback: (res: {
        code: number
        data: any
      }) => void) => any
    }
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
