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
</script>

<template>
  <div class="app-wrapper">
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

  position: relative;
  width: 100%;

  .hd {
    width: 100%;
    position: fixed;
    top: 0;
    height: var(--header-height);
    background-color: #fff;

    z-index: 1000;
    &.notHeaderFixed {
      position: absolute;
      top: 0;
      z-index: 99;
      background-color: transparent;
    }
  }
  .main {
    min-height: 100vh;
    padding-top: var(--header-height);
    padding-bottom: var(--footer-height);
    > * {
      min-height: calc(100vh - var(--header-height) - var(--footer-height));
    }

    &.hideHeader {
      padding-top: 0;
      > * {
        min-height: calc(100vh - var(--footer-height));
      }
    }
    &.hideFooter {
      padding-bottom: 0;
      > * {
        min-height: calc(100vh - var(--header-height));
      }
    }
    &.notHeaderFixed {
      padding-top: 0;
    }
  }

  .fd {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    height: var(--footer-height);

    z-index: 1000;
  }
}
</style>
