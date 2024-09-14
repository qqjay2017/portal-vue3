import path from 'node:path'

export default {
  plugins: {
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    'cnjm-postcss-px-to-viewport': {
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 4, // 转化精度，转换后保留位数
      viewportUnit: 'vmin', // 转换后的单位
      fontViewportUnit: 'vmin', // 字体单位
      unitToConvert: 'px', // 需要转换的单位
      minPixelValue: 1, // 最小转换单位
      customFun: ({ file }) => {
        // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
        const designWidth = path.join(file).includes(path.join('node_modules', 'vant')) ? 375 : 750
        return designWidth
      },
    },
    'autoprefixer': {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7'],
    },
  },
}
