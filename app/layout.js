import { Inter } from 'next/font/google'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | IPL Technology Solutions',
    default: 'IPL家用脱毛仪制造商 - 专业OEM/ODM定制服务'
  },
  description: '专业IPL家用脱毛仪制造商，提供OEM/ODM定制服务，FDA认证，CE标准，为全球品牌提供高质量激光美容设备解决方案。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-neutral-900 text-white`}>
        <div className="container mx-auto px-4">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}