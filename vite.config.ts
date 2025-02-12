import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      components: 'src/components',
    },
  },
})
