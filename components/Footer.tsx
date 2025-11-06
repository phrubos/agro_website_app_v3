'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent-teal rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold">AgroLab</span>
            </div>
            <p className="text-sm text-neutral-offwhite mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-turquoise transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-turquoise transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@agrolab.hu" className="hover:text-accent-turquoise transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/szolgaltatasok/laboratorium" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.services.laboratory}
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok/szaktanacsadas" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.services.consulting}
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok/dron" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.services.drone}
                </Link>
              </li>
              <li>
                <Link href="/arlista" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.nav.pricelist}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t.footer.legalTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/adatvedelem" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/aszf" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.footer.cookies}
                </Link>
              </li>
              <li>
                <Link href="/impresszum" className="text-neutral-offwhite hover:text-white transition-colors">
                  {t.footer.imprint}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-neutral-offwhite" style={{whiteSpace: 'pre-line'}}>
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+36301234567" className="text-neutral-offwhite hover:text-white transition-colors">
                  +36 30 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@agrolab.hu" className="text-neutral-offwhite hover:text-white transition-colors">
                  info@agrolab.hu
                </a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-neutral-offwhite">
              <p className="font-semibold mb-1">{t.footer.workingHours}</p>
              <p>{t.footer.workingHoursValue}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-medium pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-offwhite">
            <p>
              © {currentYear} AgroLab. {t.footer.allRightsReserved}.
            </p>
            <p className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-accent-turquoise rounded-full"></span>
              {t.footer.accredited}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
