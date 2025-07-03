<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              iamxmm
            </span>
          </router-link>
        </div>

        <!-- 桌面端菜单 -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link 
              to="/" 
              class="nav-link"
              active-class="text-primary-600"
            >
              首页
            </router-link>
            <router-link 
              to="/telegram-forward" 
              class="nav-link"
              active-class="text-primary-600"
            >
              消息转发
            </router-link>
            <router-link 
              to="/telegram-download" 
              class="nav-link"
              active-class="text-primary-600"
            >
              群组下载
            </router-link>
            <router-link 
              to="/telegram-scheduler" 
              class="nav-link"
              active-class="text-primary-600"
            >
              定时发送
            </router-link>

            <router-link 
              to="/help" 
              class="nav-link"
              active-class="text-primary-600"
            >
              帮助❓
            </router-link>
          </div>
        </div>

        <!-- 联系按钮 -->
        <div class="hidden md:block">
          <el-button 
            type="primary" 
            class="btn-gradient"
            @click="handleContact"
          >
            联系我们
          </el-button>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <el-button 
            text 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </el-button>
        </div>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div v-show="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <router-link 
          to="/" 
          class="mobile-nav-link"
          @click="mobileMenuOpen = false"
        >
          首页
        </router-link>
        <router-link 
          to="/telegram-forward" 
          class="mobile-nav-link"
          @click="mobileMenuOpen = false"
        >
          消息转发
        </router-link>
        <router-link 
          to="/telegram-download" 
          class="mobile-nav-link"
          @click="mobileMenuOpen = false"
        >
          群组下载
        </router-link>
        <router-link 
          to="/telegram-scheduler" 
          class="mobile-nav-link"
          @click="mobileMenuOpen = false"
        >
          定时发送
        </router-link>
        <div class="pt-4">
          <el-button 
            type="primary" 
            class="btn-gradient w-full"
            @click="handleContact"
          >
            联系我们
          </el-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { contactConfig } from '@/config/contact.js'

export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    handleContact() {
      // 直接跳转到Telegram
      contactConfig.openTelegram()
      this.$message({
        message: contactConfig.getContactMessage(),
        type: 'success',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200;
}

.mobile-nav-link {
  @apply text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200;
}
</style> 