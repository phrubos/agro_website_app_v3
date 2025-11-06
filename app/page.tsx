'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Beaker, TrendingUp, Plane, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import QuoteModal from '@/components/QuoteModal'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// Lazy load components that are below the fold
const PriceCalculator = dynamic(() => import('@/components/PriceCalculator'), {
  loading: () => <div className="h-96 bg-neutral-lightgray animate-pulse rounded-2xl" />,
  ssr: true
})

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'), {
  loading: () => <div className="h-96 bg-neutral-lightgray animate-pulse rounded-2xl" />,
  ssr: false
})

const TrustBadges = dynamic(() => import('@/components/TrustBadges'), {
  loading: () => <div className="h-32 bg-neutral-lightgray animate-pulse rounded-xl" />,
  ssr: false
})

const LiveStats = dynamic(() => import('@/components/LiveStats'), {
  loading: () => <div className="h-64 bg-neutral-lightgray animate-pulse" />,
  ssr: false
})

export default function Home() {
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-20 md:-mt-20 hero-section">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
            alt="Mezőgazdasági terület madártávlatból - precíziós gazdálkodás"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container-custom text-center text-white z-10 py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            {t.hero.title.split(' ').slice(0, 2).join(' ')}<br />{t.hero.title.split(' ').slice(2).join(' ')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-offwhite max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="btn-accent text-lg px-10 py-4"
            >
              {t.hero.cta}
            </button>
            <Link href="/szolgaltatasok" className="btn-secondary text-lg px-10 py-4">
              {t.hero.servicesBtn}
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator - outside content div */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown size={32} className="text-white opacity-70 icon-bounce" />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {t.homePage.servicesSection.title}
              </h2>
              <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
                {t.homePage.servicesSection.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Laboratory Testing Card */}
            <div className="card group hover-glow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Beaker size={32} className="text-primary group-hover:text-white transition-colors icon-hover-pulse" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                {t.homePage.servicesSection.labTitle}
              </h3>
              <p className="text-neutral-mediumgray mb-6 text-center">
                {t.homePage.servicesSection.labDescription}
              </p>
              <Link href="/szolgaltatasok/laboratorium" className="flex items-center justify-center gap-2 text-primary hover:text-primary-medium transition-colors font-semibold">
                {t.homePage.servicesSection.details} <ArrowRight size={20} />
              </Link>
            </div>

            {/* Consulting Card */}
            <div className="card group hover-glow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all">
                  <TrendingUp size={32} className="text-accent-teal group-hover:text-white transition-colors icon-hover-bounce" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                {t.homePage.servicesSection.consultingTitle}
              </h3>
              <p className="text-neutral-mediumgray mb-6 text-center">
                {t.homePage.servicesSection.consultingDescription}
              </p>
              <Link href="/szolgaltatasok/szaktanacsadas" className="flex items-center justify-center gap-2 text-accent-teal hover:text-accent-turquoise transition-colors font-semibold">
                {t.homePage.servicesSection.details} <ArrowRight size={20} />
              </Link>
            </div>

            {/* Drone Survey Card */}
            <div className="card group hover-glow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center group-hover:bg-accent-cyan group-hover:scale-110 transition-all">
                  <Plane size={32} className="text-accent-cyan group-hover:text-white transition-colors icon-hover-spin" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                {t.homePage.servicesSection.droneTitle}
              </h3>
              <p className="text-neutral-mediumgray mb-6 text-center">
                {t.homePage.servicesSection.droneDescription}
              </p>
              <Link href="/szolgaltatasok/dron" className="flex items-center justify-center gap-2 text-accent-cyan hover:text-accent-turquoise transition-colors font-semibold">
                {t.homePage.servicesSection.details} <ArrowRight size={20} />
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
                <Image
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                  alt="Szakember mezőgazdasági területen dolgozik - szőlő termesztés és talajvizsgálat"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={85}
                  className="object-cover"
                />
              </div>
              </div>
            </ScrollReveal>

            {/* Right Side - Content */}
            <ScrollReveal delay={0.2}>
              <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                {t.homePage.whyChoose.title}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t.homePage.whyChoose.accreditedTitle}</h4>
                    <p className="text-neutral-mediumgray">
                      {t.homePage.whyChoose.accreditedDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t.homePage.whyChoose.experienceTitle}</h4>
                    <p className="text-neutral-mediumgray">
                      {t.homePage.whyChoose.experienceDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t.homePage.whyChoose.expertTitle}</h4>
                    <p className="text-neutral-mediumgray">
                      {t.homePage.whyChoose.expertDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t.homePage.whyChoose.fastResultsTitle}</h4>
                    <p className="text-neutral-mediumgray">
                      {t.homePage.whyChoose.fastResultsDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t.homePage.whyChoose.technologyTitle}</h4>
                    <p className="text-neutral-mediumgray">
                      {t.homePage.whyChoose.technologyDesc}
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
                {t.homePage.ndviSection.title}
              </h2>
              <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
                {t.homePage.ndviSection.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200"
              afterImage="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200"
              beforeLabel={t.homePage.ndviSection.beforeLabel}
              afterLabel={t.homePage.ndviSection.afterLabel}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-status-warning mb-2">{t.homePage.ndviSection.redYellow}</div>
              <p className="text-neutral-mediumgray">{t.homePage.ndviSection.redYellowDesc}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-accent-cyan mb-2">{t.homePage.ndviSection.greenTurquoise}</div>
              <p className="text-neutral-mediumgray">{t.homePage.ndviSection.greenTurquoiseDesc}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-status-success mb-2">{t.homePage.ndviSection.darkGreen}</div>
              <p className="text-neutral-mediumgray">{t.homePage.ndviSection.darkGreenDesc}</p>
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
                  {t.homePage.priceCalculator.title}
                </h2>
                <p className="text-lg text-neutral-mediumgray mb-6">
                  {t.homePage.priceCalculator.subtitle}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-darkgray">{t.homePage.priceCalculator.benefit1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-darkgray">{t.homePage.priceCalculator.benefit2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-darkgray">{t.homePage.priceCalculator.benefit3}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Right - Calculator */}
            <ScrollReveal delay={0.2} direction="right">
              <PriceCalculator onQuoteClick={() => setQuoteModalOpen(true)} />
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
              {t.homePage.ctaSection.title}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-offwhite max-w-2xl mx-auto">
              {t.homePage.ctaSection.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setQuoteModalOpen(true)}
                className="btn-accent text-lg px-10 py-4"
              >
                {t.homePage.ctaSection.contactBtn}
              </button>
              <Link href="/arlista" className="bg-white text-primary hover:bg-neutral-offwhite font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
                {t.homePage.ctaSection.pricelistBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </main>
  )
}
