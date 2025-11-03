import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

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
  title: "AgroLab - Akkreditált Mezőgazdasági Laboratórium",
  description: "Precíziós mezőgazdaság tudományos alapokon. Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás 5000+ hektár tapasztalatával.",
  keywords: "talajvizsgálat, laborvizsgálat, szaktanácsadás, drónos felmérés, mezőgazdaság, tápanyag-gazdálkodás",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className={openSans.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
