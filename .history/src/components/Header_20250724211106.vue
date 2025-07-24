<template>
  <div class="header">
    <el-button text @click="table = true">
      <svg class="icon-font" width="30px" height="30px">
        <use xlink:href="#icon-zhankaicebianlan"></use>
      </svg>
    </el-button>

    <transition name="fade">
      <img
        class="logo"
        src="@/assets/img/logo/V.svg"
        width="100px"
        height="100px"
        v-if="flag"
      />
      <img
        class="logo"
        src="@/assets/img/logo/VINEVINE.svg"
        width="100px"
        height="100px"
        v-else
      />
    </transition>

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
import { useFlagStore } from "@/stores/flag";
import { storeToRefs } from "pinia";
const table = ref(false);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 9999;
  align-items: center;
}
.logo {
  position: fixed;
  z-index: 9999;
  margin-top: 200px;
}
</style>
