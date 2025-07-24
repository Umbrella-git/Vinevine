<template>
  <div v-if="style == 2">
    <el-row>
      <el-col :span="12" v-for="url in imgList" :key="url">
        <div class="grid-content">
          <el-image :key="url" :src="url" fit="fill" lazy />
        </div>
      </el-col>
    </el-row>
  </div>
  <div v-if="style == 4">
    <el-row :gutter="20">
      <el-col :span="6" v-for="url in imgList" :key="url">
        <div class="grid-content ep-bg-purple">
          <el-image :key="url" :src="url" fit="fill" lazy />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  style: number;
  imgList: string[];
}>();
</script>

<style scoped>
.el-image {
  overflow: hidden;
  cursor: pointer;
}
</style>
