<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li class="list-item">
        <ImgComputed :style="2" :imgList="imgList.slice(0, 2)" />
        <ImgComputed :style="4" :imgList="imgList.slice(2, 6)" />
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import ImgComputed from "@/components/ImgComputed.vue";

const count = ref(10);
const loading = ref(false);
const noMore = computed(() => count.value >= 20);
const disabled = computed(() => loading.value || noMore.value);
const load = () => {
  // loading.value = true;
  // setTimeout(() => {
  //   count.value += 2;
  //   loading.value = false;
  // }, 2000);
};
const imgs: any = import.meta.glob("@/assets/img/**/*.{png,jpg,jpeg,gif}"); // 指定文件夹和文件类型进行匹配
const imgList = Object.keys(imgs);
</script>

<style>
.el-main {
  margin-top: 50px;
}
.list-item {
  overflow: hidden;
}
.infinite-list-wrapper {
  height: 100%;
  text-align: center;
  margin-bottom: 30px;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
