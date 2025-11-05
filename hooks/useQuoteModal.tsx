'use client'

import { useState } from 'react'
import QuoteModal from '@/components/QuoteModal'

export function useQuoteModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const QuoteModalComponent = () => (
    <QuoteModal isOpen={isOpen} onClose={closeModal} />
  )

  return {
    openQuoteModal: openModal,
    closeQuoteModal: closeModal,
    QuoteModalComponent
  }
}
