<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="greetings">
    <button @click="goToHome">about</button>
  </div>
</template>

<script setup lang="ts">

goToHome() {
  this.$router.push('/'); // 跳转到根路径
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
