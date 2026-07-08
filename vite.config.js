import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for static/WebView hosting
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
});
