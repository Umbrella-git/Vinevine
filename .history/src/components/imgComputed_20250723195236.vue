<template>
  <div v-if="style == 2">
    <el-image
      style="width: 50%; height: 100%"
      :src="imgList"
      :fit="fill"
      lazy
    />
    <el-image
      style="width: 50%; height: 100%"
      :src="imgList"
      :fit="fill"
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
