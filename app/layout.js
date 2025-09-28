import 'styles/globals.css'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
  title: {
    template: '%s | iShine IPL',
    default: 'iShine IPL - Professional Hair Removal Device for Home Use | FDA Approved'
  },
  description: 'Experience professional IPL hair removal at home with iShine IPL device. FDA approved, CE certified, 500,000 flashes, suitable for all skin types. Get salon-quality results safely and effectively.',
  keywords: 'IPL hair removal, home hair removal device, laser hair removal, FDA approved IPL, professional hair removal, iShine IPL, permanent hair reduction',
  authors: [{ name: 'iShine IPL Technology' }],
  creator: 'iShine IPL Technology',
  publisher: 'iShine IPL Technology',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ishine-ipl.com',
    siteName: 'iShine IPL',
    title: 'iShine IPL - Professional Hair Removal Device for Home Use',
    description: 'Experience professional IPL hair removal at home with our FDA approved device. Safe, effective, and convenient.',
    images: [
      {
        url: '/images/ishine-device-og.jpg',
        width: 1200,
        height: 630,
        alt: 'iShine IPL Hair Removal Device',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iShine IPL - Professional Hair Removal Device',
    description: 'FDA approved IPL hair removal device for home use. Safe, effective, and convenient.',
    images: ['/images/ishine-device-og.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ishine-ipl.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0544d0" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
