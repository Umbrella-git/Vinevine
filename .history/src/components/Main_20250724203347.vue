<template>
  <div
    class="infinite-list-wrapper scroll-container"
    style="overflow: auto"
    @scroll="handleScroll"
  >
    <img :src="currentImage" alt="" width="100px" height="100px" />
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li class="list-item">
        <ImgComputed :style="1" :imgList="imagesRef.slice(0, 1)" />
      </li>
      <li class="list-item">
        <ImgComputed :style="1" :imgList="imagesRef.slice(1, 2)" />
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
import { computed, ref, onMounted, onUnmounted } from "vue";
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

const images = ["V.svg", "VINEVINE.svg"]; // 图片数组
const currentIndex = ref(0); // 当前图片索引
const scrollContainer = ref(null);

// 根据当前索引返回当前图片的URL
let currentImage = ref("");

// 处理滚动事件
// const handleScroll = () => {
//   console.log(1);
//   const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;
//   const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
//   // 根据滚动百分比更新图片索引
//   currentIndex.value = Math.floor(scrollPercentage * (images.length - 1));
//   console.log(currentIndex.value);
// };

// onMounted(() => {
//   // 可选：设置初始滚动位置以触发图片更换（例如滚动到底部）
//   // scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
// });
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  console.log("滚动事件被触发");
  // 在这里处理滚动逻辑
  // 获取滚动高度
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  // 根据滚动百分比更新图片索引
  if (currentIndex.value > 0) {
    currentImage = "@/assets/img/logo/VINEVINE.svg";
  } else {
    currentImage = "@/assets/img/logo/V.svg";
  }
  currentIndex.value = Math.floor(scrollPercentage * (images.length - 1));
  console.log(scrollTop, scrollHeight, clientHeight);
  console.log(scrollPercentage);
};
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
  margin-bottom: 120px;
}

.scroll-container {
  height: 100%; /* 或其他你需要的具体高度 */
  overflow-y: scroll;
}
</style>
