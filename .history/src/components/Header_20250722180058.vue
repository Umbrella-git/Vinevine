<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="greetings">
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
