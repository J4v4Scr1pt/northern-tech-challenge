import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: '/index.html',
    proxy: {
      "/weather/api": {
        target: "http://api.openweathermap.org/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather\/api/,''),
      }
    }
  },
})
