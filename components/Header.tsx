'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import MobileMenu from './MobileMenu'
import QuoteModal from './QuoteModal'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Header() {
  const { locale, setLocale, t, isTransitioning } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Mount detection
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll detection
  useEffect(() => {
    // Check scroll position immediately on mount
    setScrolled(window.scrollY > 50)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard navigation for dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && servicesDropdownOpen) {
        setServicesDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [servicesDropdownOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen])

  const navigation = [
    { name: 'Főoldal', href: '/' },
    { 
      name: 'Szolgáltatások', 
      href: '/szolgaltatasok',
      hasDropdown: true,
      subItems: [
        { name: 'Laboratóriumi Vizsgálatok', href: '/szolgaltatasok/laboratorium' },
        { name: 'Szaktanácsadás', href: '/szolgaltatasok/szaktanacsadas' },
        { name: 'Drónos Felmérés', href: '/szolgaltatasok/dron' },
      ]
    },
    { name: 'Árlista', href: '/arlista' },
    { name: 'Rólunk', href: '/rolunk' },
    { name: 'Kapcsolat', href: '/kapcsolat' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      mounted && scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span className={`font-heading text-2xl font-bold transition-colors duration-500 ${
              mounted && scrolled ? 'text-primary' : 'text-white'
            }`}>AgroLab</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-1 ${isTransitioning ? 'language-transitioning' : ''}`} aria-label="Főmenü">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : null}
                onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
              >
                {item.hasDropdown ? (
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`px-4 py-2 rounded-md transition-all duration-500 flex items-center gap-1 ${
                      mounted && scrolled
                        ? 'text-neutral-darkgray hover:bg-neutral-offwhite'
                        : 'text-white hover:bg-white/10'
                    }`}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    aria-controls="services-dropdown"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md transition-all duration-500 flex items-center gap-1 ${
                      mounted && scrolled
                        ? 'text-neutral-darkgray hover:bg-neutral-offwhite'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && servicesDropdownOpen && (
                  <div
                    id="services-dropdown"
                    className="absolute top-full left-0 pt-2 animate-fade-in-dropdown"
                    role="menu"
                    aria-label="Szolgáltatások almenü"
                  >
                    <div className="w-64 bg-white text-neutral-darkgray rounded-lg shadow-xl py-2 border border-neutral-lightgray">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-neutral-offwhite transition-colors"
                          role="menuitem"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher - Pill Design */}
            <div className={`flex items-center p-1 rounded-full transition-all duration-300 ${
              mounted && scrolled 
                ? 'bg-neutral-lightgray' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <button
                onClick={() => setLocale('hu')}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  locale === 'hu' 
                    ? mounted && scrolled
                      ? 'bg-white text-primary shadow-md'
                      : 'bg-white text-primary shadow-lg'
                    : mounted && scrolled
                      ? 'text-neutral-mediumgray hover:text-primary'
                      : 'text-white/80 hover:text-white'
                }`}
                aria-label="Magyar nyelv"
              >
                HU
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  locale === 'en' 
                    ? mounted && scrolled
                      ? 'bg-white text-primary shadow-md'
                      : 'bg-white text-primary shadow-lg'
                    : mounted && scrolled
                      ? 'text-neutral-mediumgray hover:text-primary'
                      : 'text-white/80 hover:text-white'
                }`}
                aria-label="English language"
              >
                EN
              </button>
            </div>

            {/* CTA Button - Gradient Design */}
            <button
              onClick={() => setQuoteModalOpen(true)}
              className={`group relative overflow-hidden font-bold py-3 px-8 rounded-full transition-all duration-300 ${
                mounted && scrolled
                  ? 'bg-gradient-accent text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-white text-primary shadow-lg hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10">{t.nav.quote}</span>
              {/* Ripple effect background */}
              <span className={`absolute inset-0 transition-transform duration-500 ${
                mounted && scrolled
                  ? 'bg-white/20 group-hover:scale-150'
                  : 'bg-primary/10 group-hover:scale-150'
              } rounded-full scale-0`}></span>
            </button>
          </div>

          {/* Mobile menu */}
          <MobileMenu 
            scrolled={mounted ? scrolled : false}
            onQuoteClick={() => setQuoteModalOpen(true)}
          />
        </div>
      </nav>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </header>
  )
}
