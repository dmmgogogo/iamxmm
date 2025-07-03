<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Telegram消息转发工具
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            智能的Telegram消息转发解决方案，支持多群组、多频道之间的自动消息转发，提高沟通效率
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
            核心功能特性
          </h2>
          <p class="text-xl text-gray-600">
            强大的功能，简单的操作
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">多群组同步</h3>
            <p class="text-gray-600">
              支持同时向多个Telegram群组或频道转发消息，一次发送，多处同步
            </p>
          </div>

          <div class="feature-card">
            <div class="text-green-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">智能过滤</h3>
            <p class="text-gray-600">
              设置关键词过滤、用户过滤等智能规则，只转发您需要的内容
            </p>
          </div>

          <div class="feature-card">
            <div class="text-purple-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">实时转发</h3>
            <p class="text-gray-600">
              毫秒级的消息转发速度，确保信息及时传递，不错过任何重要内容
            </p>
          </div>

          <div class="feature-card">
            <div class="text-orange-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">自动重试</h3>
            <p class="text-gray-600">
              网络异常时自动重试机制，确保消息转发的稳定性和可靠性
            </p>
          </div>

          <div class="feature-card">
            <div class="text-red-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">安全加密</h3>
            <p class="text-gray-600">
              端到端加密传输，保护您的消息内容和隐私安全
            </p>
          </div>

          <div class="feature-card">
            <div class="text-indigo-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45.75a2.5 2.5 0 00-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">管理面板</h3>
            <p class="text-gray-600">
              直观的管理界面，轻松配置转发规则和监控转发状态
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 实际效果展示 -->
    <section class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            消息转发实际效果展示
          </h2>
          <p class="text-lg text-gray-600">
            看看我们的消息转发工具在实际使用中的强大功能
          </p>
        </div>
        <div>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
            <img 
              src="@/assets/images/tg消息转发截图-1.png" 
              alt="Telegram消息转发工具实际使用效果展示" 
              class="ad-image w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              style="max-height: 600px;"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
              <div class="p-6 text-white">
                <h3 class="text-xl font-bold mb-2">消息转发功能演示</h3>
                <p class="text-white/90">智能转发，多群组同步，高效管理</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用场景 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            适用场景
          </h2>
          <p class="text-xl text-gray-600">
            多种应用场景，满足不同需求
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">企业内部通信</h3>
            <p class="text-gray-600 mb-4">
              将重要通知同时发送到多个部门群组，确保信息及时传达给所有相关人员。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 公司公告同步推送</li>
              <li>• 部门间信息共享</li>
              <li>• 项目进度通报</li>
            </ul>
          </div>

          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">社群管理</h3>
            <p class="text-gray-600 mb-4">
              管理多个相关社群，将精彩内容或重要信息在不同群组间同步分享。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 多群同步发布活动</li>
              <li>• 精选内容自动分享</li>
              <li>• 群规统一推送</li>
            </ul>
          </div>

          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">新闻资讯</h3>
            <p class="text-gray-600 mb-4">
              自动转发新闻、资讯到多个频道，让订阅者及时获取最新信息。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 新闻实时推送</li>
              <li>• 行业资讯分发</li>
              <li>• 热点话题传播</li>
            </ul>
          </div>

          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">客户服务</h3>
            <p class="text-gray-600 mb-4">
              将客户咨询或反馈同步到相关服务团队，提高响应效率。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 客户问题同步</li>
              <li>• 服务团队协作</li>
              <li>• 反馈统一收集</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能界面预览 -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            管理界面预览
          </h2>
          <p class="text-lg text-gray-600">
            专业的界面设计，让消息转发管理更加便捷
          </p>
        </div>
        <div>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-2">
            <img 
              src="@/assets/images/tg消息转发截图-2.png" 
              alt="Telegram消息转发工具管理界面预览" 
              class="ad-image w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              style="max-height: 600px;"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
              <div class="p-6 text-white">
                <h3 class="text-xl font-bold mb-2">专业管理界面</h3>
                <p class="text-white/90">简洁明了，功能齐全，操作便捷</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          开始使用消息转发工具
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          联系我们，获取专业的Telegram消息转发解决方案
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
  name: 'TelegramForward',
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

.scenario-card {
  @apply bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300;
}

/* 广告图片响应式优化 */
@media (max-width: 768px) {
  .ad-image {
    max-height: 400px !important;
  }
}

@media (max-width: 480px) {
  .ad-image {
    max-height: 300px !important;
  }
}

/* 图片加载优化 */
img {
  @apply transition-all duration-300;
}

img:hover {
  @apply shadow-lg;
}
</style> 