import type { AxiosRequestConfig } from 'axios'

import Axios from 'axios'
import { closeToast, showLoadingToast, showToast as Toast } from 'vant'

import api from './config/api'

// 全局请求接口配置信息
Axios.defaults.baseURL = api.url
Axios.defaults.headers['Content-Type'] = api.contentType
Axios.defaults.timeout = 60 * 1000
const useGateway = window.YHSERVICECONFIG.gateway || import.meta.env.VITE_APP_GATEWAY
const appId = window.YHSERVICECONFIG.appId || '8A8A87106B72A440016B72BF44A10000'

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _hasLoading?: boolean
  _hasErrToast?: boolean
}
// let _hasLoading = true   // 控制是否有loading
// let _hasErrToast = true  // 控制是否弹出报错
let _isShow = false
// Request拦截器
Axios.interceptors.request.use(
  (config: any) => {
    if (!config.nonCancellable) {
      // config.signal = abortController.signal
    }

    if (config.method === 'post') {
      if (useGateway === 'true') {
        config.data = {
          timestamp: Date.now(),
          appId,
          signType: 'Plain',
          version: '1.0.0',
          encryptType: 'Plain',
          param: { ...config.data },
        }
      }
    }
    if (config.method === 'get') {
      //
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

// Response拦截器
Axios.interceptors.response.use(
  (response) => {
    if ((response.config as CustomAxiosRequestConfig)._hasLoading) {
      closeToast()
    }
    // 处理关闭loading
    // axios默认请求判断状态
    if (response.status === 200) {
      // 成功过滤处理，返回数据对象，属性信息走配置文件的配置
      if (
        !api.responseConfig.isOK(response.data)
        || api.responseConfig.errorCodes.includes(response.data[api.responseConfig.code])
      ) {
        // 请求出错，统一处理
        if (!_isShow && (response.config as CustomAxiosRequestConfig)._hasErrToast) {
          _isShow = true
          Toast({
            message: `${response.data[api.responseConfig.msg]
            || '请求数据出错'}`,
          })
          setTimeout(() => {
            if (
              api.responseConfig.errorCodes.includes(
                response.data[api.responseConfig.code],
              )
            ) {
              api.responseConfig.errorCallback()
            }
            _isShow = false
          }, 1200)
        }
        return Promise.reject(response.data)
      }
      else {
        // 判断是否加密

        return Promise.resolve(response.data[api.responseConfig.data])
      }
    }
    else {
      return Promise.reject(response.data[api.responseConfig.data])
    }
  },
  (error) => {
    closeToast()
    if (Axios.isCancel(error)) {
      return 'cancel'
    }
    console.log('报错:', error)
    // 处理关闭loading
    Toast(`网络错误：${error.message}`)
    return Promise.reject(error.response ? error.response.data : error)
  },
)

// 包装https请求方法，做统一的请求控制
export default function https({
  url = api.url,
  hasLoading = true,
  hasErrToast = true,
  nonCancellable = false,
  method = 'POST',
  params = {},
}): Promise<any> {
  if (hasLoading) {
    showLoadingToast({
      message: '数据处理中...',
      forbidClick: true,
      duration: 0,
    })
  }
  return new Promise((resolve, reject) => {
    const _axiosConfig = {
      method,
      params: {},
      data: {},
      url,
      nonCancellable,
      _hasLoading: hasLoading,
      _hasErrToast: hasErrToast,
    }
    // 补充通用参数
    params = {
      deviceNo: '',
      outBizNo: '',
      bizNo: '',
      ...params,
    }
    if (method.toUpperCase() === 'GET') {
      _axiosConfig.params = params
    }
    else {
      _axiosConfig.data = params
    }

    Axios(_axiosConfig)
      .then((res: any) => {
        if (res !== 'cancel') {
          resolve(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
