# 📊 Google Analytics 统计设置指南

本项目已集成Google Analytics 4 (GA4)流量统计功能，使用vue-gtag-next插件（专为Vue 3设计），按照以下步骤即可启用网站访问统计。

## 🔧 快速设置

### 步骤1：创建Google Analytics账号

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 使用Google账号登录
3. 点击"开始测量"创建新的Analytics账号

### 步骤2：设置媒体资源

1. **账号名称**: 填写你的网站名称，如 "iamxmm网站"
2. **媒体资源名称**: 填写 "iamxmm网站"
3. **报告时区**: 选择 "中国"
4. **币种**: 选择 "人民币 (CNY)"

### 步骤3：创建数据流

1. 选择"网站"平台
2. **网站网址**: 填写你的网站域名
   - 开发环境: `http://localhost:5174`
   - 生产环境: `https://yourdomain.com`
3. **流名称**: 填写 "网站流量"

### 步骤4：获取测量ID

创建数据流后，你会看到类似 `G-XXXXXXXXXX` 的测量ID，复制这个ID。

### 步骤5：配置项目

编辑 `src/config/analytics.js` 文件：

```javascript
export const analyticsConfig = {
  // 🔥 替换为你的测量ID
  measurementId: 'G-YOUR-MEASUREMENT-ID', // 替换这里
  
  // 开发环境是否启用统计（建议设为false避免测试数据）
  enableInDev: false,
  
  // 其他配置保持不变...
}
```

### 步骤6：验证设置

1. 启动开发服务器：`npm run dev`
2. 访问网站，检查浏览器控制台是否显示：
   ```
   📊 Google Analytics已启用 - 测量ID: G-YOUR-MEASUREMENT-ID
   ```
3. 在Google Analytics中查看"实时"报告，应该能看到访问数据

## 📈 统计功能说明

### 自动追踪的数据

- ✅ **页面访问量**: 所有页面的访问情况
- ✅ **用户会话**: 用户停留时间、跳出率等
- ✅ **流量来源**: 用户从哪里访问网站
- ✅ **设备信息**: 桌面/移动端访问比例
- ✅ **地理位置**: 访问用户的地理分布

### 自定义事件追踪

- 📞 **联系按钮点击**: 追踪用户联系行为
- 🎯 **产品页面访问**: 各产品页面的访问量
- 📚 **帮助文档使用**: FAQ展开、链接复制等
- 🎠 **轮播图交互**: 图片切换行为
- 📱 **用户参与度**: 滚动、停留等行为

### 查看统计数据

1. 登录 [Google Analytics](https://analytics.google.com/)
2. 选择你的媒体资源
3. 查看以下报告：
   - **实时**: 当前在线用户
   - **受众群体**: 用户特征分析
   - **流量获取**: 流量来源分析
   - **互动度**: 页面访问和事件
   - **转化**: 目标完成情况

## 🎯 进阶配置

### 设置转化目标

在Google Analytics中设置转化事件：
1. 进入"管理" → "转化"
2. 点击"新建转化事件"
3. 添加以下事件名称：
   - `contact_click`: 联系按钮点击
   - `product_view`: 产品页面访问
   - `help_action`: 帮助文档使用

### 自定义维度

可以添加自定义维度来获取更详细的数据：
1. 进入"管理" → "自定义定义" → "自定义维度"
2. 创建新维度：
   - 维度名称: "用户类型"
   - 范围: "事件"
   - 参数: "user_type"

## 🛡️ 隐私和合规

### GDPR合规

如果你的网站有欧盟用户，需要：
1. 添加Cookie同意横幅
2. 在隐私政策中说明数据收集
3. 提供用户数据删除选项

### 配置数据保留

1. 进入Google Analytics "管理" → "数据设置" → "数据保留"
2. 建议设置为14个月
3. 启用"重置到期日期"

## 🔧 故障排除

### 常见问题

**Q: 控制台显示"Google Analytics未启用"**
A: 检查测量ID是否正确配置，确保不是默认的 `G-XXXXXXXXXX`

**Q: 看不到实时数据**
A: 
- 确认测量ID正确
- 检查网络连接
- 清除浏览器缓存
- 等待5-10分钟（数据可能有延迟）

**Q: 开发环境想要启用统计**
A: 在 `analytics.js` 中设置 `enableInDev: true`

### 调试模式

启用调试模式查看详细日志：
```javascript
// 在浏览器控制台执行
localStorage.setItem('gtag-debug', 'true')
```

## 📚 相关资源

- [Google Analytics帮助中心](https://support.google.com/analytics/)
- [GA4事件参考](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Vue-gtag-next文档](https://github.com/MatteoGabriele/vue-gtag-next)

---

**提示**: 生产环境部署后，建议等待24-48小时再查看完整的统计报告，因为Google Analytics需要时间来收集和处理数据。 