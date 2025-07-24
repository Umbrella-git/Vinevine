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

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
