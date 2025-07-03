import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style.css'

// Google Analytics配置
import VueGtag from 'vue-gtag-next'
import { analyticsConfig, shouldEnableAnalytics } from '@/config/analytics.js'

const app = createApp(App)

// 配置路由
app.use(router)
app.use(ElementPlus)

// 配置Google Analytics（仅在满足条件时启用）
if (shouldEnableAnalytics()) {
  app.use(VueGtag, {
    property: {
      id: analyticsConfig.measurementId
    }
  })
  
  console.log('📊 Google Analytics已启用 - 测量ID:', analyticsConfig.measurementId)
} else {
  console.log('📊 Google Analytics未启用 - 请检查配置')
}

app.mount('#app') 