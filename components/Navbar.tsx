'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-5 py-3.5 bg-white/90 backdrop-blur-xl border border-stone-200/90 rounded-2xl shadow-sm transition-all duration-300">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center text-white font-mono font-black text-sm tracking-wider shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              JM
            </div>
            <div>
              <div className="font-bold text-base tracking-tight text-stone-900 flex items-center gap-1.5">
                JM Kontainer &amp; Workshop
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-amber-700 uppercase font-semibold">Fabrikasi Presisi • Surabaya</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1 rounded-xl border border-stone-200/60">
            <a href="#hero-slider" className="px-4 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 rounded-lg hover:bg-white transition-all">Galeri Proyek</a>
            <a href="#layanan" className="px-4 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 rounded-lg hover:bg-white transition-all">Layanan</a>
            <a href="#workflow" className="px-4 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 rounded-lg hover:bg-white transition-all">Alur Kerja</a>
            <a href="#estimasi" className="px-4 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 rounded-lg hover:bg-white transition-all">Kalkulator Biaya</a>
            <a href="#faq" className="px-4 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 rounded-lg hover:bg-white transition-all">FAQ</a>
          </div>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="tel:+628155401679" className="text-xs font-mono font-semibold text-stone-700 hover:text-stone-950 px-2 py-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-amber-600">call</span>
              +62 815-5401-6679
            </a>
            <a id="btn-whatsapp-nav"
               href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20saya%20ingin%20konsultasi%20desain%20dan%20harga" 
               target="_blank" rel="noopener"
               onClick={() => trackEvent('click_whatsapp', { button_location: 'nav' })}
               className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white active:scale-95 text-xs font-bold transition-all shadow-gold-glow">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Konsultasi WhatsApp
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-stone-700 hover:text-stone-950 rounded-xl hover:bg-stone-100 transition-colors" aria-label="Toggle Menu">
            <span className="material-symbols-outlined text-2xl">{open ? 'close' : 'menu'}</span>
          </button>
        </nav>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-xl border border-stone-200 rounded-2xl shadow-xl flex flex-col gap-2">
            <a href="#hero-slider" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-xl">Galeri Proyek</a>
            <a href="#layanan" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-xl">Layanan</a>
            <a href="#workflow" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-xl">Alur Kerja</a>
            <a href="#estimasi" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-xl">Estimator Biaya</a>
            <a href="#faq" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-xl">FAQ</a>
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20saya%20ingin%20konsultasi" 
                 target="_blank" rel="noopener"
                 onClick={() => { setOpen(false); trackEvent('click_whatsapp', { button_location: 'nav_mobile' }); }}
                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-sm shadow-gold-glow">
                <span className="material-symbols-outlined text-base">chat</span>
                Hubungi WhatsApp Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
