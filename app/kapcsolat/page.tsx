'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Kapcsolat
            </h1>
            <p className="text-xl text-neutral-offwhite max-w-2xl mx-auto">
              Vegye fel velünk a kapcsolatot! Készséggel állunk rendelkezésére.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="card text-center hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Cím</h3>
              <p className="text-neutral-mediumgray text-sm">
                1234 Budapest<br />
                Példa utca 123.<br />
                Magyarország
              </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card text-center hover:shadow-xl transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">Telefon</h3>
                <p className="text-neutral-mediumgray text-sm">
                  <a href="tel:+36301234567" className="hover:text-primary transition-colors">
                    +36 30 123 4567
                  </a><br />
                  Hívható: H-P 8-16h
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="card text-center hover:shadow-xl transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">Email</h3>
                <p className="text-neutral-mediumgray text-sm">
                  <a href="mailto:info@agrolab.hu" className="hover:text-primary transition-colors">
                    info@agrolab.hu
                  </a><br />
                  Válaszidő: 24 órán belül
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="card text-center hover:shadow-xl transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">Munkaidő</h3>
                <p className="text-neutral-mediumgray text-sm">
                  H-P: 08:00 - 16:00<br />
                  Szo-V: Zárva
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Map & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <ScrollReveal delay={0.1}>
              <div className="card p-0 overflow-hidden h-96">
                <div className="w-full h-full bg-neutral-lightgray flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="mx-auto mb-4 text-neutral-mediumgray" size={48} />
                    <p className="text-neutral-mediumgray">
                      Térkép helye<br />
                      (Google Maps integráció)
                    </p>
                    <p className="text-sm text-neutral-placeholder mt-4">
                      1234 Budapest, Példa utca 123.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="card">
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Elérhetőségeink
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Irodánk címe:</h4>
                    <p className="text-neutral-mediumgray">
                      1234 Budapest, Példa utca 123.<br />
                      2. emelet 5. ajtó
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Telefonos ügyfélszolgálat:</h4>
                    <p className="text-neutral-mediumgray">
                      +36 30 123 4567 (H-P 8-16h)<br />
                      +36 1 234 5678 (fővonal)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email:</h4>
                    <p className="text-neutral-mediumgray">
                      Általános: info@agrolab.hu<br />
                      Labor: labor@agrolab.hu<br />
                      Szaktanácsadás: tanacsadas@agrolab.hu
                    </p>
                  </div>
                </div>
              </div>

                <div className="card bg-accent-teal/10 border-accent-teal">
                  <h4 className="font-semibold mb-2">Mintaátvétel:</h4>
                  <p className="text-neutral-mediumgray text-sm">
                    Laboratóriumi mintákat <strong>hétfőtől péntekig 8:00-14:00</strong> között 
                    fogadunk. Kérjük, előre jelezze a minta érkezését telefonon vagy emailben!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Kérdése van? Kérjen személyre szabott ajánlatot!
            </h2>
            <p className="text-lg text-neutral-mediumgray mb-8">
              Töltse ki online ajánlatkérő űrlapunkat, és munkatársaink 24 órán belül felveszik Önnel a kapcsolatot.
            </p>
            <Link href="/ajanlatkeres" className="btn-primary text-lg px-10 py-4 inline-block">
              Ajánlatkérő Űrlap
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
