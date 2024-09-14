<script lang="ts" setup name="Demo">
const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
]

const showPicker = ref(false)
const contentList = reactive([
  '✔ ⚡ Vue3 + Vite5',
])

function handleClick() {
  showPicker.value = true
  showToast({
    message: '点击了',
  })
}

function onConfirm(value: any) {
  console.log(value)
}
</script>

<template>
  <div class="demo-content px-[12px]">
    <van-button type="primary" @click="handleClick">
      按钮
    </van-button>
    <HelloWorld msg="Hello Vue 3 + Vite 5" />
    <div class="border-l-[3px] border-[color:#41b883] pl-[12px]">
      <a class="flex items-center" href="https://github.com/yulimchen/vue3-h5-template" target="_blank">
        <h3 class="my-[4px] text-[18px] font-bold">Vue3-h5-template</h3>
      </a>
    </div>
    <div class="mt-[14px] rounded-[4px] bg-[var(--color-block-background)] px-[10px] py-[2px] text-[14px]">
      <p class="my-[14px] leading-[24px]">
        🌱 基于 Vue3
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </van-popup>
</template>
