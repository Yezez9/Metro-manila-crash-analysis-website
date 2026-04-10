import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Metro-manila-crash-analysis-website/',
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
})
