'use client'

import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loadingText?: string
  children: React.ReactNode
}

export default function LoadingButton({
  isLoading = false,
  loadingText = 'Küldés...',
  children,
  className = '',
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <button
      className={className}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" size={20} />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
