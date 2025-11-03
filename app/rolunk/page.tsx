import Link from 'next/link'
import { Award, Users, Target, Lightbulb, Star } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Nagy Péter',
      position: 'Laborvezető',
      bio: 'PhD agrármérnök, 15+ év laboratóriumi tapasztalat',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      name: 'Kovács Anna',
      position: 'Szaktanácsadó (Szőlő)',
      bio: 'MSc növényvédő szakmérnök, szőlészeti specialista',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    },
    {
      name: 'Szabó Gábor',
      position: 'Drón Pilot / Precíziós Szakértő',
      bio: 'Mezőgazdasági technológus, NDVI elemzés specialista',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
    },
    {
      name: 'Tóth Éva',
      position: 'Szaktanácsadó (Zöldség)',
      bio: 'MSc agrármérnök, ipari zöldségtermesztési szakértő',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Precizitás',
      description: 'Tudományos pontosság minden vizsgálatban'
    },
    {
      icon: Award,
      title: 'Megbízhatóság',
      description: 'Akkreditált folyamatok garantálják a minőséget'
    },
    {
      icon: Lightbulb,
      title: 'Innováció',
      description: 'Modern technológia alkalmazása a mezőgazdaságban'
    }
  ]

  const testimonials = [
    {
      quote: 'A laborjuk pontossága és a szaktanácsadás professzionalizmusa nagyban hozzájárult szőlőültetvényünk hozamának növeléséhez. Kiváló partnerek!',
      author: 'Kiss János',
      position: 'Gazdálkodó, 120 hektár',
      type: 'Szőlő & Gyümölcs'
    },
    {
      quote: 'A drónos felmérés segítségével időben azonosítottuk a problémás területeket. A precíz adatok alapján célzott beavatkozásokat tudtunk végrehajtani.',
      author: 'Németh Károly',
      position: 'Mezőgazdasági vállalkozó',
      type: 'Szántóföldi növénytermesztés'
    },
    {
      quote: 'Professzionális, gyors és pontos szolgáltatás. A talajvizsgálati eredmények részletes értelmezése nagy segítség volt a tápanyag-gazdálkodási terv elkészítésében.',
      author: 'Horváth Andrea',
      position: 'Kertészmérnök',
      type: 'Hajtatás'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920)'}}></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Rólunk
          </h1>
          <p className="text-xl text-neutral-offwhite max-w-3xl mx-auto">
            Több mint 15 éve szolgáljuk a magyar mezőgazdaságot tudományos alapokon és elkötelezett szakértelemmel.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">
            Történetünk
          </h2>
          <div className="prose prose-lg max-w-none text-neutral-mediumgray">
            <p className="text-lg leading-relaxed mb-6">
              Cégünk 2008-ban alakult azzal a céllal, hogy tudományosan megalapozott, 
              precíziós megoldásokat kínáljunk a magyar mezőgazdaság számára. Kezdetben 
              talajvizsgálatokra specializálódtunk, majd folyamatosan bővítettük szolgáltatási 
              portfóliónkat.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              2012-ben megszereztük a NAH (Nemzeti Akkreditáló Hatóság) akkreditációt, 
              amely garancia ügyfeleink számára a legmagasabb szintű szakmai munkavégzésre. 
              2018-tól kezdtük el használni a drónos technológiát, amely forradalmasította 
              a növényállapot-felmérési szolgáltatásainkat.
            </p>
            <p className="text-lg leading-relaxed">
              Ma már több mint 5000 hektáron nyújtunk folyamatos szaktanácsadást, és évente 
              több ezer laboratóriumi vizsgálatot végzünk. Csapatunk folyamatosan képzi magát, 
              hogy a legmodernebb tudományos ismeretekkel szolgálhassuk ügyfeleinket.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Értékeink
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-mediumgray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Csapatunk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-all">
                <div className="mb-6 overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3 text-sm">
                  {member.position}
                </p>
                <p className="text-sm text-neutral-mediumgray">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Akkreditációk és Tanúsítványok
          </h2>
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center">
                    <Award className="text-accent-teal" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold mb-2">
                    NAH Akkreditáció
                  </h3>
                  <p className="text-neutral-mediumgray mb-3">
                    Nemzeti Akkreditáló Hatóság által elismert vizsgálatok
                  </p>
                  <p className="text-sm text-neutral-mediumgray mb-3">
                    Licensz szám: NAH-1-1234/2023<br />
                    Érvényes: 2023.01.15 - 2028.01.15
                  </p>
                  <button className="text-primary hover:text-primary-medium font-semibold text-sm">
                    Tanúsítvány megtekintése (PDF) →
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center">
                    <Award className="text-accent-teal" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold mb-2">
                    ISO 9001:2015
                  </h3>
                  <p className="text-neutral-mediumgray mb-3">
                    Minőségirányítási Rendszer tanúsítvány
                  </p>
                  <button className="text-primary hover:text-primary-medium font-semibold text-sm">
                    Tanúsítvány megtekintése (PDF) →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Ügyfeleink Véleménye
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-accent-teal fill-current" size={20} />
                  ))}
                </div>
                <p className="text-neutral-mediumgray italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-mediumgray">{testimonial.position}</p>
                  <p className="text-sm text-primary font-semibold mt-1">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Csatlakozzon Elégedett Ügyfeleinkhez!
          </h3>
          <p className="text-lg text-neutral-offwhite mb-8 max-w-2xl mx-auto">
            Tapasztalja meg Ön is a professzionális, tudományosan megalapozott mezőgazdasági szolgáltatásokat.
          </p>
          <Link href="/ajanlatkeres" className="btn-accent text-lg px-10 py-4 inline-block">
            Ajánlatot Kérek
          </Link>
        </div>
      </section>
    </>
  )
}
