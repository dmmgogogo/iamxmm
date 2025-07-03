<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-gradient text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="text-center animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            专业的
            <span class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Telegram工具
            </span>
            套件
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            提供消息转发、群组内容下载、定时发送等自动化解决方案，让您的Telegram使用体验更加高效便捷
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <el-button 
              size="large" 
              class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              @click="scrollToProducts"
            >
              查看产品
            </el-button>
            <el-button 
              size="large" 
              type="primary"
              class="glass-effect border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-200"
              @click="handleContact"
            >
              立即联系
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示区域 -->
    <section id="products" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的产品
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            三款强大的Telegram工具，满足您的不同需求
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 消息转发 -->
          <div class="product-card scroll-animate">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-t-xl">
              <div class="flex items-center mb-4">
                <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                <h3 class="text-xl font-bold">消息转发</h3>
              </div>
              <p class="text-blue-100">
                智能的Telegram消息转发工具，支持多群组、多频道之间的自动消息转发
              </p>
            </div>
            <div class="bg-white p-6 rounded-b-xl border-2 border-gray-100">
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  多群组同步转发
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  智能过滤规则
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  实时转发
                </li>
              </ul>
              <el-button 
                type="primary" 
                class="w-full btn-gradient"
                @click="$router.push('/telegram-forward')"
              >
                了解更多
              </el-button>
            </div>
          </div>

          <!-- 群组下载 -->
          <div class="product-card scroll-animate">
            <div class="bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-t-xl">
              <div class="flex items-center mb-4">
                <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                </svg>
                <h3 class="text-xl font-bold">群组下载</h3>
              </div>
              <p class="text-green-100">
                批量下载Telegram群组中的文件、图片、视频等媒体内容
              </p>
            </div>
            <div class="bg-white p-6 rounded-b-xl border-2 border-gray-100">
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  批量下载媒体文件
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  自动分类整理
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  支持多种格式
                </li>
              </ul>
              <el-button 
                type="primary" 
                class="w-full btn-gradient"
                @click="$router.push('/telegram-download')"
              >
                了解更多
              </el-button>
            </div>
          </div>

          <!-- 定时发送 -->
          <div class="product-card scroll-animate">
            <div class="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-t-xl">
              <div class="flex items-center mb-4">
                <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <h3 class="text-xl font-bold">定时发送</h3>
              </div>
              <p class="text-orange-100">
                自动化的Telegram消息定时发送工具，支持周期性任务和精确时间控制
              </p>
            </div>
            <div class="bg-white p-6 rounded-b-xl border-2 border-gray-100">
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  精确时间控制
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  周期性任务
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  多群组支持
                </li>
              </ul>
              <el-button 
                type="primary" 
                class="w-full btn-gradient"
                @click="$router.push('/telegram-scheduler')"
              >
                了解更多
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性展示区域 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们？
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            专业、可靠、高效的Telegram自动化解决方案
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center scroll-animate">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">安全可靠</h3>
            <p class="text-gray-600">严格的安全标准，保护您的隐私数据</p>
          </div>

          <div class="text-center scroll-animate">
            <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">高效快速</h3>
            <p class="text-gray-600">优化的算法，确保快速响应和处理</p>
          </div>

          <div class="text-center scroll-animate">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">易于使用</h3>
            <p class="text-gray-600">简洁的界面设计，轻松上手</p>
          </div>

          <div class="text-center scroll-animate">
            <div class="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">专业支持</h3>
            <p class="text-gray-600">技术牛马，为您服务</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          准备好开始使用了吗？
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          联系我们，获取专业的Telegram自动化解决方案
        </p>
        <el-button 
          size="large"
          class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
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
import { trackContact, trackEngagement } from '@/utils/analytics.js'

export default {
  name: 'Home',
  mounted() {
    this.initScrollAnimations()
    // 追踪首页访问
    trackEngagement('home_page_view')
  },
  methods: {
    scrollToProducts() {
      // 追踪产品区域滚动
      trackEngagement('scroll_to_products')
      
      document.getElementById('products').scrollIntoView({ 
        behavior: 'smooth' 
      })
    },
    handleContact() {
      // 追踪联系事件
      trackContact('home_hero')
      
      contactConfig.openTelegram()
      this.$message({
        message: contactConfig.getContactMessage(),
        type: 'success',
        duration: 2000
      })
    },
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      }, observerOptions)

      // 观察所有需要动画的元素
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
.product-card {
  @apply bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1;
}

.scroll-animate {
  @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
}

.scroll-animate.animate {
  @apply opacity-100 translate-y-0;
}


</style> 