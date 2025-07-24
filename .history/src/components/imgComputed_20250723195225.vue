<template>
  <div v-if="style == 2">
    <el-image
      style="width: 50%; height: 100%"
      :src="imgList"
      :fit="fill"
      lazy
    />
    <div class="block">
      <span class="demonstration">Custom</span>
      <el-image>
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
    </div>
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
