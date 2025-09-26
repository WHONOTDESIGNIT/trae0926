# Next.js Netlify Starter - B2B IPL 家用脱毛仪网站

这是一个专为 Netlify 部署优化的 [Next.js](https://nextjs.org) 项目，专注于 B2B IPL 家用脱毛仪网站开发。

## 🎯 项目特性

- Next.js 14 with App Router + TypeScript
- [Netlify Core Primitives](https://docs.netlify.com/core/overview/#develop) (Edge Functions, Image CDN, Blob Store)
- [Netlify SDK](https://sdk.netlify.com)
- 样式框架：[Tailwind CSS](https://tailwindcss.com/) + shadcn/ui
- 图标库：lucide-react
- 代码规范：[ESLint](https://eslint.org/) 和 [Prettier](https://prettier.io/)
- 完整的 Netlify 部署优化配置

## 📋 Trae AI 开发规则

本项目包含专门为 Trae AI 设计的开发规则和配置：

- **[TRAE_PROJECT_RULES.md](./TRAE_PROJECT_RULES.md)** - 完整的项目开发规则和约束
- **[.trae-config.json](./.trae-config.json)** - Trae AI 项目配置文件
- **[COMPONENT_BEST_PRACTICES.md](./COMPONENT_BEST_PRACTICES.md)** - Next.js 组件最佳实践
- **[NETLIFY_DEPLOYMENT_GUIDE.md](./NETLIFY_DEPLOYMENT_GUIDE.md)** - Netlify 部署指南

### 核心开发约束

1. **技术栈限制**：仅使用 Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui + lucide-react
2. **组件规则**：严格区分服务器组件和客户端组件，避免 hydration 错误
3. **Netlify 兼容性**：确保所有代码都能在 Netlify 上正确部署和运行
4. **性能优化**：使用动态导入、图片优化和适当的记忆化
5. **代码质量**：完整的 TypeScript 类型定义和错误处理

## Deploying to Netlify

This site requires [Netlify Next Runtime v5](https://docs.netlify.com/frameworks/next-js/overview/) for full functionality. That version is now being gradually rolled out to all Netlify accounts.

After deploying via the button below, please visit the **Site Overview** page for your new site to check whether it is already using the v5 runtime. If not, you'll be prompted to opt-in to to v5.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter)

## Developing Locally

1. Clone this repository, then run `npm install` in its root directory.

2. For the starter to have full functionality locally (e.g. edge functions, blob store), please ensure you have an up-to-date version of Netlify CLI. Run:

```
npm install netlify-cli@latest -g
```

3. Link your local repository to the deployed Netlify site. This will ensure you're using the same runtime version for both local development and your deployed site.

```
netlify link
```

4. Then, run the Next.js development server via Netlify CLI:

```
netlify dev
```

If your browser doesn't navigate to the site automatically, visit [localhost:8888](http://localhost:8888).
