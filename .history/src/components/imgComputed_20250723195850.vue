<template>
  <div v-if="style == 2">
    <el-image
      style="width: 50%; height: 100%"
      v-for="url in imgList"
      :key="url"
      :src="url"
      fit="fill"
      lazy
    />
  </div>
  <div v-if="style == 4">
    <el-image
      style="width: 20%; height: 100%"
      v-for="url in imgList"
      :key="url"
      :src="url"
      fit="fill"
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
  cursor: pointer;
}
</style>
