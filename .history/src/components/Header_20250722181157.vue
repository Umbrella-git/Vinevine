<template>
  <div class="greetings"></div>

  <el-button text @click="table = true"
    >Open Drawer with nested table</el-button
  >
  <el-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="ltr"
    size="50%"
  >
    <el-table>
      <RouterLink to="/about">About</RouterLink>
    </el-table>
  </el-drawer>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElMessageBox } from "element-plus";

const formLabelWidth = "80px";
let timer;

const table = ref(false);
const dialog = ref(false);
const loading = ref(false);

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const gridData = [
  {
    date: "2016-05-02",
    name: "Peter Parker",
    address: "Queens, New York City",
  },
  {
    date: "2016-05-04",
    name: "Peter Parker",
    address: "Queens, New York City",
  },
  {
    date: "2016-05-01",
    name: "Peter Parker",
    address: "Queens, New York City",
  },
  {
    date: "2016-05-03",
    name: "Peter Parker",
    address: "Queens, New York City",
  },
];
</script>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
