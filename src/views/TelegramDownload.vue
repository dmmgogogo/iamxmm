<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-500 to-teal-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Telegram群组下载工具
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            批量下载Telegram群组中的文件、图片、视频等媒体内容，支持自动分类和整理
          </p>
          <el-button 
            size="large" 
            class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg"
            @click="handleContact"
          >
            立即获取
          </el-button>
        </div>
      </div>
    </section>

    <!-- 产品特性 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            强大的下载功能
          </h2>
          <p class="text-xl text-gray-600">
            一键批量下载，智能分类整理
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card">
            <div class="text-green-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">批量下载</h3>
            <p class="text-gray-600">
              一次性下载群组中的所有媒体文件，支持图片、视频、文档等多种格式
            </p>
          </div>

          <div class="feature-card">
            <div class="text-purple-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">格式支持</h3>
            <p class="text-gray-600">
              支持JPG、PNG、MP4、PDF、DOC等数十种文件格式的下载和处理
            </p>
          </div>

          <div class="feature-card">
            <div class="text-orange-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">高速下载</h3>
            <p class="text-gray-600">
              多线程并发下载技术，最大化利用网络带宽，提供极速下载体验
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- 下载流程 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            简单三步，轻松下载
          </h2>
          <p class="text-xl text-gray-600">
            操作简单，效果显著
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-green-600">1</span>
            </div>
            <h3 class="text-xl font-bold mb-4">添加群组</h3>
            <p class="text-gray-600">
              选择要下载的Telegram群组
            </p>
          </div>

          <div class="text-center">
            <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 class="text-xl font-bold mb-4">设置条件</h3>
            <p class="text-gray-600">
              设置下载条件，如文件类型、时间范围、文件大小等（待开发）
            </p>
          </div>

          <div class="text-center">
            <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 class="text-xl font-bold mb-4">开始下载</h3>
            <p class="text-gray-600">
              开始下载，工具会自动扫描群组并下载
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          开始使用群组下载工具
        </h2>
        <p class="text-xl mb-8 text-green-100">
          联系我们，获取专业的Telegram群组下载解决方案
        </p>
        <el-button 
          size="large"
          class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg"
          @click="handleContact"
        >
          立即联系我们
        </el-button>
      </div>
    </section>
  </div>
</template>

<script>
import { contactConfig } from '@/config/contact.js'

export default {
  name: 'TelegramDownload',
  methods: {
    handleContact() {
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
.feature-card {
  @apply bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300;
}
</style> 