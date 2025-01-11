<script setup lang="ts">
onMounted(() => {
  platformApi.getDeviceInfo().then((res) => {
    console.log(res, 'res')
  })
})
</script>

<template>
  <div>
    <BounceSpin
      tip="正在进入"
      style="margin-top:200px;"
    />
  </div>
</template>
