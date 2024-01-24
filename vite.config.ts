import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import { rmSync } from 'node:fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      'views': fileURLToPath(new URL('./src/views', import.meta.url))
    }
  },
  server: {
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        // bypass(req, res, options) {
        //   const url = new URL(options.rewrite(req.url) || '', options.target)?.href || '';
        //   console.log(123, url)
        //   res.setHeader('x-url', url);
        // }
      }
    }
  }
})
