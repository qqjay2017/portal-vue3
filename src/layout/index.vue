<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

const meta = useRouteMeta()

const notHeaderFixed = computed(() => {
  return meta.value.headerFixed === false
})
const classObj = computed(() => {
  return {
    hideMenu: meta.value.hideMenu,
    hideHeader: meta.value.hideHeader,
    notHeaderFixed,
  }
})
const wrapperStyle = computed(() => {
  return { height: `${window.screen.availHeight}px` }
})
</script>

<template>
  <div class="app-wrapper" :style="wrapperStyle">
    <div
      v-if="!meta.hideHeader"
      class="hd"
      :class="[notHeaderFixed && 'notHeaderFixed']"
    >
      <Header />
    </div>
    <div class="main" :class="classObj">
      <AppMain :class="classObj" />
    </div>
    <div v-if="!meta.hideMenu" class="fd">
      <Footer />
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-wrapper {
  --header-height: 88px;
  --footer-height: 166px;
  overflow: hidden;

  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .hd {
    flex: none;
  }
  .main {
    background-color: #f5f5f5;
    flex: auto;
    min-height: 0;
    height: 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .fd {
    flex: none;
  }
}
</style>
