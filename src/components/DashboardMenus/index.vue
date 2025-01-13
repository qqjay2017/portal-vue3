<script setup lang="ts" name="DashboardMenus">
const { pushPage } = useRoutePush()
</script>

<template>
  <div class="menu-wrap">
    <div class="menu menu-1" @click="pushPage('package')">
      <div class="label">
        整包扫码上报
      </div>
    </div>
    <div class="menu menu-2">
      <div class="label">
        散装扫码上报
      </div>
    </div>
    <div class="menu menu-3">
      <div class="label">
        药品识别码维护
      </div>
    </div>
  </div>
</template>

  <style lang="less" scoped>
  .menu-wrap {
  width: 690px;
  height: 500px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  .menu {
    user-select: none;
    position: absolute;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 24px;
    overflow: hidden;
    .label {
      position: absolute;

      font-weight: 500;
      font-size: 36px;
      color: #ffffff;
      line-height: 50px;
      text-align: center;
    }
  }
  .menu-1 {
    width: 295px;
    height: 500px;
    left: 0;
    top: 0;
    background-image: url('@/assets/images/menu1.png');

    left: 0;
    .label {
      left: 0;
      width: 100%;
      right: 0;
      top: 76px;
    }
  }
  .menu-2 {
    width: 375px;
    height: 240px;
    right: 0;
    top: 0;
    background-image: url('@/assets/images/menu2.png');
    .label {
      left: 30px;
      top: 97px;
      text-align: left;
      width: 100%;
    }
  }
  .menu-3 {
    width: 375px;
    height: 240px;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/images/menu3.png');
    .label {
      width: 165px;
      left: 30px;
      top: 75px;
      text-align: left;
    }
  }
}
</style>
