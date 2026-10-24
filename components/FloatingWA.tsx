'use client'
import { useState, useEffect } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function FloatingWA() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 280)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <aside aria-label="Aksi Cepat" className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* 1. Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke Atas"
          className="w-11 h-11 rounded-full bg-white/95 hover:bg-amber-50 text-stone-700 hover:text-amber-800 border border-stone-200/90 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 group"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">
            arrow_upward
          </span>
        </button>
      )}

      {/* 2. Simplified Clean WhatsApp FAB */}
      <a
        href="https://wa.me/6281554016679?text=Halo%20JM%20Kontainer%2C%20saya%20ingin%20konsultasi%20langsung"
        target="_blank"
        rel="noopener"
        aria-label="Chat WhatsApp JM Kontainer"
        onClick={() => trackEvent('click_whatsapp', { button_location: 'floating_fab' })}
        className="relative w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-950/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        {/* Subtle Online Pulse Ring */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
        </span>

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
        </svg>
      </a>
    </aside>
  )
}
