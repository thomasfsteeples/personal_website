import { defineConfig } from "vite";
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import react from "@vitejs/plugin-react";

function manualChunks(id: string) {
  let search = id.toLowerCase();
  if (search.includes("node_modules")) {
    return "vendor";
  }
  return "main";
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginFaviconsInject('./assets/logo.svg')],
  assetsInclude: ["**/*.md"],
  build: {
    rollupOptions: {
      output: {
        manualChunks: manualChunks,
      },
    },
    target: "es2015",
    minify: "esbuild",
  },
});
