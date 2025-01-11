<script lang="ts" setup name="Footer">
import MenuItem from './MenuItem.vue'

// const router = useRouter()
const menus = [
  {
    icon: 'home',
    label: '首页',
    path: 'dashboard',
  },
  {
    icon: 'history',
    label: '历史记录',
    path: 'history',
  },
  {
    icon: 'setting',
    label: '配置',
    path: 'setting',
  },
]

const meta = useRouteMeta()
const activeMenu = computed(() => {
  return meta.value.activeMenu
})
// function goPage(type: string) {
//   if (type === activeMenu.value) {
//     return false
//   }
//   router.push(`/${type}`)
// }
</script>

<template>
  <div class="footer">
    <MenuItem
      v-for="item in menus"
      :key="item.path"
      :icon="item.icon"
      :label="item.label"
      :path="item.path"
      :active="activeMenu === item.path"
    />
  </div>
</template>

<style lang="less" scoped>
.footer {
  box-shadow: inset 0px 2px 0px 0px #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--footer-height);
  width: 100%;
}
</style>
