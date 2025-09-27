/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 确保静态导出兼容性
    trailingSlash: false,
    // 优化图片处理
    images: {
        // Netlify图片优化配置
        loader: 'custom',
        loaderFile: './lib/netlify-image-loader.js',
        formats: ['image/webp', 'image/avif', 'image/jpeg'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // 允许的外部图片域名（如果需要）
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
            }
        ]
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
