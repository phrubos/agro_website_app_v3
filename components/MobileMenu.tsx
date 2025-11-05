'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface MobileMenuProps {
  scrolled?: boolean
  onQuoteClick: () => void
}

export default function MobileMenu({ scrolled = false, onQuoteClick }: MobileMenuProps) {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setServicesOpen(false)
  }

  // Focus management - focus close button when menu opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])

  // Keyboard navigation - ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return

    const currentMenuRef = menuRef.current

    const focusableElements = currentMenuRef.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    currentMenuRef.addEventListener('keydown', handleTabKey as any)
    return () => {
      currentMenuRef.removeEventListener('keydown', handleTabKey as any)
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden p-2 rounded-lg transition-colors ${
          scrolled
            ? 'text-neutral-darkgray hover:bg-neutral-lightgray/50'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop with Blur Effect */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden animate-fade-in"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigációs menü"
          >
            {/* Header with Close Button - Fixed */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-lightgray flex-shrink-0">
              {/* Logo */}
              <Link href="/" onClick={closeMenu} className="text-2xl font-heading font-bold text-primary">
                AgroLab
              </Link>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                className="p-2 hover:bg-neutral-offwhite rounded-lg transition-colors text-neutral-darkgray"
                aria-label="Menü bezárása"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">

              {/* Navigation Links */}
              <nav className="space-y-2" aria-label="Mobil főmenü">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-neutral-darkgray hover:bg-neutral-offwhite rounded-lg transition-colors font-semibold"
                >
                  Főoldal
                </Link>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-neutral-darkgray hover:bg-neutral-offwhite rounded-lg transition-colors font-semibold"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-menu"
                  >
                    Szolgáltatások
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div id="mobile-services-menu" className="ml-4 mt-2 space-y-1">
                      <Link
                        href="/szolgaltatasok/laboratorium"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-mediumgray hover:bg-neutral-offwhite rounded-lg transition-colors"
                      >
                        Laboratóriumi Vizsgálatok
                      </Link>
                      <Link
                        href="/szolgaltatasok/szaktanacsadas"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-mediumgray hover:bg-neutral-offwhite rounded-lg transition-colors"
                      >
                        Szaktanácsadás
                      </Link>
                      <Link
                        href="/szolgaltatasok/dron"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-mediumgray hover:bg-neutral-offwhite rounded-lg transition-colors"
                      >
                        Drónos Felmérés
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/arlista"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-neutral-darkgray hover:bg-neutral-offwhite rounded-lg transition-colors font-semibold"
                >
                  Árlista
                </Link>

                <Link
                  href="/rolunk"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-neutral-darkgray hover:bg-neutral-offwhite rounded-lg transition-colors font-semibold"
                >
                  Rólunk
                </Link>

                <Link
                  href="/kapcsolat"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-neutral-darkgray hover:bg-neutral-offwhite rounded-lg transition-colors font-semibold"
                >
                  Kapcsolat
                </Link>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    closeMenu()
                    onQuoteClick()
                  }}
                  className="block w-full mt-4 px-4 py-3 bg-gradient-accent text-white text-center font-bold rounded-lg transition-colors hover:shadow-lg"
                >
                  Ajánlatot Kérek
                </button>
              </nav>

              {/* Language Switcher */}
              <div className="mt-6 pt-6 border-t border-neutral-lightgray">
                <p className="text-xs font-semibold text-neutral-mediumgray mb-3 px-4">Nyelv / Language</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLocale('hu')}
                    className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      locale === 'hu'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-neutral-lightgray text-neutral-darkgray hover:bg-neutral-gray/20'
                    }`}
                  >
                    Magyar
                  </button>
                  <button
                    onClick={() => setLocale('en')}
                    className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      locale === 'en'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-neutral-lightgray text-neutral-darkgray hover:bg-neutral-gray/20'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
            {/* End Scrollable Content */}
          </div>
          {/* End Menu Panel */}
        </>
      )}
    </>
  )
}
