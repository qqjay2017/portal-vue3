<script lang="ts">


import { showToast } from "vant";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const contentList = reactive([
      "✔ ⚡ Vue3 + Vite5",
      "✔ 🍕 TypeScript",
      "✔ ✨ Vant4 组件库",

    ]);

    const handleClick = () => {
      showToast("点击了")

    }
    return {
      contentList,
      handleClick
    }
  },
});
</script>

<template>
  <div class="demo-content px-[12px]">
    <van-button type="primary" @click="handleClick">按钮</van-button>
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a class="flex items-center" href="https://github.com/yulimchen/vue3-h5-template" target="_blank">
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
      </a>
    </div>
    <div class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]">
      <p class="my-[14px] leading-[24px]">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>