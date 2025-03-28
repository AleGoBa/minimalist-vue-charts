import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from "vite-plugin-eslint";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(),eslint()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'MinimalistVueCharts',
      fileName: (format) => `minimalist-vue-charts.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
