<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <img :src="imgList" alt="" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  style: number;
  imgList: string;
}>();
console.log(imgList);
</script>

<style></style>
