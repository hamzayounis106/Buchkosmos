// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rest': {
        target: 'https://buchkosmos.de',
        changeOrigin: true,
        secure: true,  // If the API uses HTTPS, this should be true
        rewrite: (path) => path.replace(/^\/rest/, '/rest'), // Adjust this if necessary
      },
    },
  },
});
