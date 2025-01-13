// 优先这边的配置 || 默认.env里的配置(已有baseAPI、gateway)
// 请求地址为 base + baseAPI

window.YHSERVICECONFIG = {
  // appId: '8A8A87106B72A440016B72BF44A10000', // 应用ID
  appId: '8a8a87106b72a440016b72bf44a10000', // 应用ID
  appSecret: '1E2F934V24I12134A8C00000C38CD53E', // 应用密钥
  base: window.location.origin, // 请求域名地址
  baseAPI: '', // 请求地址目录
  encMode: 'PLAIN', // 加密模式,PLAIN: plain模式不加密验签，SM: SM2签名验签+SM4加解密，MIX: plain签名验签+SM4加解密
  gateway: 'true', // 'true'开启/'false'关闭(字符串类型)
  hospName: 'XXXXXXX医院', // 服务平台简称
  hospNameFull: 'XXXXXXX医院', // 服务平台全称
  hospNameFullDetail: 'XXXXXXX医院', // 服务平台详细全称
  hospAddr: 'XX省XX市XX区XX路XX号', // 服务平台地址
  hospContact: 'XXX', // 服务平台联系人
  hospPhone: 'XXXX-XXXXXXXX' // 服务平台联系电话
}
