import { ref } from "vue";
import { defineStore } from "pinia";

export const useFlagStore = defineStore("flag", () => {
  const logoFlag = ref(false);
  return { logoFlag };
});
