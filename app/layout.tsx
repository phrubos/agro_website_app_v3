import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import Analytics from "@/components/Analytics"
import ClientProviders from "@/components/ClientProviders"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat'
})
const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ['400', '600'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://agrolab.hu'),
  title: {
    default: "AgroLab - Akkreditált Mezőgazdasági Laboratórium",
    template: "%s | AgroLab"
  },
  description: "Precíziós mezőgazdaság tudományos alapokon. Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás 5000+ hektár tapasztalatával.",
  keywords: ["talajvizsgálat", "laborvizsgálat", "szaktanácsadás", "drónos felmérés", "mezőgazdaság", "tápanyag-gazdálkodás", "NAH akkreditált", "NDVI felmérés", "precíziós gazdálkodás"],
  authors: [{ name: "AgroLab" }],
  creator: "AgroLab",
  publisher: "AgroLab",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://agrolab.hu',
    siteName: 'AgroLab',
    title: 'AgroLab - Akkreditált Mezőgazdasági Laboratórium',
    description: 'Precíziós mezőgazdaság tudományos alapokon. Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás 5000+ hektár tapasztalatával.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AgroLab - Precíziós Mezőgazdaság',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgroLab - Akkreditált Mezőgazdasági Laboratórium',
    description: 'Precíziós mezőgazdaság tudományos alapokon. Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://agrolab.hu',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AgroLab",
    "url": "https://agrolab.hu",
    "logo": "https://agrolab.hu/logo.png",
    "description": "Akkreditált mezőgazdasági laboratórium - precíziós mezőgazdaság tudományos alapokon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Példa utca 123",
      "addressLocality": "Budapest",
      "postalCode": "1234",
      "addressCountry": "HU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+36-30-123-4567",
      "contactType": "customer service",
      "email": "info@agrolab.hu",
      "availableLanguage": ["Hungarian"]
    },
    "sameAs": [
      "https://www.facebook.com/agrolab",
      "https://www.linkedin.com/company/agrolab"
    ]
  }

  return (
    <html lang="hu" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={openSans.className}>
        <ClientProviders>
          <Analytics />
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
          >
            Ugrás a tartalomhoz
          </a>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ClientProviders>
      </body>
    </html>
  )
}
