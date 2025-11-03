'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

interface MobileMenuProps {
  scrolled?: boolean
}

export default function MobileMenu({ scrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

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
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-[70] lg:hidden shadow-2xl flex flex-col">
            {/* Header with Close Button - Fixed */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-lightgray flex-shrink-0">
              {/* Logo */}
              <Link href="/" onClick={closeMenu} className="text-2xl font-heading font-bold text-primary">
                AgroLab
              </Link>
              
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-neutral-offwhite rounded-lg transition-colors text-neutral-darkgray"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">

              {/* Navigation Links */}
              <nav className="space-y-2">
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
                  >
                    Szolgáltatások
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="ml-4 mt-2 space-y-1">
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
                <Link
                  href="/ajanlatkeres"
                  onClick={closeMenu}
                  className="block mt-4 px-4 py-3 bg-primary hover:bg-primary-dark text-white text-center font-semibold rounded-lg transition-colors"
                >
                  Ajánlatot Kérek
                </Link>
              </nav>
            </div>
            {/* End Scrollable Content */}
          </div>
          {/* End Menu Panel */}
        </>
      )}
    </>
  )
}
