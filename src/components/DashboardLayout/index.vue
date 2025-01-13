<script lang="ts" setup name="DashboardLayout">

</script>

<template>
  <div class="dashboard-layout">
    <div class="banner" />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

  <style lang="less" scoped>
  .dashboard-layout {
  height: 100%;
  position: relative;

  .banner {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 540px;
    background-image: url('./images/banner.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .main {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 830px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    bottom: 0;
    z-index: 2;
    padding: 130px 30px;
  }
}
</style>
