/**
 * Google Analytics and Tag Manager utilities
 *
 * Setup instructions:
 * 1. Get your GA4 Measurement ID from Google Analytics
 * 2. Get your GTM Container ID from Google Tag Manager
 * 3. Add them to your .env.local:
 *    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *    NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
 */

// Type definitions
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export interface PageViewEvent {
  page_title: string
  page_location: string
  page_path: string
}

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
  if (typeof window === 'undefined') return

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!measurementId) {
    console.warn('[Analytics] GA Measurement ID not found')
    return
  }

  // Load gtag.js
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  script.async = true
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    send_page_view: false // We'll send manually
  })
}

/**
 * Initialize Google Tag Manager
 */
export const initGTM = () => {
  if (typeof window === 'undefined') return

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  if (!gtmId) {
    console.warn('[Analytics] GTM ID not found')
    return
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  // Load GTM script
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  script.async = true
  document.head.appendChild(script)
}

/**
 * Track page view
 */
export const pageview = (url: string, title?: string) => {
  if (typeof window === 'undefined') return

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!measurementId) return

  window.gtag?.('config', measurementId, {
    page_path: url,
    page_title: title || document.title
  })
}

/**
 * Track custom event
 */
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window === 'undefined') return

  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

/**
 * Track form submission
 */
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    action: 'form_submission',
    category: 'Form',
    label: `${formName}_${success ? 'success' : 'error'}`
  })
}

/**
 * Track button click
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent({
    action: 'button_click',
    category: 'Engagement',
    label: `${buttonName}_${location}`
  })
}

/**
 * Track file download
 */
export const trackDownload = (fileName: string) => {
  trackEvent({
    action: 'file_download',
    category: 'Downloads',
    label: fileName
  })
}

/**
 * Track outbound link click
 */
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'outbound_link_click',
    category: 'Engagement',
    label: url
  })
}

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage
  })
}

// Type augmentation for window object
declare global {
  interface Window {
    dataLayer: any[]
    gtag?: (...args: any[]) => void
  }
}
