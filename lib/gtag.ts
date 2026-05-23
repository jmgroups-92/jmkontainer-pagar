export const GA_ID = 'G-QMY2G5J3EJ'

declare global {
  interface Window { gtag: (...args: unknown[]) => void; dataLayer: unknown[] }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, { send_to: GA_ID, ...params })
  }
}
