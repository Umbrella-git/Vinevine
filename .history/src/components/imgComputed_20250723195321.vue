<template>
  <div v-if="style == 2">
    <el-image
      style="width: 50%; height: 100%"
      :src="imgList"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      show-progress
      :initial-index="4"
      :fit="fill"
      lazy
    />
    <el-image
      style="width: 50%; height: 100%"
      :src="imgList"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      show-progress
      :initial-index="4"
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
