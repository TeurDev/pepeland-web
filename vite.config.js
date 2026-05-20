import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// ⚠ IMPORTANTE — antes de subir a GitHub Pages:
// Cambia `base` por el nombre exacto de tu repositorio.
// Ejemplo: si tu repo es github.com/teurdev/pepeland-server
//          base: '/pepeland-server/'
//
// En desarrollo local (npm run dev) el valor 'base' no afecta — Vite
// detecta automáticamente el modo y sirve desde '/'.
export default defineConfig({
  plugins: [react()],
  base: '/pepeland-web/',
  resolve: {
    alias: {
      '@shared':   path.resolve(__dirname, './src/shared'),
      '@editions': path.resolve(__dirname, './src/editions'),
    },
  },
})
