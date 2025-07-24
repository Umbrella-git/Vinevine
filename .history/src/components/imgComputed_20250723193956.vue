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

<style>
.el-image {
  scrollbar-width: none;
}
</style>
