'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
import { X, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import LoadingButton from '@/components/LoadingButton'
import ProgressBar from '@/components/ProgressBar'
import FormInput from '@/components/FormInput'
import { trackError } from '@/lib/errorTracking'

const STORAGE_KEY = 'agrolab_quote_draft'
const STEP_LABELS = ['Alapadatok', 'Szolgáltatás', 'Üzenet']

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !submitted) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, submitted, onClose])

  // Load draft from localStorage
  useEffect(() => {
    if (isOpen) {
      const draft = localStorage.getItem(STORAGE_KEY)
      if (draft) {
        try {
          const parsed = JSON.parse(draft)
          setFormData(parsed)
        } catch (e) {
          console.error('Failed to parse draft:', e)
        }
      }
    }
  }, [isOpen])

  // Auto-save draft
  useEffect(() => {
    if (isOpen && !submitted) {
      const timer = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [formData, isOpen, submitted])

  // Validation
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

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, formData[name as keyof typeof formData])
    setErrors({ ...errors, [name]: error })
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (step === 1) {
      newErrors.name = validateField('name', formData.name)
      newErrors.email = validateField('email', formData.email)
      newErrors.phone = validateField('phone', formData.phone)
    } else if (step === 3) {
      newErrors.message = validateField('message', formData.message)
      newErrors.gdpr = validateField('gdpr', formData.gdpr)
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const nextStep = () => {
    if (currentStep === 1) {
      setTouched({ ...touched, name: true, email: true, phone: true })
    } else if (currentStep === 3) {
      setTouched({ ...touched, message: true, gdpr: true })
    }

    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleServiceChange = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
      gdpr: true
    })

    if (!validateStep(1) || !validateStep(3)) {
      setSubmitError('Kérjük, töltse ki az összes kötelező mezőt helyesen.')
      return
    }

    setIsLoading(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Email küldése sikertelen')

      setSubmitted(true)
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitError('Hiba történt az üzenet küldése során. Kérjük, próbálja újra később.')
      trackError(error instanceof Error ? error.message : 'Unknown error', { context: 'quote_form_submit' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    if (!submitted) {
      // Save draft before closing
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }
    onClose()
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false)
      setCurrentStep(1)
      setErrors({})
      setTouched({})
      setSubmitError(null)
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-neutral-lightgray transition-colors"
          aria-label="Bezárás"
        >
          <X size={24} className="text-neutral-darkgray" />
        </button>

        {/* Content */}
        <div className="pt-12 px-6 pb-6 md:pt-16 md:px-8 md:pb-8">
          {submitted ? (
            // Success State
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-status-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-status-success" size={48} />
                </div>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-neutral-darkgray">
                Köszönjük! Üzenetét megkaptuk.
              </h2>
              <p className="text-lg text-neutral-mediumgray mb-8">
                Kollégáink 24 órán belül felvesszik Önnel a kapcsolatot.
              </p>
              <button
                onClick={handleClose}
                className="btn-primary"
              >
                Bezárás
              </button>
            </div>
          ) : (
            // Form State
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-neutral-darkgray">
                  Ajánlatkérő Űrlap
                </h2>
                <p className="text-sm text-neutral-mediumgray">
                  {currentStep === 1 && 'Add meg az alapvető kapcsolattartási adataidat'}
                  {currentStep === 2 && 'Válaszd ki a szolgáltatásokat, amelyek érdekelnek'}
                  {currentStep === 3 && 'Írd le részletesen a kérésedet'}
                </p>
              </div>

              {/* Progress Bar */}
              <ProgressBar
                currentStep={currentStep}
                totalSteps={3}
                stepLabels={STEP_LABELS}
              />

              {/* Step 1: Alapadatok */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-darkgray">
                      Milyen szolgáltatás iránt érdeklődik?
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'lab', label: 'Laboratóriumi vizsgálat' },
                        { id: 'consulting', label: 'Szaktanácsadás' },
                        { id: 'drone', label: 'Drónos felmérés' }
                      ].map(service => (
                        <label key={service.id} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 border-neutral-lightgray hover:border-primary transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceChange(service.id)}
                            className="w-5 h-5 text-primary rounded focus:ring-primary"
                          />
                          <span className="font-medium text-neutral-darkgray">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.services.includes('lab') && (
                    <div className="animate-fade-in">
                      <label className="block text-sm font-semibold mb-2 text-neutral-darkgray">
                        Minták beküldése
                      </label>
                      <div className="space-y-2">
                        {[
                          { id: 'bring', label: 'Személyesen hozom' },
                          { id: 'post', label: 'Postán küldöm' },
                          { id: 'pickup', label: 'Kérem a mintavételt' }
                        ].map(option => (
                          <label key={option.id} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 border-neutral-lightgray hover:border-primary transition-colors">
                            <input
                              type="radio"
                              name="samples"
                              value={option.id}
                              checked={formData.samples === option.id}
                              onChange={(e) => setFormData({...formData, samples: e.target.value})}
                              className="w-5 h-5 text-primary focus:ring-primary"
                            />
                            <span className="font-medium text-neutral-darkgray">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Üzenet */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
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
                    rows={5}
                  />

                  {/* GDPR Consent */}
                  <div className="pt-4 border-t">
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
                      <span className="text-sm text-neutral-darkgray">
                        Elfogadom az{' '}
                        <a href="/adatvedelem" target="_blank" className="text-primary hover:underline">
                          adatvédelmi tájékoztatót
                        </a>{' '}
                        és hozzájárulok adataim kezeléséhez. <span className="text-status-error">*</span>
                      </span>
                    </label>
                    {errors.gdpr && touched.gdpr && (
                      <p className="text-status-error text-sm mt-2">{errors.gdpr}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Error */}
              {submitError && (
                <div className="mt-4 p-4 bg-status-error/10 border border-status-error rounded-lg flex items-start gap-3">
                  <svg className="w-5 h-5 text-status-error flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-status-error">Hiba történt</p>
                    <p className="text-sm text-neutral-darkgray mt-1">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t">
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
                    className="btn-primary flex items-center gap-2"
                  >
                    Következő
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <LoadingButton
                    type="submit"
                    isLoading={isLoading}
                    className="btn-primary"
                  >
                    Küldés
                  </LoadingButton>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
