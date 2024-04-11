import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'https://localhost:3000',
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ''), // remove /api prefix
    },
  },
})
