// 统计工具模块
import { analyticsConfig, shouldEnableAnalytics, getPageTitle } from '@/config/analytics.js'

/**
 * 发送自定义事件到Google Analytics
 * @param {string} eventType - 事件类型（在analyticsConfig.events中定义）
 * @param {object} customParams - 自定义参数
 */
export function trackEvent(eventType, customParams = {}) {
  if (!shouldEnableAnalytics()) {
    console.log('📊 统计已禁用，跳过事件:', eventType, customParams)
    return
  }

  const eventConfig = analyticsConfig.events[eventType]
  if (!eventConfig) {
    console.warn('📊 未找到事件配置:', eventType)
    return
  }

  // 使用vue-gtag-next的全局方法
  if (window.gtag) {
    window.gtag('event', eventConfig.event_name, {
      event_category: eventConfig.event_category,
      event_label: eventConfig.event_label,
      ...customParams
    })
    
    console.log('📊 事件已发送:', eventType, {
      ...eventConfig,
      ...customParams
    })
  } else {
    console.log('📊 gtag未加载，跳过事件:', eventType)
  }
}

/**
 * 追踪页面访问
 * @param {string} path - 页面路径
 * @param {string} title - 页面标题
 */
export function trackPageView(path, title = null) {
  if (!shouldEnableAnalytics()) {
    return
  }

  const pageTitle = title || getPageTitle(path)
  
  if (window.gtag) {
    window.gtag('config', analyticsConfig.measurementId, {
      page_path: path,
      page_title: pageTitle
    })
    
    console.log('📊 页面访问已记录:', path, pageTitle)
  } else {
    console.log('📊 gtag未加载，跳过页面访问记录')
  }
}

/**
 * 追踪联系事件
 * @param {string} source - 触发源（如 'navbar', 'hero', 'footer'）
 */
export function trackContact(source = 'unknown') {
  trackEvent('contact', {
    contact_source: source,
    value: 1
  })
}

/**
 * 追踪产品页面访问
 * @param {string} productName - 产品名称
 */
export function trackProductView(productName) {
  trackEvent('product_view', {
    product_name: productName,
    value: 1
  })
}

/**
 * 追踪帮助文档操作
 * @param {string} action - 操作类型（如 'copy_link', 'expand_faq', 'contact'）
 * @param {string} section - 所在章节
 */
export function trackHelpAction(action, section = null) {
  trackEvent('help_action', {
    help_action: action,
    help_section: section,
    value: 1
  })
}

/**
 * 追踪链接复制事件
 * @param {string} linkType - 链接类型（如 'api_url', 'telegram'）
 */
export function trackCopyLink(linkType) {
  trackEvent('copy_link', {
    link_type: linkType,
    value: 1
  })
}

/**
 * 追踪用户参与度
 * @param {string} action - 参与行为
 * @param {number} value - 参与价值
 */
export function trackEngagement(action, value = 1) {
  if (!shouldEnableAnalytics()) {
    return
  }

  if (window.gtag) {
    window.gtag('event', 'engagement', {
      engagement_action: action,
      value: value
    })
  } else {
    console.log('📊 gtag未加载，跳过参与度统计')
  }
}

/**
 * 设置用户属性
 * @param {object} properties - 用户属性
 */
export function setUserProperties(properties) {
  if (!shouldEnableAnalytics()) {
    return
  }

  if (window.gtag) {
    window.gtag('config', analyticsConfig.measurementId, {
      user_properties: properties
    })
  } else {
    console.log('📊 gtag未加载，跳过用户属性设置')
  }
}

// 导出常用的快捷方法
export const analytics = {
  trackEvent,
  trackPageView,
  trackContact,
  trackProductView,
  trackHelpAction,
  trackCopyLink,
  trackEngagement,
  setUserProperties
}

// 默认导出
export default analytics 