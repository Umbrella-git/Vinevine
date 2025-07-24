<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <el-header><Header /></el-header>
  <el-main><RouterView /></el-main>
  <el-footer><Footer /></el-footer>
</template>

<style>
#app {
  padding: 0;
  margin: 0;
  width: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>

<style scoped></style>
