# iShine项目图片使用指南

## 📸 推荐的图片格式

### 1. **产品照片** - 使用 JPG
- **格式**: `.jpg` 或 `.jpeg`
- **质量**: 85-90%
- **尺寸**: 最大宽度 1920px
- **用途**: 产品展示、案例图片、公司照片

**示例文件名**:
```
/public/images/products/
  ipl-classic-main.jpg
  ipl-pro-detail.jpg
  ipl-mini-portable.jpg
```

### 2. **图标和简单图形** - 使用 SVG
- **格式**: `.svg`
- **优点**: 矢量、小文件、可缩放
- **用途**: Logo、图标、简单插图

**示例文件名**:
```
/public/images/icons/
  feature-safety.svg
  certification-ce.svg
  process-step.svg
```

### 3. **避免使用的格式**
- ❌ **PNG**: 文件过大，不适合照片
- ❌ **WebP**: 直接存储，让Netlify自动转换
- ❌ **GIF**: 除非需要动画

## 🚀 Netlify自动优化

存储JPG后，Netlify会自动：
- 转换为WebP/AVIF（支持的浏览器）
- 生成多种尺寸
- 压缩优化
- CDN分发

## 📁 推荐的目录结构

```
public/images/
├── products/           # 产品图片 (JPG)
│   ├── ipl-classic.jpg
│   ├── ipl-pro.jpg
│   └── ipl-mini.jpg
├── company/           # 公司图片 (JPG)
│   ├── factory.jpg
│   ├── team.jpg
│   └── office.jpg
├── cases/             # 案例图片 (JPG)
│   ├── case-europe.jpg
│   ├── case-usa.jpg
│   └── case-asia.jpg
└── icons/             # 图标 (SVG)
    ├── feature-1.svg
    ├── feature-2.svg
    └── certification.svg
```

## 💡 最佳实践

1. **文件命名**: 使用描述性英文名称，用连字符分隔
2. **文件大小**: JPG控制在500KB以内
3. **尺寸**: 最大1920px宽度，保持合适比例
4. **质量**: JPG使用85%质量设置
5. **版本控制**: 所有图片提交到Git，Netlify自动同步