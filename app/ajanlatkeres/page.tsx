'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import LoadingButton from '@/components/LoadingButton'
import ScrollReveal from '@/components/ScrollReveal'
import ProgressBar from '@/components/ProgressBar'
import FormInput from '@/components/FormInput'
import { trackError } from '@/lib/errorTracking'

const STORAGE_KEY = 'agrolab_quote_draft'
const STEP_LABELS = ['Alapadatok', 'Szolgáltatás', 'Üzenet']

export default function QuoteRequestPage() {
  const [currentStep, setCurrentStep] = useState(1)
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

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem(STORAGE_KEY)
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft)
        setFormData(parsed)
      } catch (e) {
        console.error('Failed to parse saved draft:', e)
      }
    }
  }, [])

  // Auto-save draft to localStorage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!submitted) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
      }
    }, 1000) // Debounce 1 second

    return () => clearTimeout(timeoutId)
  }, [formData, submitted])

  // Clear draft on successful submission
  useEffect(() => {
    if (submitted) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [submitted])

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

  // Validate current step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      // Alapadatok validation
      newErrors.name = validateField('name', formData.name)
      newErrors.email = validateField('email', formData.email)
      newErrors.phone = validateField('phone', formData.phone)
    } else if (step === 2) {
      // Szolgáltatás validation (opcionális)
      // Nincs kötelező mező
    } else if (step === 3) {
      // Üzenet validation
      newErrors.message = validateField('message', formData.message)
      newErrors.gdpr = validateField('gdpr', formData.gdpr)
    }

    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key]
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const scrollToForm = () => {
    // Scroll to the form card, not to the top of the page
    setTimeout(() => {
      const formElement = document.querySelector('form')
      if (formElement) {
        const yOffset = -100 // 100px offset from top for better visibility
        const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  }

  const nextStep = () => {
    // Mark all fields in current step as touched
    if (currentStep === 1) {
      setTouched({
        ...touched,
        name: true,
        email: true,
        phone: true
      })
    } else if (currentStep === 3) {
      setTouched({
        ...touched,
        message: true,
        gdpr: true
      })
    }

    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
      scrollToForm()
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    scrollToForm()
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
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ajánlatkérő Űrlap
            </h2>
            <p className="text-neutral-mediumgray mb-8 pb-6 border-b">
              {currentStep === 1 && 'Add meg az alapvető kapcsolattartási adataidat'}
              {currentStep === 2 && 'Válaszd ki a szolgáltatásokat, amelyek érdekelnek'}
              {currentStep === 3 && 'Írd le részletesen a kérésedet'}
            </p>

            {/* Progress Bar */}
            <ProgressBar
              currentStep={currentStep}
              totalSteps={3}
              stepLabels={STEP_LABELS}
            />

            {/* Step 1: Alapadatok */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Teljes Név"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(value) => {
                      setFormData({...formData, name: value})
                      if (touched.name) handleBlur('name')
                    }}
                    onBlur={() => handleBlur('name')}
                    error={errors.name}
                    touched={touched.name}
                    required
                    placeholder="Kovács János"
                    autoComplete="name"
                  />

                  <FormInput
                    label="Email cím"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => {
                      setFormData({...formData, email: value})
                      if (touched.email) handleBlur('email')
                    }}
                    onBlur={() => handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                    required
                    placeholder="kovacs.janos@example.com"
                    autoComplete="email"
                  />

                  <FormInput
                    label="Telefonszám"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => {
                      setFormData({...formData, phone: value})
                      if (touched.phone) handleBlur('phone')
                    }}
                    onBlur={() => handleBlur('phone')}
                    error={errors.phone}
                    touched={touched.phone}
                    required
                    placeholder="+36 30 123 4567"
                    autoComplete="tel"
                  />

                  <FormInput
                    label="Cég neve"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(value) => setFormData({...formData, company: value})}
                    placeholder="Példa Kft."
                    autoComplete="organization"
                  />

                  <FormInput
                    label="Gazdálkodási terület (hektár)"
                    name="area"
                    type="number"
                    value={formData.area}
                    onChange={(value) => setFormData({...formData, area: value})}
                    placeholder="100"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Szolgáltatás */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Milyen szolgáltatás iránt érdeklődik?
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'lab', label: 'Laboratóriumi vizsgálat' },
                      { id: 'consulting', label: 'Szaktanácsadás' },
                      { id: 'drone', label: 'Drónos felmérés' }
                    ].map(service => (
                      <label key={service.id} className="flex items-center gap-3 cursor-pointer p-4 rounded-lg border-2 border-neutral-lightgray hover:border-primary transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                          className="w-5 h-5 text-primary rounded focus:ring-primary"
                        />
                        <span className="font-medium">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.services.includes('lab') && (
                  <div className="mt-6 p-6 bg-neutral-offwhite rounded-lg">
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
              </div>
            )}

            {/* Step 3: Üzenet */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <FormInput
                  label="Részletes kérés / Üzenet"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={(value) => {
                    setFormData({...formData, message: value})
                    if (touched.message) handleBlur('message')
                  }}
                  onBlur={() => handleBlur('message')}
                  error={errors.message}
                  touched={touched.message}
                  required
                  placeholder="Írja le részletesen, miben segíthetünk..."
                  rows={8}
                />

                {/* GDPR Consent */}
                <div className="pt-6 border-t">
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
              </div>
            )}

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

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 text-neutral-darkgray hover:text-primary transition-colors"
                >
                  <ArrowLeft size={20} />
                  Vissza
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary flex items-center gap-2 px-8 py-3"
                >
                  Következő
                  <ArrowRight size={20} />
                </button>
              ) : (
                <LoadingButton
                  type="submit"
                  className="btn-primary px-12 py-3 text-lg"
                  isLoading={isLoading}
                  loadingText="Küldés..."
                >
                  Ajánlat Kérése
                </LoadingButton>
              )}
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
