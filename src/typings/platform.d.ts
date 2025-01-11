export type SetupWebViewJavascriptBridge = (callback: (bridge?: WebViewJavascriptBridge) => void) => any
export interface DeviceInfo {
  appVersion: string
  appVersionCode: number
  appVersionCodeSilentInstallService: number
  appVersionSilentInstallService: string
  baseInfo: string
  baudRate: number
  deviceNo?: string
  isOpenSilentInstallService: boolean
  simInfo: string
  deviceSn: string
  capacity?: string
  dev_model?: string
  dev_serial?: string
  deviceNo?: string
  host?: string
  ip?: string
  local_time?: string
  mac?: string
  net_scope?: string
  net_type?: string
  os?: string
  uptime?: string
  useful_capacity?: string
  version?: string
  [field: string]: any
}

export type GetDeviceInfo = () => Promise<Partial<DeviceInfo>>

export interface PlatformApi {
  setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge
  getDeviceInfo: GetDeviceInfo

  scanBarcode?: Function
}
