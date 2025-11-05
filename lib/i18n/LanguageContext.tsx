'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, getTranslations, TranslationKeys } from './translations'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
  isTransitioning: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('hu')
  const [t, setT] = useState<TranslationKeys>(getTranslations('hu'))
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Load saved locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'hu' || savedLocale === 'en')) {
      setLocaleState(savedLocale)
      setT(getTranslations(savedLocale))
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return // Ne csináljunk semmit ha ugyanaz
    
    // Start transition
    setIsTransitioning(true)
    
    // Fade out effect
    setTimeout(() => {
      setLocaleState(newLocale)
      setT(getTranslations(newLocale))
      localStorage.setItem('locale', newLocale)
      
      // Update HTML lang attribute
      document.documentElement.lang = newLocale
      
      // Fade in effect
      setTimeout(() => {
        setIsTransitioning(false)
      }, 150)
    }, 150)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
