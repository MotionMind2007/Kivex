import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.js"],
  format: ["esm", "cjs"],
  dts: false,
  clean: true,
  splitting: true,
  treeshake: true,
  minify: true,
  sourcemap: true,
  outDir: "dist",
});