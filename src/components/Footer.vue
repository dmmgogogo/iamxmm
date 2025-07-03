<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 品牌信息 -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-4">
            <span class="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              iamxmm
            </span>
          </div>
          <p class="text-gray-300 text-sm max-w-md">
            专业的Telegram工具套件，提供消息转发、群组内容下载、定时发送等自动化解决方案。
            让您的Telegram使用体验更加高效便捷。
          </p>
          <div class="mt-6 flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Telegram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.18 1.896-.962 6.502-1.359 8.627-.168.9-.499 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903l-3.319-2.463c-.895-.659-.302-1.784.64-2.724l3.803-3.802c.331-.331.111-.52-.205-.302L9.74 11.185c-1.121.685-2.432.926-3.84.673-.901-.162-1.785-.516-2.463-.9-.901-.512-.901-1.784 0-2.295L17.28 7.02c1.023-.685 2.432.302 1.288 1.14z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 产品链接 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            产品
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/telegram-forward" class="text-gray-300 hover:text-white transition-colors">
                消息转发
              </router-link>
            </li>
            <li>
              <router-link to="/telegram-download" class="text-gray-300 hover:text-white transition-colors">
                群组下载
              </router-link>
            </li>
            <li>
              <router-link to="/telegram-scheduler" class="text-gray-300 hover:text-white transition-colors">
                定时发送
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            联系我们
          </h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                邮箱支持
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                文档中心
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-12 border-t border-gray-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} iamxmm. 保留所有权利。
          </p>
          <div class="mt-4 md:mt-0 flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script> 