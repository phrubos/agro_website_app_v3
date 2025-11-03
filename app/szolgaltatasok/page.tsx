'use client'

import Link from 'next/link'
import { Beaker, TrendingUp, Plane, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ServicesPage() {
  const services = [
    {
      icon: Beaker,
      title: 'Laboratóriumi Vizsgálatok',
      description: 'Akkreditált vizsgálatok talaj, növény, trágya és víz mintákból. Pontos eredmények, gyors átfutás.',
      link: '/szolgaltatasok/laboratorium',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: 'Szaktanácsadás',
      description: 'Tápanyag-gazdálkodási tanácsadás nagyértékű kultúrákban. Szőlő, gyümölcs, ipari zöldség szakértelem.',
      link: '/szolgaltatasok/szaktanacsadas',
      color: 'accent-teal'
    },
    {
      icon: Plane,
      title: 'Drónos Felmérés',
      description: 'Szántóföldi növény állapot felmérés precíziós technológiával. Multispektrális képalkotás, NDVI elemzés.',
      link: '/szolgaltatasok/dron',
      color: 'accent-cyan'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Szolgáltatásaink
            </h1>
            <p className="text-xl text-neutral-offwhite max-w-2xl mx-auto">
              Komplex megoldások a modern mezőgazdaság minden területére
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link 
                href={service.link}
                className="card group hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-${service.color}/10 rounded-full flex items-center justify-center group-hover:bg-${service.color} group-hover:scale-110 transition-all`}>
                    <service.icon className={`text-${service.color} group-hover:text-white transition-colors`} size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-neutral-mediumgray mb-6 text-center">
                  {service.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-primary group-hover:text-primary-medium transition-colors font-semibold">
                  Részletek <ArrowRight size={20} />
                </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Nem találja, amit keres?
            </h2>
            <p className="text-lg text-neutral-mediumgray mb-8">
              Kérjen egyédi ajánlatot, és szakértőink segítenek megtalálni a megfelelő megoldást!
            </p>
            <Link href="/ajanlatkeres" className="btn-primary text-lg px-10 py-4 inline-block">
              Ajánlatot Kérek
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
