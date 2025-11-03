'use client'

import Link from 'next/link'
import { Beaker, FileCheck, Microscope, Leaf, Droplets, Package } from 'lucide-react'

export default function LaboratoryPage() {
  const services = [
    {
      icon: Leaf,
      title: 'Talajvizsgálat',
      params: [
        'pH, mészállapot',
        'Humusz tartalom',
        'NPK (Nitrogén, Foszfor, Kálium)',
        'Mikroelemek (Mg, Ca, Fe, Mn, Zn, Cu, B, Mo)',
        'Só tartalom',
        'Nehézfém tartalom'
      ]
    },
    {
      icon: Microscope,
      title: 'Növényvizsgálat',
      params: [
        'Tápelem tartalom (N, P, K, Ca, Mg)',
        'Mikroelemek',
        'Kórokozó vizsgálatok',
        'Növényi szövet elemzés'
      ]
    },
    {
      icon: Package,
      title: 'Szerves/Műtrágya Vizsgálat',
      params: [
        'NPK tartalom',
        'Szerves anyag',
        'Nedvesség tartalom',
        'pH érték',
        'Szennyezőanyagok'
      ]
    },
    {
      icon: Droplets,
      title: 'Öntözővíz Vizsgálat',
      params: [
        'pH, vezetőképesség',
        'Összes só',
        'Nitrát, nitrit',
        'Nehézfémek',
        'Mikrobiológiai vizsgálatok'
      ]
    }
  ]

  const processSteps = [
    {
      number: '1',
      title: 'Mintavétel',
      description: 'Útmutató alapján mintavétel'
    },
    {
      number: '2',
      title: 'Beküldés',
      description: 'Postai vagy személyes átvétel'
    },
    {
      number: '3',
      title: 'Vizsgálat',
      description: 'Akkreditált labor 5-7 munkanap'
    },
    {
      number: '4',
      title: 'Eredmény',
      description: 'Részletes jelentés email/portál'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920)'}}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Laboratóriumi Vizsgálatok
            </h1>
            <p className="text-xl text-neutral-offwhite">
              Akkreditált vizsgálatok talaj, növény, trágya és víz mintákból. Precíz eredmények a fenntartható gazdálkodásért.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation Banner */}
      <section className="py-12 bg-accent-teal/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-accent-teal rounded-full flex items-center justify-center">
                <FileCheck className="text-white" size={40} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-2">
                NAH Akkreditált Laboratórium
              </h3>
              <p className="text-neutral-mediumgray mb-3">
                Nemzeti Akkreditáló Hatóság által elismert vizsgálatok. Licensz szám: NAH-1-1234/2023
              </p>
              <button className="text-primary hover:text-primary-medium font-semibold flex items-center gap-2 mx-auto md:mx-0">
                Akkreditációs dokumentum letöltése (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Vizsgálati Kategóriák
            </h2>
            <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
              Komplex laboratóriumi szolgáltatások minden mezőgazdasági igényre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">
                    {service.title}
                  </h3>
                </div>
                <div className="ml-18">
                  <p className="font-semibold mb-3 text-neutral-mediumgray">Vizsgált paraméterek:</p>
                  <ul className="space-y-2">
                    {service.params.map((param, pidx) => (
                      <li key={pidx} className="flex items-start gap-2 text-neutral-mediumgray">
                        <span className="text-primary mt-1">•</span>
                        <span>{param}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/ajanlatkeres?service=laboratorium" 
                    className="inline-block mt-6 btn-primary"
                  >
                    {service.title} Kérése
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Vizsgálati Folyamat
            </h2>
            <p className="text-lg text-neutral-mediumgray">
              Egyszerű, gyors és átlátható folyamat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-primary/20" style={{transform: 'translateY(-50%)'}}></div>
                  )}
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-neutral-mediumgray">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Submission Guide */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              Minta Beküldési Útmutató
            </h2>

            <div className="space-y-4">
              <details className="card group">
                <summary className="cursor-pointer font-heading font-semibold text-xl flex items-center justify-between">
                  <span>Talaj mintavétel</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="mt-4 pt-4 border-t space-y-3 text-neutral-mediumgray">
                  <p><strong>Mikor vegyen mintát?</strong> Ősz vagy kora tavasz, amikor a talaj nem túl nedves vagy fagyott.</p>
                  <p><strong>Hogyan vegyen mintát?</strong> 0-30 cm mélységből, 15-20 részletmintát összekeverve. Minimum 0,5 kg.</p>
                  <p><strong>Hogyan csomagolja?</strong> Tiszta műanyag zacskóban, címkével ellátva (név, terület, dátum).</p>
                </div>
              </details>

              <details className="card group">
                <summary className="cursor-pointer font-heading font-semibold text-xl flex items-center justify-between">
                  <span>Növény mintavétel</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="mt-4 pt-4 border-t space-y-3 text-neutral-mediumgray">
                  <p><strong>Melyik növényi részt?</strong> Általában fiatal, teljesen kifejlett levelek.</p>
                  <p><strong>Milyen állapotban?</strong> Egészséges növényekből, illetve külön beteg részekből.</p>
                  <p><strong>Csomagolás:</strong> Papírzacskóban vagy perforált műanyagban, gyorsan beküldve.</p>
                </div>
              </details>

              <details className="card group">
                <summary className="cursor-pointer font-heading font-semibold text-xl flex items-center justify-between">
                  <span>Minta beküldési cím</span>
                  <span className="text-primary">+</span>
                </summary>
                <div className="mt-4 pt-4 border-t space-y-2 text-neutral-mediumgray">
                  <p className="font-semibold text-neutral-darkgray">AgroLab Akkreditált Laboratórium</p>
                  <p>1234 Budapest, Példa utca 123.</p>
                  <p>Telefon: +36 30 123 4567</p>
                  <p>Email: labor@agrolab.hu</p>
                  <p className="text-status-warning font-semibold mt-4">Fontos: Jelezze előre a minta érkezését!</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Kezdje el most a pontos tápanyag-gazdálkodást!
          </h3>
          <p className="text-lg text-neutral-offwhite mb-8 max-w-2xl mx-auto">
            Szakértőink készséggel állnak rendelkezésére a mintavételtől az eredmények értelmezéséig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ajanlatkeres?service=laboratorium" className="btn-accent text-lg px-10 py-4">
              Vizsgálatot Kérek
            </Link>
            <Link href="/arlista#laboratorium" className="bg-white text-primary hover:bg-neutral-offwhite font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
              Árlista Megtekintése
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
