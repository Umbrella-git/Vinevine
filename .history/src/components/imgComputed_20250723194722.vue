<template>
  <div v-if="style == 2">
    <el-image
      style="width: 100px; height: 100px"
      :src="imgList"
      :fit="fit"
      lazy
    />
    <el-image
      style="width: 100px; height: 100px"
      :src="imgList"
      :fit="fit"
      lazy
    />
  </div>
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
