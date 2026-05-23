'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        <div className="font-display text-xl font-extrabold text-black flex items-center gap-2">
          <span className="w-8 h-8 bg-black text-[#F59E0B] flex items-center justify-center rounded text-sm">JM</span>
          <span className="hidden sm:inline">Workshop Surabaya</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {[['#layanan','Layanan'],['#produk','Produk Kami'],['#tentang','Tentang'],['#kontak','Kontak']].map(([href,label]) => (
            <a key={href} href={href} className="text-gray-500 hover:text-black transition-colors text-sm font-semibold tracking-wide">{label}</a>
          ))}
          <a id="btn-whatsapp-nav" href="https://wa.me/628155401679?text=Halo%20JM%20Workshop" target="_blank" rel="noopener"
            onClick={() => trackEvent('click_whatsapp', { button_location: 'nav' })}
            className="ml-2 px-5 py-2 bg-[#22C55E] text-white text-sm font-semibold rounded-lg hover:brightness-95 active:scale-95 transition-all shadow">
            Konsultasi Gratis
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {[['#layanan','Layanan'],['#produk','Produk Kami'],['#tentang','Tentang'],['#kontak','Kontak']].map(([href,label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-gray-600 font-semibold py-2">{label}</a>
          ))}
          <a href="https://wa.me/628155401679" target="_blank" rel="noopener"
            onClick={() => trackEvent('click_whatsapp', { button_location: 'nav_mobile' })}
            className="bg-[#22C55E] text-white text-center py-2 rounded-lg font-semibold">
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  )
}
