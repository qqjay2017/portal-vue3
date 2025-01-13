/*
 * @Author: hsingyin
 * @Date: 2020-01-22 17:44:49
 * @LastEditTime: 2020-04-08 09:37:49
 * @LastEditors: hsingyin
 * @Description: 配置文件
 * @FilePath: /h5/src/config/api.js
 */

// 请求地址, 权重 base（baseTest） >  VITE_APP_API_LOCATION

const base = window.YHSERVICECONFIG.base
// const base = process.env.VITE_APP_API_LOCATION
// 完整请求地址
const VITE_APP_BASE_API = import.meta.env.VITE_APP_BASE_API || ''
const url = base + (window.YHSERVICECONFIG.baseAPI || VITE_APP_BASE_API)

// 数据传输类配置
const contentType = 'application/json' // form提交数据：application/x-www-form-urlencoded

// token校验
const tokenCheck = false

// 统一请求配置
const responseConfig = {
  // 响应代码
  code: 'respCode',
  // 响应数据
  data: 'param',
  // 错误提示信息
  msg: 'respMsg',
  // 加密数据
  encode: 'encryptData',
  // 签名数据
  signData: 'signData',
  // 响应是否是成功的
  isOK(response) {
    return response instanceof Object && response.respCode === '000000'
  },
  // tokenCheck为true时，token验证不通过时返回的异常码， 出现这种情况情况下将直接执行回调errorCallBack
  errorCodes: [500023],
  errorCallback() {
    // token过期后,自定义处理,或返回错误
  },
}

// 提示语
const waitTips = '敬请期待'

// 过渡动画(低版本系统建议关闭)
const routerTransition = true

// 白名单
const routerWhiteList = [
'demo','login'
]

export default {
  base,
  url,
  contentType,
  tokenCheck,
  responseConfig,
  waitTips,
  routerTransition,
  routerWhiteList,
}
