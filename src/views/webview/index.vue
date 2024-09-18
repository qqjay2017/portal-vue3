<script setup lang="ts" name="Webview">
const route = useRoute()

const url = computed<string>(() => {
  return (route.query.url || '') as string
})

const el = ref<HTMLElement>()
const iframeEl = ref<HTMLElement>()

const { backHome } = useBackHome({ replace: true })

const { style } = useDraggable(el, {
  initialValue: { x: innerWidth - 200, y: innerHeight - 200 },
  preventDefault: true,
  stopPropagation: true,

})
</script>

<template>
  <div ref="el" class="icon-home-wrap absolute z-4 h-[200px] w-[172px] touch-none select-none" :style="style" @click="backHome">
    <img class="h-full w-full select-none" src="@/assets/images/icon-home.png">
  </div>
  <iframe
    ref="iframeEl" :src="url" class="m-0 h-screen w-screen border-none p-0"
  />
</template>
