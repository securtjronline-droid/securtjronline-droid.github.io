import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // User site (securtjronline-droid.github.io) is served from the domain root.
  base: '/',
  plugins: [react()],
})
