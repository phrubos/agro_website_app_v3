'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { trackError } from '@/lib/errorTracking'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to error tracking service
    trackError(
      'Application error',
      {
        digest: error.digest,
        page: window.location.pathname,
      },
      error
    )
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-offwhite px-4">
      <div className="max-w-2xl w-full">
        <div className="card text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-status-error/10 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-status-error"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-heading font-bold mb-4">
            Váratlan hiba történt
          </h1>
          <p className="text-lg text-neutral-mediumgray mb-8">
            Sajnáljuk, de valami hiba történt az oldal betöltése közben. Kérjük, próbálja újra.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-neutral-lightgray rounded-lg text-left">
              <p className="font-semibold mb-2">Fejlesztői információ:</p>
              <p className="text-sm text-status-error font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-neutral-mediumgray mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary"
            >
              Újrapróbálkozás
            </button>
            <Link href="/" className="btn-secondary-light">
              Vissza a főoldalra
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-neutral-lightgray">
            <p className="text-sm text-neutral-mediumgray mb-2">
              Ha a probléma továbbra is fennáll, kérjük vegye fel velünk a kapcsolatot:
            </p>
            <a
              href="mailto:info@agrolab.hu"
              className="text-primary hover:text-primary-medium font-semibold"
            >
              info@agrolab.hu
            </a>
            <span className="mx-2 text-neutral-mediumgray">vagy</span>
            <a
              href="tel:+36301234567"
              className="text-primary hover:text-primary-medium font-semibold"
            >
              +36 30 123 4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
