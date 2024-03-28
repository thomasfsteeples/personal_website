import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

import markdownProcessorPlugin from "./plugins/markdownProcessor.ts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginFaviconsInject("./src/assets/logo.svg"),
    markdownProcessorPlugin(),
  ],
  build: {
    target: "es2015",
    minify: "esbuild",
  },
});
