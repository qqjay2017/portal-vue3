<script setup lang="ts" name="PackageDetail">
const { id } = useRouteParams<{ id: string }>()

const { data } = usePackageDetailData(id)
</script>

<template>
  <div>
    124
    {{ id }}
    {{ data }}
  </div>
</template>
