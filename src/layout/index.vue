<script setup lang="ts">
import { useDarkMode } from '@/store/modules'
import { computed } from 'vue'

const darkMode = computed(() => {
  return useDarkMode().darkMode
})
</script>

<template>
  <div class="app-wrapper">
    <van-config-provider :theme="darkMode ? 'dark' : 'light'">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </van-config-provider>
  </div>
</template>
