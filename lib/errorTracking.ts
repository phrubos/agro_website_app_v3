/**
 * Error Tracking Utility
 *
 * This file provides a centralized error tracking interface.
 * To integrate with Sentry or another error tracking service:
 *
 * 1. Install the service: npm install @sentry/nextjs
 * 2. Configure it according to their documentation
 * 3. Replace the TODO comments below with actual tracking calls
 */

interface ErrorContext {
  [key: string]: any
}

/**
 * Track an error to your error monitoring service
 */
export function trackError(
  message: string,
  context?: ErrorContext,
  error?: Error
): void {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Replace with actual error tracking service
    // Example with Sentry:
    // Sentry.captureException(error || new Error(message), {
    //   contexts: { custom: context },
    // })

    // For now, we'll just log to console in a structured way
    console.error('[Error Tracking]', {
      message,
      context,
      error: error?.message,
      stack: error?.stack,
      timestamp: new Date().toISOString(),
    })
  } else {
    // Development - log to console
    console.error('[Dev Error]', message, context, error)
  }
}

/**
 * Track a warning (non-critical issue)
 */
export function trackWarning(message: string, context?: ErrorContext): void {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Replace with actual warning tracking
    // Sentry.captureMessage(message, {
    //   level: 'warning',
    //   contexts: { custom: context },
    // })

    console.warn('[Warning Tracking]', {
      message,
      context,
      timestamp: new Date().toISOString(),
    })
  } else {
    console.warn('[Dev Warning]', message, context)
  }
}

/**
 * Track custom events (analytics)
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
): void {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Replace with actual analytics tracking
    // Example: analytics.track(eventName, properties)

    console.log('[Event Tracking]', {
      event: eventName,
      properties,
      timestamp: new Date().toISOString(),
    })
  } else {
    console.log('[Dev Event]', eventName, properties)
  }
}

/**
 * Set user context for error tracking
 */
export function setUserContext(user: {
  id?: string
  email?: string
  name?: string
}): void {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Replace with actual user context setting
    // Sentry.setUser(user)
  }
}

/**
 * Clear user context (e.g., on logout)
 */
export function clearUserContext(): void {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Replace with actual context clearing
    // Sentry.setUser(null)
  }
}
