export interface WebViewJavascriptBridge {
  // 这里可以根据实际使用的bridge方法添加更多类型定义
  callHandler?: (name: string, data?: any, callback?: (response: any) => void) => void
  registerHandler?: (name: string, callback: (data: any, responseCallback: (response: any) => void) => void) => void
}
