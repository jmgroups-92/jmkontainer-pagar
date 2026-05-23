'use client'
import { useEffect } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function TrackingEvents() {
  useEffect(() => {
    const handlers: [string, string, Record<string, unknown>][] = [
      ['#btn-whatsapp-hero',   'click', { event_name: 'click_whatsapp', button_location: 'hero' }],
      ['#btn-whatsapp-float',  'click', { event_name: 'click_whatsapp', button_location: 'float' }],
      ['#btn-whatsapp-footer', 'click', { event_name: 'click_whatsapp', button_location: 'footer' }],
      ['#btn-whatsapp-nav',    'click', { event_name: 'click_whatsapp', button_location: 'nav' }],
      ['#btn-email',           'click', { event_name: 'click_email' }],
      ['#btn-instagram',       'click', { event_name: 'click_instagram' }],
      ['#btn-lihat-kontak',    'click', { event_name: 'click_lihat_kontak' }],
    ]
    const cleanup: (() => void)[] = []
    handlers.forEach(([sel, evt, params]) => {
      const el = document.querySelector(sel)
      if (!el) return
      const { event_name, ...rest } = params
      const fn = () => trackEvent(event_name as string, rest)
      el.addEventListener(evt, fn)
      cleanup.push(() => el.removeEventListener(evt, fn))
    })

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => { cleanup.forEach(fn => fn()); observer.disconnect() }
  }, [])
  return null
}
