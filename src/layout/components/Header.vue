<script lang="ts" setup name="Header">
import { Icon } from 'vant'

const route = useRoute()
const router = useRouter()
const meta = useRouteMeta()
const notHeaderFixed = computed(() => {
  return meta.value.headerFixed === false
})
const backPath = computed(() => {
  return route.query.backPath || meta.value.backPath
})

function goBack() {
  if (backPath.value) {
    router.push(backPath.value)
  }
  else {
    router.back()
  }
}
</script>

<template>
  <div class="header" :class="[notHeaderFixed && 'notHeaderFixed']">
    <Icon
      name="arrow-left"
      :color="notHeaderFixed ? '#fff' : '#000'"
      style="font-size: 22px"
      @click="goBack"
    />
    <div v-if="!notHeaderFixed" class="title">
      {{ meta.title }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: relative;
  height: var(--header-height);
  width: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  background-color: #fff;

  &.notHeaderFixed {
    background-color: transparent;
  }
  .title {
    width: 500px;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 0;
    text-align: center;

    font-weight: 500;
    font-size: 36px;
    color: #16171c;
    line-height: 36px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
