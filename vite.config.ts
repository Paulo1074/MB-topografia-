import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite publicar o build em qualquer hospedagem estática (raiz ou subpasta).
export default defineConfig({
  base: './',
  plugins: [react()],
})
