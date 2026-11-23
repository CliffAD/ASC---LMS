import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        customerJourneyVideo: resolve(process.cwd(), 'customer-journey-video.html')
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
});
