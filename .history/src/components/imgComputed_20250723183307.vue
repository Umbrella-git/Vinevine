<template>
  <div class="infinite-list-wrapper" style="overflow: auto"></div>
</template>

<script lang="ts" setup></script>

<style>
.el-main {
  margin-top: 50px;
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
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
