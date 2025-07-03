// 全局联系方式配置
export const contactConfig = {
  telegram: {
    username: 'thismanisok',
    url: 'https://t.me/thismanisok',
    displayName: '@thismanisok'
  },
  
  // 联系方法
  openTelegram() {
    window.open(this.telegram.url, '_blank')
  },
  
  // 获取联系提示消息
  getContactMessage() {
    return `点击即可跳转到 Telegram 联系我们：${this.telegram.displayName}`
  }
} 