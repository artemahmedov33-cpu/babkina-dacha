import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/babkina-dacha/',
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    outDir: 'docs',
  },
})
