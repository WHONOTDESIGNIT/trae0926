import Link from 'next/link'
import { RandomQuote } from 'components/random-quote'
import { Card } from 'components/card'

export default function HomePage() {
  const demoPages = [
    {
      title: 'Image CDN',
      description: 'Netlify Image CDN optimization examples',
      href: '/image-cdn',
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
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-6">
          Next.js + Netlify
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          A modern starter template showcasing Next.js 14 features optimized for Netlify deployment
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blob" className="btn btn-lg">
            Try Demo Features
          </Link>
          <Link 
            href="https://github.com/netlify-templates/next-platform-starter" 
            className="btn btn-lg bg-gray-700 hover:bg-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </Link>
        </div>
      </section>

      {/* Demo Pages Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Demo Features
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
          Dynamic Content Example
        </h2>
        <div className="max-w-2xl mx-auto">
          <RandomQuote />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          What's Included
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Next.js 14</h3>
            <p className="text-gray-300 text-sm">
              App Router, Server Components, and modern React features
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2">Tailwind CSS</h3>
            <p className="text-gray-300 text-sm">
              Utility-first CSS framework for rapid UI development
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold mb-2">Netlify Optimized</h3>
            <p className="text-gray-300 text-sm">
              Edge Functions, Image CDN, and Forms integration
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}