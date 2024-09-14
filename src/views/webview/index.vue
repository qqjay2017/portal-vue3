<script setup lang="ts" name="Webview">
let _startEvent = null
let _dragging = false

const route = useRoute()

const url = computed<string>(() => {
  return (route.query.url || '') as string
})

const { backHome } = useBackHome({ replace: true })

const el = ref<HTMLElement | null>(null)
const iframeEl = ref<HTMLIFrameElement | null>(null)

function getTargetX(e: MouseEvent | TouchEvent) {
  const clientX = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX

  return clientX
}
function getTargetY(e: MouseEvent | TouchEvent) {
  const clientY = (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY
  return clientY
}

function onDistanceChange(e) {
  if (!_dragging) {
    return false
  }

  const clientX = getTargetX(e)
  const clientY = getTargetY(e)

  if (el.value) {
    const newX = clientX - getTargetX(_startEvent)
    const newY = clientY - getTargetY(_startEvent)

    el.value.style.left = `${newX}px`
    el.value.style.top = `${newY}px`
  }
}

function onMouseUp() {
  _startEvent = null
  _dragging = false
  iframeEl.value.style.pointerEvents = 'auto'
  window.removeEventListener('mousemove', onDistanceChange)
  window.removeEventListener('mouseup', onMouseUp)
}

function onMouseDown(e: MouseEvent) {
  e.stopPropagation()
  e.preventDefault()
  if (_dragging) {
    return false
  }
  if (!e.target) {
    return false
  }

  iframeEl.value.style.pointerEvents = 'none'

  const target = e.target as HTMLElement
  const el = target.closest(`
        *[data-dragable-node]
  `)

  if (!el) {
    iframeEl.value.style.pointerEvents = 'auto'
    return false
  }

  _startEvent = e
  _dragging = true

  window.addEventListener('touchmove', onDistanceChange)
  window.addEventListener('mousemove', onDistanceChange)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('touchend', onMouseUp)
}

onMounted(() => {
  const elDom = el.value

  elDom.addEventListener('mousedown', onMouseDown, true)
  elDom.addEventListener('touchstart', onMouseDown, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('mousedown', onMouseDown)
})
</script>

<template>
  <div ref="el" class="icon-home-wrap absolute z-4 h-[200px] w-[172px] touch-none select-none" data-dragable-node>
    <img class="h-full w-full select-none" src="@/assets/images/icon-home.png">
  </div>
  <div class="relative h-full w-full">
    <iframe
      ref="iframeEl" :src="url" class="absolute left-0 top-0 z-0 z-2 m-0 h-full w-full border-none p-0"
    />
  </div>
</template>
