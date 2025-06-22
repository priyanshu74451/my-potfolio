import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-potfolio/',  // <-- ADD THIS LINE with your repo name
  plugins: [react()],
});
