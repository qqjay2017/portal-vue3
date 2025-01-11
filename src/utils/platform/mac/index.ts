import type { PlatformApi, SetupWebViewJavascriptBridge } from '@/typings'

const setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge = (callback) => {
  return callback()
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
const macPlatformApi: PlatformApi = {
  setupWebViewJavascriptBridge,
  getDeviceInfo,

}

export default macPlatformApi
