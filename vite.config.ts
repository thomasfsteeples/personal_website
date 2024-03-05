import { defineConfig } from "vite";
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginFaviconsInject('./assets/logo.svg')],
  assetsInclude: ["**/*.md"],
  build: {
    target: "es2015",
    minify: "esbuild",
  },
});
