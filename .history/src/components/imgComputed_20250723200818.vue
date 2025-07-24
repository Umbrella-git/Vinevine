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
    <el-row>
      <el-col :span="12" v-for="url in imgList" :key="url">
        <div class="grid-content">
          <el-image
            style="width: 50%; height: 100%"
            v-for="url in imgList"
            :key="url"
            :src="url"
            fit="fill"
            lazy
          />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content" />
      </el-col>
    </el-row>
  </div>
  <div v-if="style == 4">
    <el-image
      style="width: 25%; height: 100%"
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
  imgList: string[];
}>();
</script>

<style scoped>
.el-image {
  overflow: hidden;
  cursor: pointer;
}
</style>
