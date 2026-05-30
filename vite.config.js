import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build timestamp — injected at build time, formatted for Malta timezone
const buildDate = new Date().toLocaleString('en-GB', {
  timeZone: 'Europe/Malta',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
})
