<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Telegram定时发送工具
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
            自动化的Telegram消息定时发送工具，支持周期性任务和精确时间控制，提升工作效率
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
            精准的时间控制
          </h2>
          <p class="text-xl text-gray-600">
            让时间为您工作，消息准时送达
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card">
            <div class="text-orange-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">精确定时</h3>
            <p class="text-gray-600">
              支持精确到秒的定时发送，确保消息在您指定的准确时间发送
            </p>
          </div>

          <div class="feature-card">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">周期循环</h3>
            <p class="text-gray-600">
              设置每日、每周、每月等周期性发送任务，自动重复执行
            </p>
          </div>

          <div class="feature-card">
            <div class="text-green-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">多群组支持</h3>
            <p class="text-gray-600">
              同时向多个群组或频道发送定时消息，统一管理发送任务
            </p>
          </div>

          <div class="feature-card">
            <div class="text-purple-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">富媒体消息</h3>
            <p class="text-gray-600">
              支持发送文本、图片、文档、链接等多种类型的定时消息
            </p>
          </div>

          <div class="feature-card">
            <div class="text-red-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">发送状态</h3>
            <p class="text-gray-600">
              实时监控发送状态，失败自动重试，确保消息成功发送
            </p>
          </div>

          <div class="feature-card">
            <div class="text-indigo-600 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">模板管理</h3>
            <p class="text-gray-600">
              创建和管理消息模板，快速设置定时发送任务，提高效率
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用场景 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            应用场景
          </h2>
          <p class="text-xl text-gray-600">
            多样化的定时发送需求，一个工具全搞定
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">活动推广</h3>
            <p class="text-gray-600 mb-4">
              在活动开始前定时发送提醒消息，确保参与者不会错过重要活动。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 活动开始前24小时提醒</li>
              <li>• 活动开始前1小时提醒</li>
              <li>• 活动结束前提醒</li>
            </ul>
          </div>

          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">工作提醒</h3>
            <p class="text-gray-600 mb-4">
              设置每日、每周的工作提醒，帮助团队成员记住重要任务和会议。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 每日工作总结提醒</li>
              <li>• 周会提醒通知</li>
              <li>• 截止日期提醒</li>
            </ul>
          </div>

          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">内容发布</h3>
            <p class="text-gray-600 mb-4">
              定时发布内容到各个频道，保持内容更新的规律性和连续性。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 定时发布新闻资讯</li>
              <li>• 每日内容推送</li>
              <li>• 营销文案定时发布</li>
            </ul>
          </div>

          <div class="scenario-card">
            <h3 class="text-xl font-bold mb-4">节日祝福</h3>
            <p class="text-gray-600 mb-4">
              在节日或特殊日期自动发送祝福消息，维护客户关系。
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• 生日祝福自动发送</li>
              <li>• 节日问候定时推送</li>
              <li>• 纪念日提醒消息</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          开始使用定时发送工具
        </h2>
        <p class="text-xl mb-8 text-orange-100">
          联系我们，获取专业的Telegram定时发送解决方案
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
  name: 'TelegramScheduler',
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
</style> 