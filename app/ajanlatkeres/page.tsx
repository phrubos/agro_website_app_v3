'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    area: '',
    services: [] as string[],
    samples: '',
    message: '',
    gdpr: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData)
        alert('Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később!')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később!')
    }
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-24 bg-neutral-offwhite">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-status-success/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-status-success" size={48} />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Köszönjük! Üzenetét megkaptuk.
            </h2>
            <p className="text-lg text-neutral-mediumgray mb-8">
              Kollégáink 24 órán belül felvesszik Önnel a kapcsolatot.
            </p>
            <a href="/" className="btn-primary inline-block">
              Vissza a főoldalra
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Ajánlatkérés
          </h1>
          <p className="text-xl text-neutral-offwhite max-w-2xl mx-auto">
            Töltse ki az alábbi űrlapot, és kollégáink 24 órán belül felveszik Önnel a kapcsolatot.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit} className="card">
            <h2 className="text-3xl font-heading font-bold mb-8 pb-6 border-b">
              Ajánlatkérő Űrlap
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Teljes Név <span className="text-status-error">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="input-field w-full"
                    placeholder="Kovács János"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email cím <span className="text-status-error">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-field w-full"
                    placeholder="kovacs@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Telefonszám <span className="text-status-error">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="input-field w-full"
                    placeholder="+36 30 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Cég neve (opcionális)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="input-field w-full"
                    placeholder="Példa Kft."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Gazdálkodási terület (hektár)
                  </label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    className="input-field w-full"
                    placeholder="100"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Milyen szolgáltatás iránt érdeklődik? <span className="text-status-error">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'lab', label: 'Laboratóriumi vizsgálat' },
                      { id: 'consulting', label: 'Szaktanácsadás' },
                      { id: 'drone', label: 'Drónos felmérés' }
                    ].map(service => (
                      <label key={service.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                          className="w-5 h-5 text-primary rounded focus:ring-primary"
                        />
                        <span>{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.services.includes('lab') && (
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Mintákat szeretnék beküldeni:
                    </label>
                    <div className="space-y-2">
                      {['Igen', 'Nem', 'Még nem tudom'].map(option => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="samples"
                            value={option}
                            checked={formData.samples === option}
                            onChange={(e) => setFormData({...formData, samples: e.target.value})}
                            className="w-4 h-4 text-primary focus:ring-primary"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Részletes kérés / Üzenet <span className="text-status-error">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input-field w-full"
                    rows={6}
                    placeholder="Írja le részletesen, miben segíthetünk..."
                  />
                </div>
              </div>
            </div>

            {/* GDPR Consent */}
            <div className="mt-8 pt-8 border-t">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.gdpr}
                  onChange={(e) => setFormData({...formData, gdpr: e.target.checked})}
                  className="w-5 h-5 text-primary rounded focus:ring-primary mt-0.5"
                />
                <span className="text-sm text-neutral-mediumgray">
                  Elfogadom az <a href="/adatvedelem" className="text-primary hover:underline">Adatvédelmi Tájékoztatót</a> és 
                  hozzájárulok adataim kezeléséhez. <span className="text-status-error">*</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button type="submit" className="btn-primary w-full md:w-auto px-12 py-4 text-lg">
                Ajánlat Kérése
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-heading font-semibold mb-2">Cím</h3>
              <p className="text-sm text-neutral-mediumgray">
                1234 Budapest<br />
                Példa utca 123.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">☎️</div>
              <h3 className="font-heading font-semibold mb-2">Telefon</h3>
              <p className="text-sm text-neutral-mediumgray">
                +36 30 123 4567<br />
                H-P 8-16h
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-sm text-neutral-mediumgray">
                info@agrolab.hu<br />
                Válaszidő: 24 órán belül
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="card mt-8">
            <h3 className="text-xl font-heading font-semibold mb-4">Munkaidő</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Hétfő - Péntek:</p>
                <p className="text-neutral-mediumgray">08:00 - 16:00</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Szombat - Vasárnap:</p>
                <p className="text-neutral-mediumgray">Zárva</p>
              </div>
              <div className="col-span-2 pt-4 border-t">
                <p className="font-semibold mb-1">Laboratóriumi mintaátvétel:</p>
                <p className="text-neutral-mediumgray">Hétfő - Péntek: 08:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
