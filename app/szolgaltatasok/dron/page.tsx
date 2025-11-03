import Link from 'next/link'
import { Plane, Camera, Map, BarChart, Clock, Target, TrendingUp, MapPin } from 'lucide-react'

export default function DronePage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Gyors Felmérés',
      desc: 'Akár 100 hektár felmérése 1-2 órán belül'
    },
    {
      icon: Target,
      title: 'Pontos Eredmény',
      desc: 'Centiméteres pontosságú adatok'
    },
    {
      icon: Map,
      title: 'Nagyterület Lefedés',
      desc: 'Hatékonyan kezelünk nagy területeket'
    },
    {
      icon: TrendingUp,
      title: 'Költséghatékony',
      desc: 'Kevesebb költség mint hagyományos módszerek'
    },
    {
      icon: BarChart,
      title: 'Objektív Adatok',
      desc: 'Számszerű, reprodukálható eredmények'
    },
    {
      icon: MapPin,
      title: 'Korai Probléma Detektálás',
      desc: 'Látható tünetek előtti felismerés'
    }
  ]

  const faqs = [
    {
      q: 'Milyen területet tud lefedni egy felszállással?',
      a: 'Egy felszállással kb. 50-80 hektárt tudunk felmérni, a terület alakjától és a repülési magasságtól függően. Nagyobb területek esetén több felszállásra van szükség.'
    },
    {
      q: 'Milyen időjárási feltételek szükségesek?',
      a: 'Ideális feltételek: derült vagy enyhén felhős égbolt, legfeljebb 5-7 m/s szél, nincs csapadék. A napszak is fontos - általában délelőtt 10 és délután 3 között optimális.'
    },
    {
      q: 'Mennyi idő alatt kapom meg az eredményeket?',
      a: 'A drónos felmérés után 3-5 munkanapon belül elkészítjük a részletes jelentést az NDVI térképekkel és elemzésekkel együtt.'
    },
    {
      q: 'Milyen sűrűn érdemes felmérést végezni?',
      a: 'Évszaktól és kultúrától függően ajánlott legalább 3-4 felmérés: korai vegetációs időszak, virágzás előtt, termésképződéskor és betakarítás előtt.'
    },
    {
      q: 'Mennyibe kerül egy drónos felmérés?',
      a: 'Az árak 3200-4500 Ft/hektár között mozognak a terület méretétől függően. Részletes árainkat az Árlista oldalon találja.'
    }
  ]

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920)'}}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Drónos Növény Állapotfelmérés
            </h1>
            <p className="text-xl text-neutral-offwhite">
              Precíziós mezőgazdaság a legmodernebb technológiával. Multispektrális képalkotás és NDVI elemzés.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {/* Multispectral Camera */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800"
                    alt="Drón multispektrális kamera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                    <Camera className="text-accent-cyan" size={24} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold">
                    Multispektrális Képalkotás
                  </h3>
                </div>
                <p className="text-lg text-neutral-mediumgray mb-6">
                  Nem csak látható fényt, hanem közeli infravörös (NIR) és vörös él (Red Edge) 
                  hullámhosszokat is rögzítünk. Így láthatóvá válnak a szabad szemmel nem 
                  észlelhető növényegészségügyi problémák.
                </p>
                <ul className="space-y-3">
                  {[
                    '5 spektrális sáv egyidejű rögzítése',
                    'Centiméteres felbontás',
                    'Kalibrált, reprodukálható adatok',
                    'Georeferált képek (GPS pontosság)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent-cyan/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-accent-cyan rounded-full"></span>
                      </span>
                      <span className="text-neutral-mediumgray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* NDVI Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center">
                    <BarChart className="text-accent-teal" size={24} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold">
                    NDVI Elemzés
                  </h3>
                </div>
                <p className="text-lg text-neutral-mediumgray mb-6">
                  A Normalized Difference Vegetation Index (NDVI) térképek megmutatják a növényzet 
                  vitalitását és egészségi állapotát. A színkódolt térképek segítségével azonnal 
                  láthatók a problémás területek.
                </p>
                <div className="space-y-4">
                  <div className="bg-neutral-offwhite p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mit mutat az NDVI?</h4>
                    <ul className="space-y-2 text-sm text-neutral-mediumgray">
                      <li>• Növény vitalitás eloszlása a területen</li>
                      <li>• Stresszelt területek korai detektálása</li>
                      <li>• Tápanyaghiány azonosítása</li>
                      <li>• Öntözési igények térképezése</li>
                      <li>• Kártevők, betegségek hatásának követése</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800"
                    alt="NDVI térkép"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-sm">
                      Példa NDVI térkép: A zöld területek egészséges növényzetet, a sárga-piros területek stresszt jeleznek.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Precision Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-neutral-offwhite p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">±2cm</div>
                      <div className="text-sm text-neutral-mediumgray">Térbeli pontosság</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">5 sáv</div>
                      <div className="text-sm text-neutral-mediumgray">Spektrális felvétel</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">12 MP</div>
                      <div className="text-sm text-neutral-mediumgray">Felbontás</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">3-5 nap</div>
                      <div className="text-sm text-neutral-mediumgray">Eredmény átfutás</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold">
                    Pontos Döntéshozatal
                  </h3>
                </div>
                <p className="text-lg text-neutral-mediumgray mb-6">
                  A drónos felmérés részletes adatokat szolgáltat, amelyek alapján precíz, 
                  adatvezérelt döntéseket hozhat gazdasága menedzsmentjében.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold">Amit megkap:</h4>
                  <ul className="space-y-2 text-neutral-mediumgray">
                    <li>• Hektáronkénti bontású elemzés</li>
                    <li>• Zónális térképek (differenciált kezeléshez)</li>
                    <li>• Változások időbeli követése</li>
                    <li>• Konkrét javaslatok beavatkozáshoz</li>
                    <li>• Digitális adatcsomag (SHP, GeoTIFF formátum)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Miért Válassza a Drónos Felmérést?
            </h2>
            <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
              A modern precíziós mezőgazdaság alapja
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-accent-cyan/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="text-accent-cyan" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-mediumgray text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card bg-gradient-to-br from-accent-cyan/5 to-accent-teal/5 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">
                Minta Jelentés
              </h3>
              <p className="text-neutral-mediumgray mb-6">
                Tekintse meg, hogyan néz ki egy részletes drónos felmérési jelentés NDVI térképekkel és elemzésekkel.
              </p>
              <button className="btn-accent">
                📄 Minta Jelentés Letöltése (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Gyakori Kérdések
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="card group">
                <summary className="cursor-pointer font-heading font-semibold text-lg flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <span className="text-2xl text-accent-cyan group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-4 pt-4 border-t text-neutral-mediumgray">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-cyan to-accent-teal text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Próbálja Ki a Precíziós Mezőgazdaságot!
          </h3>
          <p className="text-lg text-neutral-offwhite mb-8 max-w-2xl mx-auto">
            Rendelje meg első drónos felmérését és tapasztalja meg a technológia előnyeit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ajanlatkeres?service=dron" className="bg-white text-accent-cyan hover:bg-neutral-offwhite font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg inline-block">
              Drónos Felmérést Kérek
            </Link>
            <Link href="/arlista#dron" className="border-2 border-white text-white hover:bg-white hover:text-accent-cyan font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg inline-block">
              Árak Megtekintése
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
