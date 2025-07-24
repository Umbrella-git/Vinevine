<template>
  <div v-if="style == 2">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      show-progress
      :initial-index="4"
      fit="cover"
    />
    <el-image
      style="width: 50%; height: 100%"
      :src="imgList"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="imgList"
      show-progress
      :initial-index="4"
      fit="cover"
      lazy
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  style: number;
  imgList: string;
}>();
const url =
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
const srcList = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
];
</script>

<style scoped>
.el-image {
  overflow: hidden;
}
</style>
