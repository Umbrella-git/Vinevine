import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
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
  };
});
