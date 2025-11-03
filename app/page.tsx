'use client'

import Link from 'next/link'
import { Beaker, TrendingUp, Plane, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import PriceCalculator from '@/components/PriceCalculator'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import TrustBadges from '@/components/TrustBadges'
import LiveStats from '@/components/LiveStats'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden -mt-20" style={{height: 'calc(100vh + 5rem)'}}>
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container-custom text-center text-white z-10 py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Precíziós Mezőgazdaság<br />Tudományos Alapokon
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-offwhite max-w-3xl mx-auto">
            Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás 5000+ hektár tapasztalatával
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/ajanlatkeres" className="btn-accent text-lg px-10 py-4">
              Ajánlatot Kérek
            </Link>
            <Link href="/szolgaltatasok" className="btn-secondary text-lg px-10 py-4">
              Szolgáltatásaink
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator - outside content div */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown size={32} className="text-white opacity-70" />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Szolgáltatásaink
              </h2>
              <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
                Komplex megoldások a modern mezőgazdaság minden területére
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Laboratory Testing Card */}
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Beaker size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                Laboratóriumi Vizsgálatok
              </h3>
              <p className="text-neutral-mediumgray mb-6 text-center">
                Talaj, növény, trágya és öntözővíz minták akkreditált vizsgálata. Pontos eredmények, gyors átfutás.
              </p>
              <Link href="/szolgaltatasok/laboratorium" className="flex items-center justify-center gap-2 text-primary hover:text-primary-medium transition-colors font-semibold">
                Részletek <ArrowRight size={20} />
              </Link>
            </div>

            {/* Consulting Card */}
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all">
                  <TrendingUp size={32} className="text-accent-teal group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                Szaktanácsadás
              </h3>
              <p className="text-neutral-mediumgray mb-6 text-center">
                Tápanyag-gazdálkodási tanácsadás nagyértékű kultúrákban. Szőlő, gyümölcs, ipari zöldség szakértelem.
              </p>
              <Link href="/szolgaltatasok/szaktanacsadas" className="flex items-center justify-center gap-2 text-accent-teal hover:text-accent-turquoise transition-colors font-semibold">
                Részletek <ArrowRight size={20} />
              </Link>
            </div>

            {/* Drone Survey Card */}
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center group-hover:bg-accent-cyan group-hover:scale-110 transition-all">
                  <Plane size={32} className="text-accent-cyan group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                Drónos Felmérés
              </h3>
              <p className="text-neutral-mediumgray mb-6 text-center">
                Szántóföldi növény állapot felmérés precíziós technológiával. Multispektrális képalkotás, NDVI elemzés.
              </p>
              <Link href="/szolgaltatasok/dron" className="flex items-center justify-center gap-2 text-accent-cyan hover:text-accent-turquoise transition-colors font-semibold">
                Részletek <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <ScrollReveal delay={0.1}>
              <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800"
                  alt="Szakember szőlőben"
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
            </ScrollReveal>

            {/* Right Side - Content */}
            <ScrollReveal delay={0.2}>
              <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                Miért Válasszon Minket?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Akkreditált Laboratórium</h4>
                    <p className="text-neutral-mediumgray">
                      NAH (Nemzeti Akkreditáló Hatóság) által elismert vizsgálatok
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">5000+ Hektár Tapasztalat</h4>
                    <p className="text-neutral-mediumgray">
                      Szántóföld, szőlő, gyümölcsös, hajtatás területeken
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Szakértői Csapat</h4>
                    <p className="text-neutral-mediumgray">
                      Agrármérnökök, növényvédő szakmérnökök
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Gyors Eredményszolgáltatás</h4>
                    <p className="text-neutral-mediumgray">
                      Laboratóriumi vizsgálatok 5-7 napon belül
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Modern Technológia</h4>
                    <p className="text-neutral-mediumgray">
                      Drónos felmérés, precíziós eszközpark
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <LiveStats />

      {/* NDVI Before/After Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Lássa A Különbséget
              </h2>
              <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
                Drónos NDVI felmérésünk segítségével időben azonosíthatja a problémás területeket
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200"
              afterImage="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200"
              beforeLabel="Problémás Terület"
              afterLabel="Javított Terület"
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-status-warning mb-2">Piros/Sárga</div>
              <p className="text-neutral-mediumgray">Stressz, tápanyaghiány</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-accent-cyan mb-2">Zöld/Türkiz</div>
              <p className="text-neutral-mediumgray">Átlagos növényállomány</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-status-success mb-2">Sötétzöld</div>
              <p className="text-neutral-mediumgray">Egészséges, optimális</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <ScrollReveal>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Kalkulálja Meg Költségét
                </h2>
                <p className="text-lg text-neutral-mediumgray mb-6">
                  Használja interaktív árkalkulátorunkat, hogy azonnal láthassa becsült költségeit. Válassza ki a gazdálkodási területét és a kívánt szolgáltatásokat.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-darkgray">Átlátható, versenyképes árak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-darkgray">Testreszabható szolgáltatáscsomagok</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-darkgray">Mennyiségi kedvezmények nagy területekre</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Right - Calculator */}
            <ScrollReveal delay={0.2} direction="right">
              <PriceCalculator />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary-medium rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Kérdése Van? Kérjen Személyre Szabott Ajánlatot!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-offwhite max-w-2xl mx-auto">
              Szakértőink készséggel állnak rendelkezésére, hogy megtalálják az Ön gazdaságának legmegfelelőbb megoldást.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ajanlatkeres" className="btn-accent text-lg px-10 py-4">
                Kapcsolatfelvétel
              </Link>
              <Link href="/arlista" className="bg-white text-primary hover:bg-neutral-offwhite font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
                Árlista Megtekintése
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
