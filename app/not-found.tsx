import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-offwhite px-4">
      <div className="max-w-2xl w-full">
        <div className="card text-center">
          {/* 404 Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-6xl font-heading font-bold text-primary">404</span>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl font-heading font-bold mb-4">
            Az oldal nem található
          </h1>
          <p className="text-lg text-neutral-mediumgray mb-8">
            Sajnáljuk, de a keresett oldal nem létezik vagy átmozgatásra került.
          </p>

          {/* Suggestions */}
          <div className="mb-8 p-6 bg-neutral-offwhite rounded-lg">
            <p className="font-semibold mb-4">Hasznos linkek:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <Link
                href="/"
                className="block p-3 hover:bg-white rounded-lg transition-colors"
              >
                <span className="text-primary font-semibold">→ Főoldal</span>
              </Link>
              <Link
                href="/szolgaltatasok"
                className="block p-3 hover:bg-white rounded-lg transition-colors"
              >
                <span className="text-primary font-semibold">→ Szolgáltatások</span>
              </Link>
              <Link
                href="/arlista"
                className="block p-3 hover:bg-white rounded-lg transition-colors"
              >
                <span className="text-primary font-semibold">→ Árlista</span>
              </Link>
              <Link
                href="/kapcsolat"
                className="block p-3 hover:bg-white rounded-lg transition-colors"
              >
                <span className="text-primary font-semibold">→ Kapcsolat</span>
              </Link>
            </div>
          </div>

          {/* Action Button */}
          <Link href="/" className="btn-primary inline-block">
            Vissza a főoldalra
          </Link>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-neutral-lightgray">
            <p className="text-sm text-neutral-mediumgray mb-2">
              Segítségre van szüksége?
            </p>
            <a
              href="mailto:info@agrolab.hu"
              className="text-primary hover:text-primary-medium font-semibold"
            >
              Vegye fel velünk a kapcsolatot
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
