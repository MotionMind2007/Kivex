import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  publicDir: false,
  plugins: [
    solid(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      cleanVueFileName: true
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KivexSolid',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },

    rollupOptions: {
      external: ['solid-js'],
    },

    sourcemap: true,
    emptyOutDir: true,
  },
});