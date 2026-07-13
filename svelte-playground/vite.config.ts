import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  
  // Force Vite to process the linked package
  optimizeDeps: {
    include: ['kivex-svelte']
  },
  
  // Ensure Svelte components from the package are compiled
  ssr: {
    noExternal: ['kivex-svelte']
  }
});