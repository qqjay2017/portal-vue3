<script lang="ts" setup name="ScanCodeInput">
const scanCodeInput = ref<HTMLDivElement>()
const inputValue = ref('')
const isFocus = ref(false)

const { startListening, stopListening, handleScanSuccess } = useScanQrCode(inputValue)

function onBlur() {
  startListening()
  isFocus.value = false
}
function onFocus() {
  stopListening()
  isFocus.value = true
  setTimeout(() => {
    scanCodeInput.value.scrollIntoView(true)
  }, 300)
}

function onInputChange() {
  handleScanSuccess(inputValue.value)
}

onMounted(() => {
  startListening()
})
</script>

<template>
  <div class="input-wrap" :class="[isFocus && 'isFocus']">
    <div class="input-icon" />
    <input
      ref="scanCodeInput"
      v-model="inputValue"
      placeholder="手工输入整箱三级追溯码"
      @focus="onFocus"
      @blur="onBlur"
      @change="onInputChange"
    >
  </div>
</template>

  <style lang="less" scoped>
  .input-wrap {
  position: relative;

  padding-left: 80px;
  width: 550px;
  height: 64px;
  background: rgba(131, 138, 151, 0.04);
  border-radius: 40px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #222222;
  &.isFocus {
    margin-bottom: 800px;
  }
  .input-icon {
    position: absolute;

    width: 30px;
    height: 28px;
    background-image: url('@/assets/images/package/edit.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    left: 30px;
    top: 18px;
    z-index: 2;
  }
  input {
    all: unset;
    width: 392px;
    height: 40px;

    font-weight: 400;
    font-size: 24px;
    color: #222;
    line-height: 40px;
    text-align: left;
    font-style: normal;
  }
}
</style>
