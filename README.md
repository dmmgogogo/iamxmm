# iamxmm - Telegram工具专家

个人产品展示网站，专业的Telegram工具套件，提供消息转发、群组内容下载、定时发送等自动化解决方案。

## 🚀 项目概述

这是一个基于Vue 3的现代化产品展示网站，设计风格参考了ShipFast，采用了渐变色彩、卡片式布局和响应式设计，为Telegram相关工具产品提供专业的展示平台。

## 🛠 技术栈

- **前端框架**: Vue 3 (Composition API)
- **UI组件库**: Element Plus
- **样式框架**: Tailwind CSS
- **路由管理**: Vue Router 4
- **构建工具**: Vite
- **开发语言**: JavaScript (ES6+)

## 📦 产品展示

### 1. Telegram消息转发工具
- 🔄 多群组同步转发
- 🎯 智能过滤规则
- ⚡ 实时转发处理
- 🔒 安全加密传输
- 📊 管理面板监控

### 2. Telegram群组下载工具
- 📥 批量下载媒体文件
- 🗂 智能分类整理
- 🎯 多格式支持 (JPG/PNG/MP4/PDF/DOC等)
- 🚀 高速多线程下载
- 🔄 断点续传功能

### 3. Telegram定时发送工具
- ⏰ 精确到秒的定时控制
- 🔄 周期性任务设置
- 🎯 多群组支持
- 📝 富媒体消息发送
- 📊 发送状态监控

## 🎨 设计特色

- **现代化设计**: 采用渐变色彩和卡片式布局
- **响应式布局**: 完美适配桌面端和移动端
- **流畅动画**: 滚动动画和悬停效果
- **用户体验**: 直观的导航和清晰的信息层次
- **专业形象**: 符合技术产品的专业定位

## 🚀 快速开始

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
iamxmm/
├── public/                 # 公共资源
├── src/
│   ├── assets/            # 静态资源
│   │   ├── images/        # 图片资源
│   │   └── style.css      # 全局样式
│   ├── components/        # 公共组件
│   │   ├── NavBar.vue     # 导航栏
│   │   └── Footer.vue     # 页脚
│   ├── config/            # 配置文件
│   │   └── contact.js     # 联系方式配置
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── TelegramForward.vue    # 消息转发页
│   │   ├── TelegramDownload.vue   # 群组下载页
│   │   └── TelegramScheduler.vue  # 定时发送页
│   ├── router/            # 路由配置
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html             # HTML模板
├── package.json           # 项目配置
├── vite.config.js         # Vite配置
├── tailwind.config.js     # Tailwind配置
└── README.md              # 项目说明
```

## 🎯 页面功能

### 首页 (/)
- Hero区域：品牌展示和价值主张
- 产品展示：三个主要产品的卡片式展示
- 特性说明：安全可靠、高效快速、易于使用、专业支持
- CTA区域：引导用户联系

### 产品详情页
- `/telegram-forward` - 消息转发工具详情
- `/telegram-download` - 群组下载工具详情  
- `/telegram-scheduler` - 定时发送工具详情

每个产品页面包含：
- Hero区域：产品介绍
- 功能特性：详细功能说明
- 使用场景：实际应用案例
- CTA区域：联系转化

## 🎨 样式系统

### 颜色方案
- **主色调**: 蓝色到紫色渐变 (#667eea → #764ba2)
- **辅助色**: 绿色、橙色、红色渐变用于不同产品
- **中性色**: 灰色系用于文本和背景

### 组件样式
- **卡片**: 白色背景，圆角，阴影效果
- **按钮**: 渐变背景，悬停动效
- **动画**: 滚动触发的淡入动画

## 📱 响应式设计

- **桌面端**: 1200px+ 完整布局
- **平板端**: 768px-1199px 两列布局
- **移动端**: <768px 单列布局，汉堡菜单

## 🔧 自定义配置

### 联系方式配置
项目采用全局配置方式，所有组件共享配置文件 `src/config/contact.js`：

```javascript
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
```

如需修改联系方式，只需修改此配置文件即可，所有页面会自动更新。

### 样式定制
在 `src/assets/style.css` 中修改全局样式
在 `tailwind.config.js` 中修改Tailwind配置

## 🚀 部署建议

### 静态托管平台
- **Vercel**: 推荐，支持自动部署
- **Netlify**: 简单易用，免费额度充足
- **GitHub Pages**: 适合开源项目

### 部署步骤
1. 构建项目: `npm run build`
2. 上传 `dist` 目录到托管平台
3. 配置自定义域名（可选）

## 📝 待完成功能

1. **图片资源整合**: 将提供的宣传图片放入对应产品页面
2. **联系表单**: 添加具体的联系表单或联系方式
3. **SEO优化**: 添加meta标签和结构化数据
4. **性能优化**: 图片懒加载、代码分割等
5. **多语言支持**: 国际化配置

## 📄 许可证

本项目为个人产品展示网站，版权所有。

## 📞 联系方式

- **Telegram**: @thismanisok (https://t.me/thismanisok)
- **网站**: 点击任意页面的"联系我们"按钮直接跳转到Telegram

---

**使用说明**: 这是一个产品展示网站，所有功能描述仅用于展示目的。如需实际产品，请通过上述联系方式咨询。
