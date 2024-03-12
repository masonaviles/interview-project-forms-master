import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: false,
    host: '0.0.0.0',
    cors: true,
  },
})
