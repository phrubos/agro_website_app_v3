'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Header() {
  const { locale, setLocale, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Mount detection
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll detection
  useEffect(() => {
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
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Főmenü">
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
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-2 text-sm transition-colors duration-500 ${
              mounted && scrolled ? 'text-neutral-darkgray' : 'text-white'
            }`}>
              <button
                onClick={() => setLocale('hu')}
                className={`font-semibold hover:text-accent-turquoise transition-colors ${
                  locale === 'hu' ? 'text-accent-teal' : 'opacity-70'
                }`}
                aria-label="Magyar nyelv"
              >
                HU
              </button>
              <span>|</span>
              <button
                onClick={() => setLocale('en')}
                className={`font-semibold hover:text-accent-turquoise transition-colors ${
                  locale === 'en' ? 'text-accent-teal' : 'opacity-70'
                }`}
                aria-label="English language"
              >
                EN
              </button>
            </div>
            <Link
              href="/ajanlatkeres"
              className={`font-semibold py-3 px-8 rounded-lg transition-all duration-500 ${
                mounted && scrolled
                  ? 'bg-accent-teal hover:bg-accent-turquoise text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-neutral-offwhite'
              }`}
            >
              {t.nav.quote}
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu scrolled={mounted ? scrolled : false} />
        </div>
      </nav>
    </header>
  )
}
