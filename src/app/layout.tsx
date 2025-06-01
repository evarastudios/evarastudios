import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ThemeProvider from '@/components/providers/ThemeProvider'
import BackToTop from '@/components/ui/BackToTop'
import Chatbot from '@/components/Chatbot'
import AOSProvider from '@/components/providers/AOSProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Evara Studios | Professional Photography & Studio Rental in Bangalore',
    template: '%s | Evara Studios'
  },
  description: 'Professional photography services and studio rental in Bangalore. Specializing in events, portraits, corporate photography, and premium studio spaces for rent.',
  keywords: [
    'photography studio bangalore',
    'event photography',
    'studio rental bangalore',
    'professional photography',
    'corporate photography',
    'portrait photography',
    'wedding photography',
    'photo studio booking'
  ],
  authors: [{ name: 'Evara Studios' }],
  creator: 'Evara Studios',
  publisher: 'Evara Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://evarastudios.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Evara Studios | Professional Photography & Studio Rental',
    description: 'Professional photography services and studio rental in Bangalore. Capturing moments, creating memories.',
    url: 'https://evarastudios.in',
    siteName: 'Evara Studios',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evara Studios - Professional Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evara Studios | Professional Photography & Studio Rental',
    description: 'Professional photography services and studio rental in Bangalore.',
    images: ['/images/twitter-image.jpg'],
    creator: '@evarastudios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="msapplication-TileColor" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
        <ThemeProvider>
          <AOSProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <BackToTop />
              <Chatbot />
            </div>
          </AOSProvider>
        </ThemeProvider>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Evara Studios",
              "image": "https://evarastudios.in/images/logo-gold.png",
              "description": "Professional photography services and studio rental in Bangalore",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Studio Address",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9716",
                "longitude": "77.5946"
              },
              "url": "https://evarastudios.in",
              "telephone": "+91-XXXXXXXXXX",
              "email": "info@evarastudios.in",
              "openingHours": "Mo-Su 09:00-21:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "City",
                "name": "Bangalore"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photography Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Studio Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Portrait Photography"
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  )
}