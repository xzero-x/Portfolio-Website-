import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/website-portfolio",
  build: {
    outDir: 'build' // Ensure output is in the 'build' directory
  }
});

