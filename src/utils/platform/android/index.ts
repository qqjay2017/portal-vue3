import type { WebViewJavascriptBridge } from '@/typings/bridge'

export function setupWebViewJavascriptBridge(callback: (bridge: WebViewJavascriptBridge) => void): void {
  if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge) }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
  window.WVJBCallbacks = [callback]
  const WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(() => { document.documentElement.removeChild(WVJBIframe) }, 0)
}
