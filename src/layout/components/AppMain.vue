<script lang="ts" setup name="AppMain">
const route = useRoute()
const key = computed(() => {
  return route.fullPath
})
</script>

<template>
  <transition name="fade-transform" mode="out-in">
    <router-view :key="key" />
  </transition>
</template>

<style lang="less" scoped>

</style>
