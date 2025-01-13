export function useScanQrCode(inputValue: Ref<string>) {
  const { pushPackageDetail } = useRoutePush()
  // 正在扫码
  const isScan = ref(false)
  // 正在监听扫码结果
  const isListening = ref(false)

  // 手动停止
  const handleStopScan = (clearInputValue = false) => {
    if (!isScan) {
      return false
    }
    isScan.value = false
    if (clearInputValue) {
      inputValue.value = ''
    }
  }
  const handleScanSuccess = (inputValue = '') => {
    // 扫成功了
    pushPackageDetail(inputValue)
  }
  /**
   * 手动触发
   */
  const handleScan = () => {
    if (isDev) {
      return handleScanSuccess('88308560004814150904')
    }
    if (isScan.value) {
      return false
    }
    inputValue.value = ''
    window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler(
      'YHJavaScriptCallHandler',
      { method: 'scanBarcode' },
      (responseData) => {
        console.log('JS received response:', responseData)
      },
    )
    // 有可能没扫到,手动清除状态
    setTimeout(() => {
      handleStopScan(true)
    }, 6000)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key
    if (key === 'Unidentified') {
      return false
    }
    else
      if (key === 'Enter') {
        handleScanSuccess(inputValue.value)
      }
      else {
        inputValue.value += key
      }
  }
  // 监听扫码结果
  const startListening = () => {
    if (isListening.value) {
      return false
    }
    isListening.value = true
    document.body.addEventListener('keydown', handleKeyPress)
  }

  const stopListening = () => {
    document.body.removeEventListener('keydown', handleKeyPress)
    isScan.value = false
    isListening.value = false
  }

  return {
    handleScan,
    handleStopScan,
    startListening,
    stopListening,
    handleScanSuccess,

  }
}
