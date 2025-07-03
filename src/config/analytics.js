// Google Analytics 配置
export const analyticsConfig = {
  // 🔥 重要：请替换为你的Google Analytics测量ID
  // 获取方式：https://analytics.google.com/ -> 管理 -> 数据流 -> 网站 -> 测量ID
  measurementId: 'G-TFHDV0KDK2', // 请替换为你的实际测量ID
  
  // 是否在开发环境中启用统计（建议关闭以避免测试数据）
  enableInDev: true,
  
  // 页面标题映射（用于更友好的页面名称显示）
  pageNames: {
    '/': '首页',
    '/telegram-forward': 'Telegram消息转发',
    '/telegram-download': 'Telegram群组下载', 
    '/telegram-scheduler': 'Telegram定时发送',
    '/help': '使用帮助'
  },
  
  // 自定义事件配置
  events: {
    // 联系事件
    contact: {
      event_name: 'contact_click',
      event_category: 'engagement',
      event_label: 'contact_button'
    },
    // 产品页面访问
    product_view: {
      event_name: 'product_view',
      event_category: 'product',
      event_label: 'product_detail'
    },
    // 帮助文档操作
    help_action: {
      event_name: 'help_action', 
      event_category: 'help',
      event_label: 'user_guidance'
    },
    // 链接复制
    copy_link: {
      event_name: 'copy_link',
      event_category: 'interaction',
      event_label: 'copy_action'
    }
  }
}

// 检查是否应该启用Analytics
export function shouldEnableAnalytics() {
  // 检查测量ID是否已配置
  const hasValidId = analyticsConfig.measurementId && analyticsConfig.measurementId !== 'G-XXXXXXXXXX'
  
  if (!hasValidId) {
    console.log('📊 Google Analytics测量ID未配置，统计功能已禁用')
    return false
  }
  
  // 生产环境总是启用（如果有配置）
  if (process.env.NODE_ENV === 'production') {
    return true
  }
  
  // 开发环境根据配置决定
  if (analyticsConfig.enableInDev) {
    console.log('📊 开发环境已启用Google Analytics')
    return true
  } else {
    console.log('📊 开发环境已禁用Google Analytics（避免测试数据）')
    return false
  }
}

// 获取页面标题
export function getPageTitle(path) {
  return analyticsConfig.pageNames[path] || path
} 