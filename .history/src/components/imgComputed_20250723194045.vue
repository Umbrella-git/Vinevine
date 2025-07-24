<template>
  <el-image
    style="width: 100px; height: 100px"
    :src="imgList"
    :fit="fit"
    lazy
  />
</template>

<script lang="ts" setup>
defineProps<{
  style: number;
  imgList: string;
}>();
</script>

<style scoped>
.el-image {
  overflow: hidden;
}
</style>
