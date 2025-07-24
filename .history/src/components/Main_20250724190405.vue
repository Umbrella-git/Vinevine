<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li class="list-item">
        <ImgComputed :style="1" :imgList="imagesRef" />
      </li>
      <!-- <li class="list-item">
        <ImgComputed :style="4" :imgList="imagesRef.slice(2, 6)" />
      </li>
      <li class="list-item">
        <ImgComputed :style="2" :imgList="imagesRef.slice(6, 8)" />
      </li>
      <li class="list-item">
        <ImgComputed :style="2" :imgList="imagesRef.slice(8, 10)" />
      </li>
      <li class="list-item">
        <ImgComputed :style="4" :imgList="imagesRef.slice(10, 14)" />
      </li>
      <li class="list-item">
        <ImgComputed :style="2" :imgList="imagesRef.slice(14, 16)" />
      </li>
      <li class="list-item">
        <ImgComputed :style="2" :imgList="imagesRef.slice(16, 18)" />
      </li> -->
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

const obj = import.meta.glob("@/assets/img/main_img/**/*.{png,jpg,jpeg,gif}", {
  as: "url",
});

const imagesRef = ref<string[]>([]);

for (const key in obj) {
  obj[key]().then((res) => {
    imagesRef.value.push(res);
  });
}
</script>

<style>
.el-main {
  margin-top: 50px;
}
.list-item {
  overflow: hidden;
  width: 100%;
}
.infinite-list-wrapper {
  height: 100%;
  text-align: center;
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
