<template>
  <div v-if="style == 1">
    <el-row>
      <el-col :span="24" v-for="url in imgList" :key="url">
        <div class="grid-content">
          <el-image :key="url" :src="url" fit="fill" lazy />
        </div>
      </el-col>
    </el-row>
  </div>
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
        <div class="grid-content">
          <el-image :key="url" :src="url" fit="fill" lazy />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  style: number;
  imgList: string[];
}>();
const getImageUrl = (name) => {
  // Webpack 会解析 `require` 内的路径，动态拼接时需确保路径可被匹配
  return require(`@/assets/images/${name}.png`);
};

//打印imgList
console.log(props.imgList);
</script>

<style scoped>
.el-image {
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease; /* 平滑过渡效果 */
  width: 100%; /* 或者设置具体的宽度 */
  height: auto; /* 保持图片比例 */
}
.el-image:hover {
  transform: scale(1.2); /* 放大10% */
}
</style>
