import { Inter } from 'next/font/google'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Next.js Netlify Starter',
    default: 'Next.js Netlify Starter'
  },
  description: 'A Next.js starter optimized for Netlify deployment',
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