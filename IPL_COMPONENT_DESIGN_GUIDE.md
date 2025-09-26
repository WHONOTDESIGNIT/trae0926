# IPL企业网站组件设计指南

## Hero区块设计规范

### 布局结构
```
[背景图片/视频] + [渐变遮罩]
├── 主标题区域
├── 副标题与卖点
├── CTA按钮组
└── 信任指标
```

### 视觉设计

#### 背景设计
- **主背景**: 现代化工厂生产线或IPL设备特写
- **遮罩**: 深蓝到透明的渐变遮罩 (rgba(15, 23, 42, 0.8) to transparent)
- **尺寸**: 桌面端 100vh，移动端 80vh

#### 文字层级
```typescript
// 主标题样式
const heroTitle = {
  fontSize: {
    desktop: '3.5rem', // text-6xl
    mobile: '2.25rem'   // text-4xl
  },
  fontWeight: 'bold',
  color: 'white',
  lineHeight: '1.1'
}

// 副标题样式
const heroSubtitle = {
  fontSize: {
    desktop: '1.25rem', // text-xl
    mobile: '1.125rem'  // text-lg
  },
  color: 'rgba(255, 255, 255, 0.9)',
  marginTop: '1rem'
}
```

#### 核心卖点展示
**4个关键指标**（图标 + 文字）:
```
✓ ISO13485认证    ✓ 15年技术积累
✓ 年产50万台     ✓ 全球服务网络
```

#### CTA按钮设计
```typescript
// 主按钮（获取定制方案）
const primaryCTA = {
  background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
  padding: '12px 32px',
  borderRadius: '8px',
  fontSize: '1.125rem',
  fontWeight: '600'
}

// 次按钮（产品目录）
const secondaryCTA = {
  border: '2px solid white',
  background: 'transparent',
  color: 'white',
  padding: '12px 32px'
}
```

## 产品展示组件

### 产品卡片设计

#### 卡片结构
```
┌─────────────────────┐
│   [产品图片]         │
├─────────────────────┤
│ 产品名称             │
│ 型号/规格           │
│ [技术标签]          │
│ 核心参数            │
│ [了解详情] 按钮      │
└─────────────────────┘
```

#### 样式规范
```typescript
const productCard = {
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  hover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  }
}
```

#### 技术标签设计
```typescript
const techTags = {
  IPL: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  '家用': { bg: '#F0FDF4', text: '#166534', border: '#BBF7D0' },
  '专业': { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  '便携': { bg: '#F3E8FF', text: '#7C3AED', border: '#DDD6FE' }
}
```

### 产品参数展示
```typescript
interface ProductSpecs {
  wavelength: string;     // 波长范围
  energyDensity: string;  // 能量密度
  flashCount: string;     // 闪光次数
  treatmentArea: string;  // 治疗面积
  safetyLevel: string;    // 安全等级
}
```

## 认证资质组件

### 认证徽标设计
```
┌─────────────────────────────────────┐
│ [ISO13485] [CE] [FDA] [FCC] [RoHS] │
│                                     │
│ "通过国际权威认证，品质值得信赖"      │
└─────────────────────────────────────┘
```

#### 徽标样式
```typescript
const certificationBadge = {
  width: '80px',
  height: '80px',
  background: 'white',
  borderRadius: '50%',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
```

## 案例展示组件

### 案例卡片结构
```
┌─────────────────────┐
│   [案例图片]         │
│   [客户Logo]        │
├─────────────────────┤
│ 项目标题             │
│ [OEM/ODM] 标签      │
│ 项目描述 (2行)       │
│ 技术亮点             │
│ [查看详情] 链接      │
└─────────────────────┘
```

### 案例分类标签
```typescript
const caseTypeTags = {
  OEM: { bg: '#DBEAFE', text: '#1E40AF' },
  ODM: { bg: '#DCFCE7', text: '#166534' },
  '代工': { bg: '#FEF3C7', text: '#92400E' }
}
```

## 服务流程组件

### 流程步骤设计
```
[1] 需求沟通 → [2] 方案设计 → [3] 样品确认 → [4] 批量生产 → [5] 交付服务
```

#### 步骤卡片样式
```typescript
const processStep = {
  width: '200px',
  textAlign: 'center',
  position: 'relative',
  
  // 步骤编号
  number: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  
  // 连接线
  connector: {
    position: 'absolute',
    top: '24px',
    right: '-50px',
    width: '100px',
    height: '2px',
    background: '#E5E7EB'
  }
}
```

## 表单组件设计

### 询盘表单结构
```typescript
interface InquiryForm {
  // 基本信息
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  
  // 项目需求
  projectType: 'OEM' | 'ODM' | '代工' | '其他';
  productCategory: string;
  estimatedQuantity: string;
  targetPrice: string;
  timeline: string;
  
  // 技术要求
  technicalRequirements: string;
  certificationNeeds: string[];
  customizationDetails: string;
  
  // 附件
  attachments?: File[];
}
```

### 表单样式规范
```typescript
const formStyles = {
  container: {
    maxWidth: '600px',
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
  },
  
  input: {
    border: '1px solid #D1D5DB',
    borderRadius: '6px',
    padding: '12px 16px',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
    focus: {
      borderColor: '#3B82F6',
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    }
  },
  
  submitButton: {
    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '6px',
    fontSize: '1.125rem',
    fontWeight: '600',
    width: '100%'
  }
}
```

## 响应式设计规范

### 断点设置
```typescript
const breakpoints = {
  sm: '640px',   // 手机横屏
  md: '768px',   // 平板
  lg: '1024px',  // 小型桌面
  xl: '1280px',  // 大型桌面
  '2xl': '1536px' // 超大屏幕
}
```

### 移动端适配
- Hero区块: 单列布局，CTA按钮堆叠
- 产品卡片: 单列滑动，卡片宽度100%
- 导航: 汉堡菜单，侧边栏展开
- 表单: 单列布局，字段间距调整

## 动画效果规范

### 页面加载动画
```typescript
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  scaleOnHover: {
    whileHover: { scale: 1.05 },
    transition: { type: 'spring', stiffness: 300 }
  }
}
```

### 滚动触发动画
- 使用 Intersection Observer API
- 元素进入视口时触发动画
- 支持延迟和错开效果

## 图标使用规范

### Lucide React 图标选择
```typescript
import {
  Factory,        // 生产制造
  Zap,           // IPL技术
  Shield,        // 安全认证
  Users,         // 客户服务
  Award,         // 品质保证
  Globe,         // 全球服务
  Mail,          // 联系方式
  Phone,         // 电话
  MapPin,        // 地址
  Download,      // 下载
  ExternalLink,  // 外部链接
  ChevronRight,  // 箭头
  Menu,          // 菜单
  X              // 关闭
} from 'lucide-react'
```

### 图标样式
```typescript
const iconStyles = {
  size: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48
  },
  color: {
    primary: '#3B82F6',
    secondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444'
  }
}
```

---

**设计原则**:
1. **专业性**: 体现B2B制造业的专业形象
2. **信任感**: 通过认证、案例建立信任
3. **易用性**: 清晰的信息架构和导航
4. **转化导向**: 每个组件都有明确的转化目标
5. **品质感**: 高品质的视觉设计和交互体验