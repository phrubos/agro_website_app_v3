'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import LoadingButton from '@/components/LoadingButton'
import ScrollReveal from '@/components/ScrollReveal'
import { trackError } from '@/lib/errorTracking'

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
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Inline validation for single field
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'A név megadása kötelező'
        if (value.length < 2) return 'A névnek legalább 2 karakter hosszúnak kell lennie'
        return ''
      case 'email':
        if (!value.trim()) return 'Az email megadása kötelező'
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return 'Érvénytelen email cím'
        return ''
      case 'phone':
        if (!value.trim()) return 'A telefonszám megadása kötelező'
        if (!/^[\d\s+()-]+$/.test(value)) return 'Érvénytelen telefonszám formátum'
        return ''
      case 'message':
        if (!value.trim()) return 'Az üzenet megadása kötelező'
        if (value.length < 10) return 'Az üzenetnek legalább 10 karakter hosszúnak kell lennie'
        return ''
      case 'gdpr':
        if (!value) return 'Az adatvédelmi tájékoztató elfogadása kötelező'
        return ''
      default:
        return ''
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    newErrors.name = validateField('name', formData.name)
    newErrors.email = validateField('email', formData.email)
    newErrors.phone = validateField('phone', formData.phone)
    newErrors.message = validateField('message', formData.message)
    newErrors.gdpr = validateField('gdpr', formData.gdpr)

    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key]
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle field blur for inline validation
  const handleBlur = (fieldName: string) => {
    setTouched({ ...touched, [fieldName]: true })
    const error = validateField(fieldName, formData[fieldName as keyof typeof formData])
    if (error) {
      setErrors({ ...errors, [fieldName]: error })
    } else {
      const newErrors = { ...errors }
      delete newErrors[fieldName]
      setErrors(newErrors)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitError(null)

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
        const errorData = await response.json().catch(() => ({}))

        // Log error to tracking service
        trackError('Form submission failed', {
          errorData,
          formData: {
            ...formData,
            // Don't log sensitive data
            gdpr: undefined,
          },
          responseStatus: response.status,
        })

        setSubmitError(
          errorData.message ||
          'Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később, vagy vegye fel velünk a kapcsolatot telefonon.'
        )
      }
    } catch (error) {
      // Log error to tracking service
      trackError(
        'Form submission network error',
        {
          formData: {
            ...formData,
            // Don't log sensitive data
            gdpr: undefined,
          },
        },
        error instanceof Error ? error : new Error(String(error))
      )

      setSubmitError(
        'Hálózati hiba történt. Kérjük, ellenőrizze az internetkapcsolatát, majd próbálja újra.'
      )
    } finally {
      setIsLoading(false)
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
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Ajánlatkérés
            </h1>
            <p className="text-xl text-neutral-offwhite max-w-2xl mx-auto">
              Töltse ki az alábbi űrlapot, és kollégáink 24 órán belül felveszik Önnel a kapcsolatot.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
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
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value})
                      if (touched.name) handleBlur('name')
                    }}
                    onBlur={() => handleBlur('name')}
                    className={`input-field w-full ${errors.name && touched.name ? 'border-status-error' : touched.name && !errors.name ? 'border-status-success' : ''}`}
                    placeholder="Kovács János"
                    aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="text-status-error text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                  {!errors.name && touched.name && formData.name && (
                    <p className="text-status-success text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Helyes
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email cím <span className="text-status-error">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value})
                      if (touched.email) handleBlur('email')
                    }}
                    onBlur={() => handleBlur('email')}
                    className={`input-field w-full ${errors.email && touched.email ? 'border-status-error' : touched.email && !errors.email ? 'border-status-success' : ''}`}
                    placeholder="kovacs.janos@example.com"
                    aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="text-status-error text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                  {!errors.email && touched.email && formData.email && (
                    <p className="text-status-success text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Helyes
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Telefonszám <span className="text-status-error">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value})
                      if (touched.phone) handleBlur('phone')
                    }}
                    onBlur={() => handleBlur('phone')}
                    className={`input-field w-full ${errors.phone && touched.phone ? 'border-status-error' : touched.phone && !errors.phone ? 'border-status-success' : ''}`}
                    placeholder="+36 30 123 4567"
                    aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="text-status-error text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.phone}
                    </p>
                  )}
                  {!errors.phone && touched.phone && formData.phone && (
                    <p className="text-status-success text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Helyes
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Cég neve (opcionális)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    autoComplete="organization"
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
                  onChange={(e) => {
                    setFormData({...formData, gdpr: e.target.checked})
                    if (errors.gdpr) setErrors({...errors, gdpr: ''})
                  }}
                  className="w-5 h-5 text-primary rounded focus:ring-primary mt-0.5"
                />
                <span className="text-sm text-neutral-mediumgray">
                  Elfogadom az <a href="/adatvedelem" className="text-primary hover:underline">Adatvédelmi Tájékoztatót</a> és 
                  hozzájárulok adataim kezeléséhez. <span className="text-status-error">*</span>
                </span>
              </label>
              {errors.gdpr && <p className="text-status-error text-sm mt-1">{errors.gdpr}</p>}
            </div>

            {/* Error Message */}
            {submitError && (
              <div
                role="alert"
                aria-live="assertive"
                className="mt-6 p-4 bg-status-error/10 border border-status-error rounded-lg flex items-start gap-3"
              >
                <svg
                  className="w-6 h-6 text-status-error flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-status-error">Hiba történt</p>
                  <p className="text-sm text-neutral-darkgray mt-1">{submitError}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <LoadingButton
                type="submit"
                className="btn-primary w-full md:w-auto px-12 py-4 text-lg"
                isLoading={isLoading}
                loadingText="Küldés..."
              >
                Ajánlat Kérése
              </LoadingButton>
            </div>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <ScrollReveal delay={0.1}>
              <div className="card text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-heading font-semibold mb-2">Cím</h3>
              <p className="text-sm text-neutral-mediumgray">
                1234 Budapest<br />
                Példa utca 123.
              </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="card text-center">
              <div className="text-4xl mb-3">☎️</div>
              <h3 className="font-heading font-semibold mb-2">Telefon</h3>
              <p className="text-sm text-neutral-mediumgray">
                +36 30 123 4567<br />
                H-P 8-16h
              </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="card text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-sm text-neutral-mediumgray">
                info@agrolab.hu<br />
                Válaszidő: 24 órán belül
              </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Business Hours */}
          <ScrollReveal delay={0.1}>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
