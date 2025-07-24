<template>
  <div class="header">
    <el-button text @click="table = true">
      <svg class="icon-font" width="30px" height="30px">
        <use xlink:href="#icon-zhankaicebianlan"></use>
      </svg>
    </el-button>

    <img src="@/assets/logo.svg" alt="logo" width="100px" height="100px" />

    <el-button text>
      <svg class="icon-font" width="30px" height="30px">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </el-button>

    <el-drawer
      v-model="table"
      title="I have a nested table inside!"
      direction="ltr"
      size="25%"
    >
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/">Home</RouterLink>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const table = ref(false);
</script>

<style scoped>
.el-header {
  padding: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
}
.el-button {
  height: 100%;
}
</style>
