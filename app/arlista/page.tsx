'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Download, Check } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('laboratory')

  const laboratoryPrices = [
    { category: 'Talajvizsgálat', items: [
      { name: 'Alap talajvizsgálat (pH, humusz, NPK, AL-K₂O, P₂O₅)', price: '8.500 Ft' },
      { name: 'Komplex talajvizsgálat (alap + mikroelemek)', price: '15.000 Ft' },
      { name: 'Só tartalom vizsgálat', price: '5.500 Ft' },
      { name: 'Nehézfém csomag (8 elem)', price: '22.000 Ft' },
    ]},
    { category: 'Növényvizsgálat', items: [
      { name: 'Növényi tápelem csomag', price: '12.000 Ft' },
      { name: 'Kórokozó vizsgálat', price: '18.000 Ft' },
      { name: 'Növényi szövet elemzés', price: '14.500 Ft' },
    ]},
    { category: 'Trágya/Vízvizsgálat', items: [
      { name: 'Műtrágya NPK vizsgálat', price: '7.800 Ft' },
      { name: 'Szerves trágya csomag', price: '16.500 Ft' },
      { name: 'Öntözővíz vizsgálat (komplex)', price: '19.900 Ft' },
    ]},
  ]

  const consultingPrices = [
    { name: 'Egyedi konzultáció (óradíj)', price: '15.000 Ft/óra' },
    { name: 'Éves szaktanácsadási szerződés (hektáronként/év)', price: '12.000 Ft/ha/év' },
    { name: 'Tápanyag-gazdálkodási terv készítése', price: '85.000 Ft-tól' },
  ]

  const dronePrices = [
    { size: '0-50 hektár', price: '4.500 Ft/ha' },
    { size: '51-200 hektár', price: '3.800 Ft/ha' },
    { size: '200+ hektár', price: '3.200 Ft/ha' },
    { size: 'Többszöri felmérés (évszakos csomag)', price: 'Egyedi ajánlat' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Árlista
            </h1>
            <p className="text-xl text-neutral-offwhite max-w-2xl mx-auto">
              Átlátható árképzés minden szolgáltatásunkra. Egyedi igényekhez egyedi ajánlatot készítünk!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Tab Buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('laboratory')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'laboratory'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral-offwhite text-neutral-darkgray hover:bg-neutral-lightgray'
              }`}
            >
              Laboratóriumi Vizsgálatok
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'consulting'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral-offwhite text-neutral-darkgray hover:bg-neutral-lightgray'
              }`}
            >
              Szaktanácsadás
            </button>
            <button
              onClick={() => setActiveTab('drone')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'drone'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral-offwhite text-neutral-darkgray hover:bg-neutral-lightgray'
              }`}
            >
              Drónos Felmérés
            </button>
            </div>
          </ScrollReveal>

          {/* Tab Content */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
            {/* Laboratory Tab */}
            {activeTab === 'laboratory' && (
              <div className="space-y-8">
                {laboratoryPrices.map((category, idx) => (
                  <div key={idx} className="card">
                    <h3 className="text-2xl font-heading font-semibold mb-6 pb-4 border-b">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.items.map((item, iidx) => (
                        <div key={iidx} className="flex justify-between items-start gap-4">
                          <span className="text-neutral-mediumgray flex-1">{item.name}</span>
                          <span className="font-bold text-primary text-lg whitespace-nowrap">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="bg-accent-teal/10 p-6 rounded-lg">
                  <p className="text-neutral-mediumgray flex items-start gap-3">
                    <span className="text-accent-teal text-xl">ℹ️</span>
                    <span>
                      Kedvezményes csomagárakat biztosítunk több hektár vagy több évre szóló együttműködés esetén. 
                      Áraink nettó árak, +ÁFA.
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Consulting Tab */}
            {activeTab === 'consulting' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-2xl font-heading font-semibold mb-6 pb-4 border-b">
                    Szaktanácsadási Szolgáltatások
                  </h3>
                  <div className="space-y-4">
                    {consultingPrices.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4">
                        <span className="text-neutral-mediumgray flex-1">{item.name}</span>
                        <span className="font-bold text-primary text-lg whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-accent-teal/10 p-6 rounded-lg">
                  <p className="text-neutral-mediumgray flex items-start gap-3">
                    <span className="text-accent-teal text-xl">ℹ️</span>
                    <span>
                      Kedvezményes csomagárakat biztosítunk több hektár vagy több évre szóló együttműködés esetén.
                      A tápanyag-gazdálkodási terv ára tartalmazza a terület felmérést, laborvizsgálatokat és a részletes tervet.
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Drone Tab */}
            {activeTab === 'drone' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-2xl font-heading font-semibold mb-6 pb-4 border-b">
                    Drónos Felmérés Árak
                  </h3>
                  <div className="space-y-4">
                    {dronePrices.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4">
                        <span className="text-neutral-mediumgray flex-1">{item.size}</span>
                        <span className="font-bold text-primary text-lg whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-accent-cyan/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-neutral-darkgray">A szolgáltatás tartalmazza:</h4>
                  <ul className="space-y-2">
                    {['RGB és multispektrális felvételek', 'NDVI térkép generálás', 'Részletes jelentés és javaslatok', 'Digitális adatcsomag (shp, geotiff)'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-mediumgray">
                        <Check className="text-accent-cyan flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            </div>
          </ScrollReveal>

          {/* Custom Quote Banner */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary to-primary-medium rounded-2xl p-10 text-white text-center">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Egyedi igényei vannak? Kérjen személyre szabott ajánlatot!
              </h3>
              <p className="mb-6 text-neutral-offwhite">
                Szakértőink készséggel állnak rendelkezésére az Ön egyedi igényeinek megfelelő ajánlat összeállításában.
              </p>
              <Link href="/ajanlatkeres" className="btn-accent inline-block">
                Egyedi Ajánlat Kérése
              </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* PDF Download */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                <Download size={24} />
                Teljes Árlista Letöltése PDF-ben
              </button>
            </div>
          </ScrollReveal>

          {/* Payment Terms */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 max-w-4xl mx-auto">
              <details className="card group">
              <summary className="cursor-pointer font-heading font-semibold text-xl flex items-center justify-between">
                <span>Fizetési feltételek és információk</span>
                <span className="text-primary">+</span>
              </summary>
              <div className="mt-6 pt-6 border-t space-y-4 text-neutral-mediumgray">
                <div>
                  <h4 className="font-semibold text-neutral-darkgray mb-2">Fizetési módok:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Banki átutalás (előre vagy utólag számla ellenében)</li>
                    <li>Készpénz (helyszíni átvételnél)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-darkgray mb-2">Számlázás:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Áraink nettó árak, +ÁFA</li>
                    <li>Számla kiállítása elektronikusan</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-darkgray mb-2">Érvényesség:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Árak tájékoztató jellegűek</li>
                    <li>2024.12.31-ig érvényesek</li>
                    <li>Egyedi ajánlatok 30 napig érvényesek</li>
                  </ul>
                </div>
              </div>
              </details>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
