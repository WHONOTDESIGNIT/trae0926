# Next.js 组件最佳实践指南

## 🎯 服务器组件 vs 客户端组件

### 服务器组件（默认）
**特点：**
- 在服务器端渲染
- 可以直接访问数据库、文件系统
- 不能使用浏览器API或React hooks
- 更好的性能和SEO

**使用场景：**
```jsx
// ✅ 服务器组件示例
export default function ServerComponent() {
  // 可以直接进行数据获取
  const data = await fetchData();
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
```

### 客户端组件
**特点：**
- 在客户端渲染
- 可以使用React hooks和浏览器API
- 需要明确标记 `'use client'`
- 交互性更强

**使用场景：**
```jsx
// ✅ 客户端组件示例
'use client';

import { useState, useEffect } from 'react';

export function ClientComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // 可以使用浏览器API
    document.title = `Count: ${count}`;
  }, [count]);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## ⚠️ 常见Hydration错误

### 1. 服务器和客户端内容不匹配

**❌ 错误示例：**
```jsx
// 这会导致hydration错误
export function BadComponent() {
  const isClient = typeof window !== 'undefined';
  
  return (
    <div>
      {isClient ? 'Client' : 'Server'}
    </div>
  );
}
```

**✅ 正确做法：**
```jsx
'use client';

import { useState, useEffect } from 'react';

export function GoodComponent() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <div>Loading...</div>;
  }
  
  return <div>Client content</div>;
}
```

### 2. 环境变量使用错误

**❌ 错误示例：**
```jsx
// 在服务器组件中使用客户端环境变量
export function BadEnvComponent() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // 可能导致不一致
  
  return <div>API: {apiUrl}</div>;
}
```

**✅ 正确做法：**
```jsx
// 方案1：在服务器组件中使用服务器环境变量
export function ServerEnvComponent() {
  const apiUrl = process.env.API_URL; // 服务器端变量
  
  return <div>API: {apiUrl}</div>;
}

// 方案2：在客户端组件中使用公共环境变量
'use client';

export function ClientEnvComponent() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // 客户端变量
  
  return <div>API: {apiUrl}</div>;
}
```

### 3. 随机值或时间戳

**❌ 错误示例：**
```jsx
// 每次渲染都会产生不同的值
export function BadRandomComponent() {
  const randomId = Math.random();
  
  return <div id={randomId}>Random content</div>;
}
```

**✅ 正确做法：**
```jsx
'use client';

import { useState } from 'react';

export function GoodRandomComponent() {
  const [randomId] = useState(() => Math.random());
  
  return <div id={randomId}>Random content</div>;
}
```

## 🔧 组件架构模式

### 1. 容器组件模式
```jsx
// 服务器组件作为容器
export default async function PageContainer() {
  const data = await fetchData();
  
  return (
    <div>
      <ServerHeader title={data.title} />
      <InteractiveContent data={data} />
    </div>
  );
}

// 客户端组件处理交互
'use client';

function InteractiveContent({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <div>
      {data.items.map(item => (
        <button 
          key={item.id}
          onClick={() => setSelectedItem(item)}
        >
          {item.name}
        </button>
      ))}
      {selectedItem && <ItemDetails item={selectedItem} />}
    </div>
  );
}
```

### 2. 数据获取模式
```jsx
// 服务器组件中获取数据
export default async function DataPage() {
  // 并行获取多个数据源
  const [posts, users] = await Promise.all([
    fetchPosts(),
    fetchUsers()
  ]);
  
  return (
    <div>
      <PostList posts={posts} />
      <UserList users={users} />
    </div>
  );
}

// 客户端组件中的数据获取
'use client';

import { useState, useEffect } from 'react';

function ClientDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;
  
  return <div>{/* 渲染数据 */}</div>;
}
```

## 📋 组件检查清单

### 服务器组件检查
- [ ] 没有使用React hooks
- [ ] 没有使用浏览器API
- [ ] 没有事件处理器
- [ ] 数据获取使用async/await
- [ ] 环境变量不以NEXT_PUBLIC_开头

### 客户端组件检查
- [ ] 文件顶部有'use client'指令
- [ ] 正确处理hydration
- [ ] 使用NEXT_PUBLIC_环境变量
- [ ] 错误边界处理
- [ ] 加载状态处理

### 通用检查
- [ ] 组件命名清晰
- [ ] Props类型定义
- [ ] 错误处理完善
- [ ] 性能优化（memo, useMemo等）
- [ ] 可访问性支持

## 🚀 性能优化技巧

### 1. 组件懒加载
```jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // 如果不需要服务器端渲染
});
```

### 2. 条件渲染优化
```jsx
// ✅ 使用条件渲染避免不必要的组件创建
function OptimizedComponent({ showDetails, data }) {
  return (
    <div>
      <Summary data={data} />
      {showDetails && <Details data={data} />}
    </div>
  );
}
```

### 3. 记忆化优化
```jsx
'use client';

import { memo, useMemo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ items }) {
  const processedItems = useMemo(() => {
    return items.map(item => ({
      ...item,
      processed: expensiveCalculation(item)
    }));
  }, [items]);
  
  return (
    <div>
      {processedItems.map(item => (
        <div key={item.id}>{item.processed}</div>
      ))}
    </div>
  );
});
```

## 🛠️ 调试技巧

### 1. Hydration错误调试
```jsx
// 添加调试信息
export function DebugComponent() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Component rendering on:', typeof window === 'undefined' ? 'server' : 'client');
  }
  
  return <div>Debug content</div>;
}
```

### 2. 使用React DevTools
- 安装React Developer Tools浏览器扩展
- 检查组件树和props
- 分析性能问题

### 3. 错误边界
```jsx
'use client';

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    return this.props.children;
  }
}
```

遵循这些最佳实践可以帮助你避免大多数Next.js组件相关的问题，确保应用在Netlify上稳定运行。