import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'iamxmm - Telegram工具专家'
    }
  },
  {
    path: '/telegram-forward',
    name: 'TelegramForward',
    component: () => import('@/views/TelegramForward.vue'),
    meta: {
      title: 'Telegram消息转发 - iamxmm'
    }
  },
  {
    path: '/telegram-download',
    name: 'TelegramDownload', 
    component: () => import('@/views/TelegramDownload.vue'),
    meta: {
      title: 'Telegram群组下载 - iamxmm'
    }
  },
  {
    path: '/telegram-scheduler',
    name: 'TelegramScheduler',
    component: () => import('@/views/TelegramScheduler.vue'),
    meta: {
      title: 'Telegram定时发送 - iamxmm'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'iamxmm'
  next()
})

export default router 