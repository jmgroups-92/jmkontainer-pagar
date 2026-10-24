'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-5 py-3.5 bg-white/80 backdrop-blur-xl border border-zinc-200/80 rounded-2xl shadow-sm transition-all duration-300">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider group-hover:bg-brand-600 transition-colors shadow-inner">
              JM
            </div>
            <div>
              <div className="font-bold text-base tracking-tight text-zinc-950 flex items-center gap-1.5">
                JM Workshop
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              </div>
              <p className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">Fabrikasi Presisi • Surabaya</p>
            </div>
          </a>

          <!-- Desktop Nav Links -->
          <div className="hidden md:flex items-center gap-1 bg-zinc-100/70 p-1 rounded-xl border border-zinc-200/50">
            <a href="#layanan" className="px-4 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 rounded-lg hover:bg-white transition-all">Layanan Bento</a>
            <a href="#portofolio" className="px-4 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 rounded-lg hover:bg-white transition-all">Portofolio</a>
            <a href="#workflow" className="px-4 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 rounded-lg hover:bg-white transition-all">Cara Kerja</a>
            <a href="#estimasi" className="px-4 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 rounded-lg hover:bg-white transition-all">Kalkulator Biaya</a>
            <a href="#faq" className="px-4 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 rounded-lg hover:bg-white transition-all">FAQ</a>
          </div>

          <!-- CTAs -->
          <div className="hidden sm:flex items-center gap-3">
            <a href="tel:+628155401679" className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-2 py-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-zinc-500">call</span>
              +62 815-5401-6679
            </a>
            <a id="btn-whatsapp-nav"
               href="https://wa.me/628155401679?text=Halo%20JM%20Workshop%2C%20saya%20ingin%20konsultasi%20desain%20dan%20harga" 
               target="_blank" rel="noopener"
               onClick={() => trackEvent('click_whatsapp', { button_location: 'nav' })}
               className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-brand-600 active:scale-95 text-xs font-semibold transition-all shadow-md shadow-zinc-950/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Konsultasi WhatsApp
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>

          <!-- Mobile Toggle -->
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 rounded-xl hover:bg-zinc-100 transition-colors" aria-label="Toggle Menu">
            <span className="material-symbols-outlined text-2xl">{open ? 'close' : 'menu'}</span>
          </button>
        </nav>

        <!-- Mobile Drawer -->
        {open && (
          <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-xl border border-zinc-200/80 rounded-2xl shadow-xl flex flex-col gap-2">
            <a href="#layanan" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl">Layanan Bento</a>
            <a href="#portofolio" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl">Portofolio Proyek</a>
            <a href="#workflow" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl">Alur Fabrikasi</a>
            <a href="#estimasi" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl">Estimator Biaya</a>
            <a href="#faq" onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl">Tanya Jawab (FAQ)</a>
            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
              <a href="https://wa.me/628155401679?text=Halo%20JM%20Workshop%2C%20saya%20ingin%20konsultasi" 
                 target="_blank" rel="noopener"
                 onClick={() => { setOpen(false); trackEvent('click_whatsapp', { button_location: 'nav_mobile' }); }}
                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm">
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
