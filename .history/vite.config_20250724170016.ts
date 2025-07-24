import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": fileURLToPath(
          new URL(
            // 如果是开发环境则为"./src/",否则为"./"
            "process.env.NODE_ENV" == "development" ? "./src" : "./",
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
  };
});
