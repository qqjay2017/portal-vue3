<script setup lang="ts">

</script>

<template>
  <div class="app-wrapper">
    layout
    <van-config-provider theme="light">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </van-config-provider>
  </div>
</template>
