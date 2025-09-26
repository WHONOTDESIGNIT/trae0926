# Next.js + Netlify 部署指南

## 🚀 快速部署

### 1. 准备工作
```bash
# 安装依赖
npm install

# 本地测试
npm run build
npm run start
```

### 2. Netlify部署
1. 连接GitHub仓库到Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`.next`
4. 确保使用Next.js Runtime v5

## ⚠️ 常见错误及解决方案

### 1. Hydration 错误
**错误信息：** `Warning: Extra attributes from the server: class, style`

**解决方案：**
- 确保服务器组件和客户端组件正确分离
- 在需要客户端功能的组件顶部添加 `'use client'`
- 避免在服务器组件中使用浏览器API

```jsx
// ✅ 正确：客户端组件
'use client';
import { useState } from 'react';

export function MyComponent() {
  const [state, setState] = useState();
  // ...
}

// ✅ 正确：服务器组件
export function ServerComponent() {
  // 可以直接访问数据库、文件系统等
  return <div>Server rendered content</div>;
}
```

### 2. 环境变量问题
**错误信息：** `process.env.VARIABLE_NAME is undefined`

**解决方案：**
- 在Netlify控制台设置环境变量
- 客户端变量必须以 `NEXT_PUBLIC_` 开头
- 本地开发使用 `.env.local` 文件

### 3. 图片优化问题
**错误信息：** `Image optimization error`

**解决方案：**
- Netlify自动处理图片优化
- 确保 `next.config.js` 中 `images.unoptimized` 设为 `false`
- 使用相对路径引用图片

### 4. API路由问题
**错误信息：** `API route not found`

**解决方案：**
- API路由自动转换为Netlify Functions
- 确保路由文件命名正确：`app/api/[route]/route.js`
- 检查 `netlify.toml` 中的重定向配置

### 5. 构建失败
**错误信息：** `Build failed`

**解决方案：**
- 检查Node.js版本（推荐18+）
- 确保所有依赖都在 `package.json` 中
- 检查TypeScript类型错误
- 查看构建日志获取详细错误信息

## 🔧 性能优化

### 1. 代码分割
```jsx
// 动态导入
const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => <p>Loading...</p>,
});
```

### 2. 图片优化
```jsx
// 使用Next.js Image组件
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // 对于首屏图片
/>
```

### 3. 缓存策略
- 静态资源：长期缓存
- API响应：适当缓存
- 页面：ISR（增量静态再生）

## 📋 部署前检查清单

- [ ] 所有组件正确标记为客户端或服务器组件
- [ ] 环境变量在Netlify控制台中设置
- [ ] 图片路径使用相对路径
- [ ] API路由测试正常
- [ ] 构建过程无错误
- [ ] TypeScript类型检查通过
- [ ] ESLint检查通过
- [ ] 性能测试通过
- [ ] SEO元数据设置完整
- [ ] 安全头部配置正确

## 🛠️ 调试技巧

### 1. 本地调试
```bash
# 使用Netlify CLI进行本地开发
npm install -g netlify-cli
netlify dev
```

### 2. 生产环境调试
- 查看Netlify部署日志
- 使用浏览器开发者工具
- 检查Network面板中的请求
- 查看Console中的错误信息

### 3. 性能监控
- 使用Lighthouse进行性能测试
- 监控Core Web Vitals
- 使用Netlify Analytics

## 📚 相关资源

- [Next.js官方文档](https://nextjs.org/docs)
- [Netlify Next.js部署指南](https://docs.netlify.com/frameworks/next-js/)
- [Netlify Functions文档](https://docs.netlify.com/functions/)
- [Next.js性能优化](https://nextjs.org/docs/advanced-features/measuring-performance)

## 🆘 获取帮助

如果遇到问题：
1. 查看本指南的常见错误部分
2. 检查Netlify部署日志
3. 搜索Next.js和Netlify官方文档
4. 在相关社区寻求帮助