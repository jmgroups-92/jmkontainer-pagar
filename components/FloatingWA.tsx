'use client'
import { trackEvent } from '@/lib/gtag'

export default function FloatingWA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <a href="https://wa.me/628155401679?text=Halo%20JM%20Workshop%2C%20saya%20ingin%20konsultasi%20langsung" 
         target="_blank" rel="noopener"
         onClick={() => trackEvent('click_whatsapp', { button_location: 'floating_fab' })}
         className="flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="hidden sm:inline font-sans">Konsultasi WhatsApp</span>
        <span className="sm:hidden font-sans">Chat WA</span>
        <span className="material-symbols-outlined text-lg">chat</span>
      </a>
    </div>
  )
}
