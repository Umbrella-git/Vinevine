<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="greetings">
    <RouterLink to="/about">About</RouterLink>
  </div>

  <el-button text @click="table = true"
    >Open Drawer with nested table</el-button
  >
  <el-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
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

const onClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    dialog.value = false;
  }, 400);
};

const handleClose = (done) => {
  if (loading.value) {
    return;
  }
  ElMessageBox.confirm("Do you want to submit?")
    .then(() => {
      loading.value = true;
      timer = setTimeout(() => {
        done();
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false;
        }, 400);
      }, 2000);
    })
    .catch(() => {
      // catch error
    });
};

const cancelForm = () => {
  loading.value = false;
  dialog.value = false;
  clearTimeout(timer);
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
