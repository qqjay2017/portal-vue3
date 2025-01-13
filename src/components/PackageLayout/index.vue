<template>
  <div class="package-layout">
    <div class="banner" />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

  <style lang="less" scoped>
  .package-layout {
  height: 100%;
  position: relative;

  .banner {
    top: 0;
    z-index: 0;
    width: 100%;
    height: 400px;
    background-image: url('@/assets/images/package/banner.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .main {
    left: 40px;
    background-color: #fff;
    width: 670px;
    min-height: 882px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    z-index: 2;
    position: absolute;
    bottom: 0;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
