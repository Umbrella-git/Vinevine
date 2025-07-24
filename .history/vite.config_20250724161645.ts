import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(
        new URL(
          process.env.MODE === "Production" ? "./aaa" : "./src",
          import.meta.url
        )
      ),
    },
  },
  base: "./",
  server: {
    proxy: {
      "/api": {
        target: "https://www.vinevine.shop/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
