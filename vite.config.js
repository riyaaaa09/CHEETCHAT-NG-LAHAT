import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  server: {
    open: true, // Automatically open the app in the browser
  },
  base: './',  // Use relative paths for assets

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Bundle all node_modules into a single chunk
          }
          if (id.includes('src/components/')) {
            return 'components'; // Bundle components separately
          }
          // Add more conditions here if needed
        },
      },
    },
    chunkSizeWarningLimit: 5000, // Increase chunk size limit for warnings
  },
});
