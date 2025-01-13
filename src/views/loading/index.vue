<script setup lang="ts">
onMounted(() => {
  platformApi.getDeviceInfo().then((res) => {
    console.log(res, 'res')
  })
})
</script>

<template>
  <div class="loading-page">
    <BounceSpin
      tip="正在进入"
      style="margin-top:200px;"
    />
  </div>
</template>

<style lang="less" scoped>
.loading-page {
  padding-top: 200px;
}
</style>
