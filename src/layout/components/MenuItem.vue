<script lang="ts" setup name="MenuItem">
import historyIconActive from '../images/history-active.png'
import historyIcon from '../images/history.png'
import homeIconActive from '../images/home-active.png'
import homeIcon from '../images/home.png'
import settingIconActive from '../images/setting-active.png'
import settingIcon from '../images/setting.png'

const props = withDefaults(defineProps<{
  label: string
  icon: string
  path: string
  active: boolean
}>(), {
  label: '',
  icon: '',
  path: '',
  active: false,
})
const router = useRouter()
const iconSrc = computed(() => {
  if (props.active) {
    switch (props.icon) {
      case 'home':
        return homeIconActive
      case 'history':
        return historyIconActive
      case 'setting':
        return settingIconActive
    }
  }
  else {
    switch (props.icon) {
      case 'home':
        return homeIcon
      case 'history':
        return historyIcon
      case 'setting':
        return settingIcon
    }
  }
  return ''
})

function handlePush() {
  router.push(`/${props.path}`)
}
</script>

<template>
  <div class="menu-item" :class="[props.active && 'active']" @click="handlePush">
    <img class="icon" :src="iconSrc">
    <div class="label">
      {{ props.label }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.menu-item {
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    width: 60px;
    height: 60px;
  }

  .label {
    margin-top: 10px;
    text-align: center;

    height: 28px;
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 500;
    font-size: 20px;
    color: #666666;

    line-height: 28px;
    text-align: right;
    font-style: normal;
  }

  &.active {
    .label {
      color: #196ffa;
    }
  }
}
</style>
