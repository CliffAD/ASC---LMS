import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        lms: resolve(process.cwd(), 'lms_portal.html')
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
});
