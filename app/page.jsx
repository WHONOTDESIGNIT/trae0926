import Link from 'next/link'
import { RandomQuote } from 'components/random-quote'
import { Card } from 'components/card'

export default function HomePage() {
  const demoPages = [
    {
      title: 'Image CDN',
      description: 'Netlify Image CDN optimization examples',
      href: '/image-cdn/image-cdn',
      icon: '🖼️'
    },
    {
      title: 'Edge Functions',
      description: 'Geographic-based content delivery',
      href: '/edge',
      icon: '⚡'
    },
    {
      title: 'Blob Storage',
      description: 'Store and retrieve data with Netlify Blobs',
      href: '/blob',
      icon: '💾'
    },
    {
      title: 'Form Handling',
      description: 'Classic Netlify Forms integration',
      href: '/classics',
      icon: '📝'
    },
    {
      title: 'Random Quote',
      description: 'Dynamic API route example',
      href: '/quote/random',
      icon: '💬'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-6">
          IPL Technology Solutions
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          专业IPL家用脱毛仪制造商，提供OEM/ODM定制服务
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blob" className="btn btn-lg">
            查看演示功能
          </Link>
          <Link 
            href="https://github.com/netlify-templates/next-platform-starter" 
            className="btn btn-lg bg-gray-700 hover:bg-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看源码
          </Link>
        </div>
      </section>

      {/* Demo Pages Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          探索演示功能
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {demoPages.map((page) => (
            <Link key={page.href} href={page.href} className="no-underline">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{page.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {page.title}
                </h3>
                <p className="text-gray-600">
                  {page.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Random Quote Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">
          动态内容示例
        </h2>
        <div className="max-w-2xl mx-auto">
          <RandomQuote />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          包含功能
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Next.js 14</h3>
            <p className="text-gray-300 text-sm">
              App Router，服务器组件和现代React功能
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2">Tailwind CSS</h3>
            <p className="text-gray-300 text-sm">
              实用优先的CSS框架，快速UI开发
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold mb-2">Netlify优化</h3>
            <p className="text-gray-300 text-sm">
              边缘函数，图像CDN和表单集成
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}