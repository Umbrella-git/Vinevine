<template>
  <div v-if="style == 2">
    <el-image
      style="width: 50%; height: 100%"
      v-for="url in imgList"
      :key="url"
      :src="url"
      fit="fill"
      lazy
    />
    <el-switch
      v-model="resizable"
      active-text="enable"
      inactive-text="disable"
      inline-prompt
      class="mb-2"
    />
    <div
      style="
        height: 250px;
        box-shadow: var(--el-border-color-light) 0px 0px 10px;
      "
    >
      <el-splitter>
        <el-splitter-panel>
          <div class="demo-panel">1</div>
        </el-splitter-panel>
        <el-splitter-panel :resizable="resizable">
          <div class="demo-panel">
            drag {{ resizable ? "enable" : "disable" }}
          </div>
        </el-splitter-panel>
        <el-splitter-panel>
          <div class="demo-panel">3</div>
        </el-splitter-panel>
      </el-splitter>
    </div>
  </div>
  <div v-if="style == 4">
    <el-image
      style="width: 25%; height: 100%"
      v-for="url in imgList"
      :key="url"
      :src="url"
      fit="fill"
      lazy
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
defineProps<{
  style: number;
  imgList: string[];
}>();
const resizable = ref(false);
</script>

<style scoped>
.el-image {
  overflow: hidden;
  cursor: pointer;
}
</style>
