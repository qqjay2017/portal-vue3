import type { PlatformApi, SetupWebViewJavascriptBridge } from '@/typings'
import EventEmitter from 'eventemitter3'

/**
 * H5调用动态库方法
 * @param {string} name 方法名
 * @returns {Promise} 返回Promise对象, 用来处理是否成功
 */
function callMethod(name) {
  return function (data = {}) {
    console.group(name)
    console.log('入参', data)
    return new Promise((resolve, reject) => {
      window.NimCefWebInstance.call(name, data, (err: any, res: any) => {
        console.log(err ? 'success' : 'error', res)
        if (err) {
          resolve(res)
        }
        else {
          err.msg = err.message
          reject(err)
        }
        console.groupEnd()
      })
    })
  }
}
const registeMethods = []
const eventEmitter = new EventEmitter()

function dllMethodGlobalRegiste(name: string) {
  if (registeMethods.includes(name)) {
    return false
  }
  registeMethods.push(name)
  window.NimCefWebInstance.registe(`${name}Callback`, (res) => {
    eventEmitter.emit(`${name}Callback`, res || {})
  })
}

function generateDllCallbackMethod(name: string, { isCallback = true, isOnce = true } = {
 isCallback: true,isOnce: true 
}) {
  if (isCallback) {
    return () => {
      dllMethodGlobalRegiste(name)
      return new Promise((resolve, reject) => {
        eventEmitter.once(`${name}Callback`, (res) => {
          if (res.code === 0) {
            return resolve({
              code: res.code,
              ...res.data,
            })
          }
          else {
            return reject({

              code: res.code,
              ...res.data,
              msg: res.message || res.msg,
            })
          }
        })
        callMethod(name)
      })
    }
  }
  else {
    return callMethod(name)
  }
}

const setupWebViewJavascriptBridge: SetupWebViewJavascriptBridge = (callback) => {
  return callback()
}

const dllPlatformApi: PlatformApi = {
  setupWebViewJavascriptBridge,
  getDeviceInfo: generateDllCallbackMethod('SystemInfo'),

}

export default dllPlatformApi
