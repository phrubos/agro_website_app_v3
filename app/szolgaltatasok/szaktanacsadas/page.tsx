'use client'

import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp, Grape, Apple, Leaf, Sprout, BarChart3 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ConsultingPage() {
  const consultingAreas = [
    {
      icon: Leaf,
      title: 'Ipari Zöldség',
      subtitle: 'Paradicsom, paprika, uborka',
      points: [
        'Tápanyag-utánpótlási terv',
        'Öntözési stratégia',
        'Talajkondícionálás'
      ]
    },
    {
      icon: Grape,
      title: 'Szőlő',
      subtitle: 'Bor és csemege',
      points: [
        'Szőlőtermesztési tanácsadás',
        'Tápanyag-gazdálkodás',
        'Termésoptimalizálás'
      ]
    },
    {
      icon: Apple,
      title: 'Gyümölcsös',
      subtitle: 'Alma, körte, csonthéjas',
      points: [
        'Komplex tápanyag-menedzsment',
        'Talajvizsgálat alapú terv',
        'Növényvédelmi tanácsadás'
      ]
    },
    {
      icon: Sprout,
      title: 'Hajtatás',
      subtitle: 'Üvegház/fóliaház kultúrák',
      points: [
        'Szubsztrát-gazdálkodás',
        'Fertigáció tervezés',
        'Növény-monitoring'
      ]
    },
    {
      icon: BarChart3,
      title: 'Szántóföld',
      subtitle: 'Kalászos, kukorica, repce',
      points: [
        'Precíziós tápanyag-gazdálkodás',
        'Termésoptimalizálás',
        'Talajjavítási program'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920)'}}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Tápanyag-gazdálkodási Szaktanácsadás
            </h1>
            <p className="text-xl text-neutral-offwhite">
              Szakértői támogatás nagyértékű kultúrákban 5000 hektár tapasztalatával. 
              Növelje terméseredményeit tudományos alapokon!
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Szaktanácsadási Területeink
              </h2>
              <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
                Specializált tanácsadás a legigényesebb kultúrákban
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingAreas.map((consultingArea, index) => {
              const IconComponent = consultingArea.icon
              return (
                <ScrollReveal key={index} delay={Math.min(index * 0.1, 0.3)}>
                  <div className="card hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <IconComponent className="text-primary group-hover:text-white transition-colors" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-semibold mb-1">
                          {consultingArea.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold">
                          {consultingArea.subtitle}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-18">
                      {consultingArea.points.map((point, pidx) => (
                        <li key={pidx} className="flex items-start gap-2 text-neutral-mediumgray">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-heading font-bold mb-8">
                  Hogyan Dolgozunk?
                </h2>
              <div className="space-y-6">
                {[
                  {
                    number: '1',
                    title: 'Helyszíni Bejárás',
                    desc: 'Területfelmérés, talajvizsgálat mintavétel'
                  },
                  {
                    number: '2',
                    title: 'Laboratóriumi Elemzés',
                    desc: 'Akkreditált vizsgálatok'
                  },
                  {
                    number: '3',
                    title: 'Adatelemzés & Terv',
                    desc: 'Személyre szabott tápanyag-gazdálkodási terv'
                  },
                  {
                    number: '4',
                    title: 'Folyamatos Nyomon Követés',
                    desc: 'Évszakos konzultációk, korrekciók'
                  },
                  {
                    number: '5',
                    title: 'Eredmények Értékelése',
                    desc: 'Terméseredmények, gazdaságosság'
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-1">{step.title}</h4>
                      <p className="text-neutral-mediumgray">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                  alt="Szakértői mezőgazdasági tanácsadás és tápanyag-gazdálkodási szolgáltatás"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={85}
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Sikertörténeteink
              </h2>
              <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
                Valós eredmények elégedett ügyfeleink gazdaságaiban
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Szőlőültetvény Hozamának 15%-os Növelése',
                location: 'Tokaj térség',
                area: '45 hektár',
                type: 'Csemegeszőlő',
                result: 'Tápanyag-terv optimalizálás után a hozam 12 tonnáról 13,8 tonnára nőtt hektáronként.'
              },
              {
                title: 'Hajtatott Paradicsom Termésminőség Javítása',
                location: 'Kecskemét',
                area: '8000 m² üvegház',
                type: 'Paradicsom',
                result: 'Fertigációs terv átdolgozása után 22%-kal javult az I. osztályú termés aránya.'
              },
              {
                title: 'Gyümölcsös Talajkondíció Helyreállítása',
                location: 'Szatmár megye',
                area: '32 hektár',
                type: 'Alma',
                result: '3 éves program után a talaj humusz tartalma 1,8%-ról 2,6%-ra nőtt.'
              }
            ].map((study, idx) => (
              <ScrollReveal key={idx} delay={Math.min(idx * 0.1, 0.3)}>
                <div className="card">
                <div className="aspect-video bg-neutral-lightgray rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src={`https://images.unsplash.com/photo-${idx === 0 ? '1506377711776-dbdc2f3c20d9' : idx === 1 ? '1592841200221-a6898f307baa' : '1568702846914-96b305d2aaeb'}?w=600&q=80`}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    quality={85}
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {study.title}
                </h3>
                <div className="space-y-2 mb-4 text-sm">
                  <p><span className="font-semibold">Helyszín:</span> {study.location}</p>
                  <p><span className="font-semibold">Terület:</span> {study.area}</p>
                  <p><span className="font-semibold">Kultúra:</span> {study.type}</p>
                </div>
                <p className="text-neutral-mediumgray text-sm border-t pt-4">
                  <strong>Eredmény:</strong> {study.result}
                </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Banner */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Agrármérnök és növényvédő szakmérnök kollégáink rendelkezésére állnak
          </h3>
          <p className="text-lg text-neutral-offwhite mb-8 max-w-2xl mx-auto">
            Csapatunk több évtizedes tapasztalattal rendelkezik a nagyértékű kultúrák tápanyag-gazdálkodásában.
          </p>
          <Link href="/rolunk#csapat" className="bg-white text-primary hover:bg-neutral-offwhite font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg inline-block">
            Ismerje meg csapatunkat
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Indítson Konzultációt Szakértőinkkel!
            </h3>
          <p className="text-lg text-neutral-mediumgray mb-8">
            Kérjen személyre szabott ajánlatot gazdasága szaktanácsadási igényeire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ajanlatkeres?service=tanacsadas" className="btn-primary text-lg px-10 py-4">
              Konzultációt Kérek
            </Link>
            <Link href="/arlista#tanacsadas" className="btn-secondary-light text-lg px-10 py-4">
              Árak Megtekintése
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
