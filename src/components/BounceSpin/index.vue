<script setup lang="ts" name="BounceSpin">
const props = withDefaults(defineProps<{
  tip?: string
  showTip?: boolean
}>(), {
  tip: '',
  showTip: true,
})
</script>

<template>
  <div class="m-auto text-center">
    <div class="sk-bounce1 sk-child" />
    <div class="sk-bounce2 sk-child" />
    <div class="sk-bounce3 sk-child" />
  </div>
  <div v-if="props.showTip" class="loading-text">
    {{ `${props.tip}` }}
  </div>
</template>

<style lang="less" scoped>
@-webkit-keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.sk-child {
  width: 22px;
  height: 22px;
  margin-right: 16px;
  background-color: #337ab7;
  border-radius: 100%;
  display: inline-block;
  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;

  &.sk-bounce1 {
    background-color: #3E8DF4;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &.sk-bounce2 {
    background-color: #FF9A2B;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  &.sk-bounce3 {
    background-color: #8DC957;
  }
}

.loading-text {
  text-align: center;
  margin-top: 84px;
  color: #344872;
  font-size: 32px;
}
</style>
