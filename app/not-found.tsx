import Link from 'next/link'
import { Home, Search, Mail, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      {/* Hero Section - Zöld háttér hogy a header menük látszódjanak */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary-medium text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom text-center relative z-10">
          {/* 404 Number */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-40 h-40 bg-white/10 backdrop-blur-sm rounded-full border-4 border-white/20 mb-6">
              <span className="text-8xl font-heading font-bold text-white">404</span>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Az oldal nem található
          </h1>
          <p className="text-xl text-neutral-offwhite max-w-2xl mx-auto mb-8 animate-fade-in">
            Sajnáljuk, de a keresett oldal nem létezik vagy átmozgatásra került.
          </p>

          {/* Primary Action */}
          <Link 
            href="/" 
            className="btn-accent text-lg px-10 py-4 inline-flex items-center gap-2 animate-fade-in"
          >
            <Home size={20} />
            Vissza a főoldalra
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-neutral-offwhite">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-neutral-darkgray">
              Hasznos linkek
            </h2>
            <p className="text-neutral-mediumgray">
              Válasszon az alábbi lehetőségek közül, vagy használja a keresést
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link
              href="/"
              className="group card hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Home className="text-primary group-hover:text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-neutral-darkgray group-hover:text-primary transition-colors">
                    Főoldal
                  </h3>
                  <p className="text-sm text-neutral-mediumgray">
                    Vissza a kezdőlapra
                  </p>
                </div>
                <ArrowRight className="text-neutral-lightgray group-hover:text-primary transition-colors" size={20} />
              </div>
            </Link>

            <Link
              href="/szolgaltatasok"
              className="group card hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all">
                  <Search className="text-accent-teal group-hover:text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-neutral-darkgray group-hover:text-primary transition-colors">
                    Szolgáltatások
                  </h3>
                  <p className="text-sm text-neutral-mediumgray">
                    Nézze meg kínálatunkat
                  </p>
                </div>
                <ArrowRight className="text-neutral-lightgray group-hover:text-primary transition-colors" size={20} />
              </div>
            </Link>

            <Link
              href="/arlista"
              className="group card hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center group-hover:bg-accent-orange group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 text-accent-orange group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-neutral-darkgray group-hover:text-primary transition-colors">
                    Árlista
                  </h3>
                  <p className="text-sm text-neutral-mediumgray">
                    Átlátható árképzés
                  </p>
                </div>
                <ArrowRight className="text-neutral-lightgray group-hover:text-primary transition-colors" size={20} />
              </div>
            </Link>

            <Link
              href="/kapcsolat"
              className="group card hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-accent-cyan group-hover:scale-110 transition-all">
                  <Mail className="text-accent-cyan group-hover:text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-neutral-darkgray group-hover:text-primary transition-colors">
                    Kapcsolat
                  </h3>
                  <p className="text-sm text-neutral-mediumgray">
                    Vegye fel velünk a kapcsolatot
                  </p>
                </div>
                <ArrowRight className="text-neutral-lightgray group-hover:text-primary transition-colors" size={20} />
              </div>
            </Link>
          </div>

          {/* Help Section */}
          <div className="card text-center bg-gradient-to-br from-primary/5 to-accent-teal/5 border-primary/20">
            <h3 className="text-xl font-semibold mb-2 text-neutral-darkgray">
              Segítségre van szüksége?
            </h3>
            <p className="text-neutral-mediumgray mb-4">
              Munkatársaink készséggel állnak rendelkezésére
            </p>
            <a
              href="mailto:info@agrolab.hu"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-medium font-semibold transition-colors"
            >
              <Mail size={20} />
              info@agrolab.hu
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
