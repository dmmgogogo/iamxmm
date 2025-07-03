import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
  build: {
    outDir: 'dist'
  },
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 5173, // 指定端口
    open: true, // 自动打开浏览器
    hmr: {
      overlay: true // 显示错误覆盖层
    },
    watch: {
      usePolling: true, // 启用轮询监听文件变化
      interval: 1000, // 轮询间隔
      ignored: ['**/node_modules/**', '**/.git/**']
    }
  },
  // 开发时的优化配置
  optimizeDeps: {
    include: ['vue', 'vue-router', 'element-plus']
  }
}) 