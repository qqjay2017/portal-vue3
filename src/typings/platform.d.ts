export type SetupWebViewJavascriptBridge = (callback: (bridge?: WebViewJavascriptBridge) => void) => any

export interface PlatformApi {
  setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge
}
