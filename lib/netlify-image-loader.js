/**
 * Netlify Image CDN Loader for Next.js
 * 自动使用Netlify的图片优化和CDN服务
 */

export default function netlifyImageLoader({ src, width, quality }) {
    // 如果是外部URL，直接返回
    if (src.startsWith('http')) {
        return src;
    }

    // 构建Netlify图片优化URL
    const params = new URLSearchParams();
    
    // 设置宽度
    if (width) {
        params.set('w', width.toString());
    }
    
    // 设置质量（默认75）
    const q = quality || 75;
    params.set('q', q.toString());
    
    // 自动格式选择（WebP优先）
    params.set('fm', 'webp');
    
    // 构建最终URL
    return `/.netlify/images?url=${encodeURIComponent(src)}&${params.toString()}`;
}