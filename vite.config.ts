import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-potfolio/',  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

