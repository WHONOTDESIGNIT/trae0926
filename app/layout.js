import { Inter } from 'next/font/google'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | IPL Technology Solutions',
    default: 'iShine IPL Hair Removal Device Manufacturer - Professional OEM/ODM Services'
  },
  description: 'Professional IPL hair removal device manufacturer providing OEM/ODM services, FDA certified, CE standard, delivering high-quality laser beauty device solutions for global brands.',
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
        </div>
      </body>
    </html>
  )
}