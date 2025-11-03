'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-white hover:bg-neutral-offwhite text-primary border-2 border-primary p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
        </button>
      )}
    </>
  )
}
