import { defineConfig } from "tsup";
import Vue from "unplugin-vue/esbuild";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: false,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: true,
  sourcemap: true,
  outDir: "dist",
  esbuildPlugins: [Vue()],
  external: ["vue"],
  define: {
    "__VUE_OPTIONS_API__": "true",
    "__VUE_PROD_DEVTOOLS__": "false"
  }
});