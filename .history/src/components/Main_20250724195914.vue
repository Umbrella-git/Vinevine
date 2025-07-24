<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <img :src="currentImage" alt="" width="100px" height="100px" />
    <ul
      v-infinite-scroll="load"
      class="list scroll-container"
      :infinite-scroll-disabled="disabled"
      ref="scrollContainer"
      @scroll="handleScroll"
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
import { computed, ref, onMounted } from "vue";
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

// 计算属性，根据当前索引返回当前图片的URL
const currentImage = computed(() => {
  return new URL(
    `/src/assets/img/logo/${images[currentIndex.value]}`,
    import.meta.url
  ).href;
});

// 处理滚动事件
const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  // 根据滚动百分比更新图片索引
  currentIndex.value = Math.floor(scrollPercentage * (images.length - 1));
  console.log(currentIndex.value);
};

// onMounted(() => {
//   // 可选：设置初始滚动位置以触发图片更换（例如滚动到底部）
//   // scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
// });
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
  height: 500px; /* 或其他你需要的具体高度 */
  overflow-y: scroll;
}
</style>
