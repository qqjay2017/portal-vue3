<script lang="ts" setup name="ClickScan">
const { handleScan } = useScanQrCode(ref(''))
</script>

<template>
  <div class="click-scan">
    <div class="sys" @click="handleScan" />
    <div class="tip1">
      点击扫一扫
    </div>
    <div class="tip2">
      扫描包装盒上”8“开头的条形码
    </div>
  </div>
</template>

  <style lang="less" scoped>
  .click-scan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sys {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    overflow: hidden;
    background-image: url('@/assets/images/package/saoyisao.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-bottom: 48px;
  }
  .tip1 {
    font-weight: 600;
    font-size: 48px;
    color: #222222;
    line-height: 67px;
    text-align: center;
    margin-bottom: 20px;
  }
  .tip2 {
    height: 40px;

    font-weight: 400;
    font-size: 28px;
    color: #666666;
    line-height: 40px;
    text-align: center;
    margin-bottom: 79px;
  }
}
</style>
