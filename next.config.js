/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 确保静态导出兼容性
    trailingSlash: false,
    // 优化图片处理
    images: {
        // Netlify自动处理图片优化，无需额外配置
        unoptimized: false,
        // 允许的图片域名
        domains: ['images.pexels.com'],
        // 图片格式
        formats: ['image/webp', 'image/avif']
    },
    // 实验性功能配置
    experimental: {
        // 启用服务器组件
        serverComponentsExternalPackages: ['@netlify/blobs'],
        // 修复 workUnitAsyncStorage 错误
        workerThreads: false,
        cpus: 1
    },
    // 移除 output 配置以避免 Next.js 15 的兼容性问题
    // output: 'standalone',
    // 压缩配置
    compress: true,
    // 环境变量配置
    env: {
        CUSTOM_KEY: process.env.CUSTOM_KEY,
    },
    // 重定向配置
    async redirects() {
        return [];
    },
    // 重写配置
    async rewrites() {
        return [];
    },
    // Headers配置
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
