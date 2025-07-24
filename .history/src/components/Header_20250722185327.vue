<template>
  <div class="header">
    <el-button text @click="table = true">
      <svg class="icon-font">
        <use xlink:href="#icon-zhankaicebianlan"></use>
      </svg>
    </el-button>

    <img
      src="@/assets/logo.svg"
      alt="logo"
      css="width: 100px; height: 100px;"
    />

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
.header {
  display: flex;
  justify-content: space-between;
}
el-button {
  flex: 1;
}
</style>
