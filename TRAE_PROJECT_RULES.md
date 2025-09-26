# Trae AI 项目开发规则

## 🎯 项目概述
本项目是基于 Next.js 14 (App Router) + TypeScript 的 B2B IPL 家用脱毛仪网站，部署在 Netlify 平台。

## 📋 核心开发规则

### 1. 技术栈限制
- **框架**: Next.js 14 (App Router) + TypeScript
- **样式**: 仅使用 Tailwind CSS 和 shadcn/ui 组件
- **图标**: 仅使用 lucide-react
- **部署**: Netlify 平台
- **禁止**: 不得添加额外的UI库（除非明确要求）

### 2. Next.js 组件规则

#### 服务器组件（默认）
```typescript
// ✅ 正确的服务器组件
export default async function ServerComponent() {
  const data = await fetchData(); // 可以直接获取数据
  return <div>{data.title}</div>;
}
```

#### 客户端组件
```typescript
// ✅ 正确的客户端组件
'use client';

import { useState } from 'react';

export function ClientComponent() {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(state + 1)}>Count: {state}</button>;
}
```

**必须遵守的规则：**
- 使用 React hooks 时必须添加 `'use client'` 指令
- 服务器组件不能使用浏览器 API 或 React hooks
- 避免 hydration 错误：服务器和客户端渲染内容必须一致
- 环境变量：客户端组件使用 `NEXT_PUBLIC_` 前缀，服务器组件使用普通环境变量

### 3. 文件操作规则

#### 创建新文件前必须检查
```bash
# 必须先搜索现有文件
search_codebase("similar functionality")
# 优先扩展现有文件而非创建新文件
```

#### 文件命名规范
- 组件文件：`PascalCase.tsx` (如 `ProductCard.tsx`)
- 页面文件：`page.tsx` (App Router)
- 工具函数：`camelCase.ts` (如 `utils.ts`)
- 配置文件：保持原有命名 (如 `next.config.js`)

### 4. Netlify 部署兼容性

#### 必须的配置文件
- `next.config.js`: 包含 Netlify 优化配置
- `netlify.toml`: 部署和重定向规则
- `.env.example`: 环境变量示例

#### 禁止的操作
```typescript
// ❌ 禁止：会导致 hydration 错误
const isClient = typeof window !== 'undefined';
return <div>{isClient ? 'Client' : 'Server'}</div>;

// ❌ 禁止：随机值导致不一致
const randomId = Math.random();
return <div id={randomId}>Content</div>;

// ❌ 禁止：直接使用 Date.now() 在服务器组件
const timestamp = Date.now();
```

#### 推荐的模式
```typescript
// ✅ 推荐：使用 useState 初始化随机值
'use client';
const [randomId] = useState(() => Math.random());

// ✅ 推荐：条件渲染处理
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div>Loading...</div>;
```

### 5. 性能优化规则

#### 组件优化
```typescript
// ✅ 使用动态导入
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // 根据需要设置
});

// ✅ 使用 memo 和 useMemo
const OptimizedComponent = memo(function Component({ data }) {
  const processedData = useMemo(() => processData(data), [data]);
  return <div>{processedData}</div>;
});
```

#### 图片优化
```typescript
// ✅ 使用 Next.js Image 组件
import Image from 'next/image';

<Image
  src="/images/product.jpg"
  alt="IPL 脱毛仪"
  width={500}
  height={300}
  priority // 关键图片使用
/>
```

### 6. 错误处理规则

#### 必须的错误边界
```typescript
'use client';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <div>出现错误，请刷新页面</div>;
    }
    return this.props.children;
  }
}
```

#### API 错误处理
```typescript
// ✅ 完整的错误处理
try {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Failed to fetch products:', error);
  throw error;
}
```

### 7. SEO 和元数据规则

#### 页面元数据
```typescript
// app/layout.tsx 或页面文件
export const metadata = {
  title: 'IPL 家用脱毛仪 - 专业美容设备',
  description: '高效安全的IPL脱毛技术，适合家庭使用',
  keywords: 'IPL, 脱毛仪, 家用美容, 激光脱毛',
  openGraph: {
    title: 'IPL 家用脱毛仪',
    description: '专业级家用脱毛解决方案',
    images: ['/images/og-image.jpg'],
  },
};
```

### 8. 代码质量规则

#### TypeScript 类型定义
```typescript
// ✅ 明确的接口定义
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}

// ✅ 组件 Props 类型
interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // 组件实现
}
```

#### 注释规范
```typescript
/**
 * 计算IPL脱毛仪的推荐使用频率
 * @param skinType - 肌肤类型 (1-6)
 * @param hairColor - 毛发颜色
 * @returns 推荐的使用间隔天数
 */
function calculateUsageFrequency(skinType: number, hairColor: string): number {
  // 根据肌肤类型和毛发颜色计算
  return skinType <= 3 ? 7 : 14;
}
```

### 9. 部署前检查清单

#### 自动检查脚本
运行 `npm run pre-deploy-check` 确保：
- [ ] 没有 hydration 错误
- [ ] 所有环境变量已配置
- [ ] 图片优化正确
- [ ] API 路由正常工作
- [ ] 构建成功无警告
- [ ] TypeScript 类型检查通过

#### 手动检查项目
- [ ] 所有客户端组件都有 `'use client'` 指令
- [ ] 服务器组件没有使用浏览器 API
- [ ] 环境变量使用正确
- [ ] 图片路径和 alt 文本完整
- [ ] 响应式设计在移动端正常
- [ ] SEO 元数据完整

### 10. 调试和故障排除

#### 常见问题解决
```typescript
// Hydration 错误调试
if (process.env.NODE_ENV === 'development') {
  console.log('Rendering on:', typeof window === 'undefined' ? 'server' : 'client');
}

// 环境变量调试
console.log('Environment:', {
  NODE_ENV: process.env.NODE_ENV,
  NETLIFY_CONTEXT: process.env.CONTEXT,
});
```

## 🚨 严格禁止的操作

1. **不得添加额外的 UI 库**（除 Tailwind CSS 和 shadcn/ui）
2. **不得在服务器组件中使用 React hooks**
3. **不得忽略 TypeScript 类型错误**
4. **不得提交包含敏感信息的代码**
5. **不得创建会导致 hydration 错误的代码**
6. **不得跳过部署前检查**

## 📚 参考文档

- [COMPONENT_BEST_PRACTICES.md](./COMPONENT_BEST_PRACTICES.md) - 组件开发最佳实践
- [NETLIFY_DEPLOYMENT_GUIDE.md](./NETLIFY_DEPLOYMENT_GUIDE.md) - Netlify 部署指南
- [Next.js 官方文档](https://nextjs.org/docs)
- [Netlify Next.js 部署指南](https://docs.netlify.com/frameworks/next-js/)

---

**遵循这些规则可以确保项目在 Netlify 上稳定部署和运行，同时保持代码质量和性能优化。**