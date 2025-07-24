<template>
  <el-button text @click="table = true"
    >Open Drawer with nested table</el-button
  >
  <el-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="ltr"
    size="25%"
  >
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/">Home</RouterLink>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const table = ref(false);
</script>

<style scoped></style>
