<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            📚 使用帮助文档
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            新手必看！快速上手Telegram工具的完整指南 🚀
          </p>
        </div>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- 重要提醒 -->
        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <div class="flex items-start">
            <div class="text-2xl mr-3">⚠️</div>
            <div>
              <h3 class="text-lg font-bold text-yellow-800 mb-2">重要提醒</h3>
              <p class="text-yellow-700">
                请仔细阅读以下步骤，严格按照顺序操作。如遇到问题，请通过页面底部联系方式寻求帮助。
              </p>
            </div>
          </div>
        </div>

        <!-- 第一步：注册Telegram API -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div class="flex items-center mb-6">
            <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span class="text-2xl">1️⃣</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">注册Telegram API</h2>
          </div>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <div class="flex items-start">
                <span class="text-xl mr-3">💡</span>
                <div>
                  <p class="text-blue-800 font-medium">为什么需要API？</p>
                  <p class="text-blue-700 text-sm mt-1">
                    Telegram API是官方提供的开发接口，用于合法访问Telegram服务。所有正规的Telegram工具都需要使用官方API。
                  </p>
                </div>
              </div>
            </div>

            <div class="pl-4 border-l-2 border-blue-200">
              <h3 class="text-lg font-semibold mb-4 flex items-center">
                <span class="mr-2">🔗</span>
                详细步骤：
              </h3>
              
              <ol class="space-y-4">
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <p class="font-medium">访问官方API管理页面</p>
                    <div class="mt-2 bg-gray-100 p-3 rounded border-l-4 border-blue-400">
                      <code class="text-blue-600 break-all">https://my.telegram.org/apps</code>
                      <button 
                        @click="copyToClipboard('https://my.telegram.org/apps')"
                        class="ml-2 text-blue-500 hover:text-blue-700 text-sm"
                      >
                        📋 复制
                      </button>
                    </div>
                    <p class="text-sm text-gray-600 mt-1">💡 建议使用Chrome或Firefox浏览器</p>
                  </div>
                </li>
                
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <p class="font-medium">登录你的Telegram账号</p>
                    <p class="text-sm text-gray-600 mt-1">🔐 输入手机号并验证短信验证码</p>
                  </div>
                </li>
                
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <p class="font-medium">点击 "Create new application"</p>
                    <p class="text-sm text-gray-600 mt-1">📱 创建新的应用程序</p>
                  </div>
                </li>
                
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <div>
                    <p class="font-medium">填写应用信息</p>
                    <div class="mt-2 space-y-2">
                      <div class="bg-gray-50 p-3 rounded">
                        <p class="text-sm"><strong>App title:</strong> 随意填写，例如：我的Telegram工具</p>
                        <p class="text-sm"><strong>Short name:</strong> 随意填写，例如：mytool</p>
                        <p class="text-sm"><strong>Description:</strong> 可选，描述用途</p>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li class="flex items-start">
                  <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                  <div>
                    <p class="font-medium">获取API凭据</p>
                    <div class="mt-2 bg-green-50 p-3 rounded border border-green-200">
                      <p class="text-green-800 text-sm">
                        ✅ 成功后你将看到 <strong>API ID</strong> 和 <strong>API Hash</strong>，请妥善保存！
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <!-- 第二步：环境配置 -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div class="flex items-center mb-6">
            <div class="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span class="text-2xl">2️⃣</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">环境配置</h2>
          </div>
          
          <div class="space-y-6">
            <!-- 步骤1：创建配置文件 -->
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4 flex items-center">
                <span class="mr-2">📝</span>
                步骤1：创建配置文件
              </h3>
              
              <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <p class="text-gray-400"># 复制模板文件</p>
                <p>cp env_template.txt .env</p>
              </div>
              
              <div class="mt-3 bg-blue-50 p-3 rounded">
                <p class="text-blue-800 text-sm">
                  💡 <strong>说明：</strong>这个命令会复制模板文件并重命名为 .env 配置文件
                </p>
              </div>
            </div>

            <!-- 步骤2：编辑配置文件 -->
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4 flex items-center">
                <span class="mr-2">⚙️</span>
                步骤2：编辑 .env 文件
              </h3>
              
              <p class="text-gray-700 mb-4">打开 .env 文件，填入你的实际配置信息：</p>
              
              <div class="space-y-4">
                <div>
                  <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <span class="mr-2">🔑</span>
                    <code class="bg-red-100 text-red-800 px-2 py-1 rounded">api_id</code>
                    <span class="text-red-600 ml-2">(必需)</span>
                  </label>
                  <p class="text-sm text-gray-600">你的 Telegram API ID（从上一步获取的数字）</p>
                </div>
                
                <div>
                  <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <span class="mr-2">🔐</span>
                    <code class="bg-red-100 text-red-800 px-2 py-1 rounded">api_hash</code>
                    <span class="text-red-600 ml-2">(必需)</span>
                  </label>
                  <p class="text-sm text-gray-600">你的 Telegram API Hash（从上一步获取的字符串）</p>
                </div>
                
                <div>
                  <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <span class="mr-2">🎫</span>
                    <code class="bg-red-100 text-red-800 px-2 py-1 rounded">allow_token</code>
                    <span class="text-red-600 ml-2">(必需)</span>
                  </label>
                  <p class="text-sm text-gray-600">软件激活码（联系管理员获取）</p>
                  <div class="mt-2 bg-yellow-50 p-3 rounded border border-yellow-200">
                    <p class="text-yellow-800 text-sm">
                      🎯 <strong>如何获取激活码？</strong> 
                      <button 
                        @click="handleContact"
                        class="text-blue-600 hover:text-blue-800 underline ml-1"
                      >
                        点击联系管理员
                      </button>
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            <!-- 配置示例 -->
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4 flex items-center">
                <span class="mr-2">📋</span>
                配置示例
              </h3>
              
              <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <p class="text-gray-400"># .env 文件内容示例</p>
                <p><span class="text-blue-400">api_id</span>=<span class="text-yellow-400">12345678</span></p>
                <p><span class="text-blue-400">api_hash</span>=<span class="text-yellow-400">your_api_hash_string_here</span></p>
                <p><span class="text-blue-400">allow_token</span>=<span class="text-yellow-400">your_activation_code_here</span></p>
                <p><span class="text-blue-400">feishu_bot_id</span>=<span class="text-gray-500">your_feishu_bot_id</span>  <span class="text-gray-400"># 可选</span></p>
              </div>
              
              <div class="mt-4 bg-red-50 p-3 rounded border border-red-200">
                <p class="text-red-800 text-sm">
                  ⚠️ <strong>安全提醒：</strong>请勿将 .env 文件分享给他人，其中包含重要的私密信息！
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 常见问题 -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="mr-3">❓</span>
            常见问题
          </h2>
          
          <div class="space-y-4">
            <details class="border border-gray-200 rounded-lg" @toggle="trackFAQToggle('network_access')">
              <summary class="p-4 cursor-pointer font-medium bg-gray-50 hover:bg-gray-100 rounded-lg">
                🚫 无法访问 my.telegram.org 怎么办？
              </summary>
              <div class="p-4 border-t">
                <p class="text-gray-700">请尝试以下解决方案：</p>
                <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600">
                  <li>检查网络连接，确保可以正常访问国外网站</li>
                  <li>尝试使用不同的浏览器</li>
                  <li>清除浏览器缓存和Cookie</li>
                  <li>如果仍有问题，请联系技术支持</li>
                </ul>
              </div>
            </details>
            
            <details class="border border-gray-200 rounded-lg" @toggle="trackFAQToggle('forgot_api')">
              <summary class="p-4 cursor-pointer font-medium bg-gray-50 hover:bg-gray-100 rounded-lg">
                🔄 API ID 和 API Hash 忘记了怎么办？
              </summary>
              <div class="p-4 border-t">
                <p class="text-gray-700">重新访问 <code class="bg-gray-100 px-2 py-1 rounded">https://my.telegram.org/apps</code>，登录后即可查看之前创建的应用信息。</p>
              </div>
            </details>
            
            <details class="border border-gray-200 rounded-lg" @toggle="trackFAQToggle('activation_code')">
              <summary class="p-4 cursor-pointer font-medium bg-gray-50 hover:bg-gray-100 rounded-lg">
                💰 如何获取软件激活码？
              </summary>
              <div class="p-4 border-t">
                <p class="text-gray-700">请通过以下方式联系管理员：</p>
                <button 
                  @click="handleContact"
                  class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  🔗 联系管理员获取激活码
                </button>
              </div>
            </details>
          </div>
        </div>

        <!-- 联系支持 -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            🆘 需要帮助？
          </h2>
          <p class="text-gray-700 mb-6">
            如果按照上述步骤仍然遇到问题，随时联系我们的技术支持团队
          </p>
          <el-button 
            size="large"
            type="primary"
            class="bg-gradient-to-r from-blue-500 to-purple-600 border-0 px-8 py-3"
            @click="handleContact"
          >
            📞 立即获取技术支持
          </el-button>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { contactConfig } from '@/config/contact.js'
import { trackContact, trackHelpAction, trackCopyLink } from '@/utils/analytics.js'

export default {
  name: 'Help',
  mounted() {
    // 追踪帮助页面访问
    trackHelpAction('page_view', 'help_main')
  },
  methods: {
    handleContact() {
      // 追踪帮助页面的联系事件
      trackContact('help_page')
      
      contactConfig.openTelegram()
      this.$message({
        message: contactConfig.getContactMessage(),
        type: 'success',
        duration: 2000
      })
    },
    copyToClipboard(text) {
      // 追踪链接复制事件
      trackCopyLink('api_url')
      trackHelpAction('copy_link', 'api_registration')
      
      navigator.clipboard.writeText(text).then(() => {
        this.$message({
          message: '🎉 链接已复制到剪贴板！',
          type: 'success',
          duration: 2000
        })
      }).catch(() => {
        this.$message({
          message: '复制失败，请手动复制',
          type: 'warning',
          duration: 2000
        })
      })
    },
    trackFAQToggle(faqType) {
      // 追踪FAQ展开/折叠事件
      trackHelpAction('faq_toggle', faqType)
    }
  }
}
</script>

<style scoped>
/* 代码块样式 */
code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* 详情标签样式 */
details summary::-webkit-details-marker {
  display: none;
}

details summary::before {
  content: '▶️';
  margin-right: 8px;
  transition: transform 0.2s;
}

details[open] summary::before {
  transform: rotate(90deg);
  content: '🔽';
}

/* 滚动动画 */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .font-mono {
    font-size: 12px;
  }
}
</style> 