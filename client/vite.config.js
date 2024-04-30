import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify the port you want
    open: true, // Opens the browser after server is started
    proxy: {
      // Proxying websockets or socket.io 
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }, 
    }
  }
});

