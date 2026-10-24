'use client'
import { trackEvent } from '@/lib/gtag'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800 text-xs" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white font-mono font-black text-xs shadow-md">
              JM
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight block">JM Kontainer Surabaya</span>
              <span className="text-amber-400 text-[10px] font-mono tracking-wider">Spesialis Fabrikasi &amp; Bengkel Las</span>
            </div>
          </div>
          <p className="leading-relaxed text-stone-400">
            Penyedia fabrikasi rombong kontainer UMKM modular, kanopi alderon peredam panas, dan pagar minimalis modern berstandar SNI di Jawa Timur sejak 2017.
          </p>
          <div className="flex items-center gap-3 text-stone-300">
            <a href="https://www.instagram.com/jayamaswood" target="_blank" rel="noopener" 
               onClick={() => trackEvent('click_instagram')}
               className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors" aria-label="Instagram">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </a>
            <a href="https://wa.me/628155401679" target="_blank" rel="noopener"
               onClick={() => trackEvent('click_whatsapp', { button_location: 'footer' })}
               className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors" aria-label="WhatsApp">
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
          </div>
        </div>

        {/* Layanan Links */}
        <div>
          <h4 className="text-amber-400 font-mono uppercase tracking-widest font-bold mb-4">Layanan Utama</h4>
          <ul className="space-y-2.5">
            <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Rombong Kontainer Surabaya</a></li>
            <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Container Booth UMKM Modern</a></li>
            <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Kanopi Alderon UPVC Sejuk</a></li>
            <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Pagar Besi Minimalis &amp; Gate</a></li>
            <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Tangga Putar &amp; Mezzanine</a></li>
          </ul>
        </div>

        {/* Area Layanan */}
        <div>
          <h4 className="text-amber-400 font-mono uppercase tracking-widest font-bold mb-4">Jangkauan Wilayah</h4>
          <ul className="space-y-2.5 text-stone-300">
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Surabaya (Pusat, Barat, Timur, Selatan, Utara)</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Sidoarjo (Waru, Gedangan, Porong)</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Gresik (Driyorejo, Kebomas, Manyar)</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Mojokerto &amp; Lamongan</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-amber-400 font-mono uppercase tracking-widest font-bold mb-4">Workshop &amp; Kontak</h4>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-amber-400 text-sm mt-0.5">location_on</span>
              <span>Jl. Rejosari Gg. Musholla Baru, RT. 01 Benowo, Pakal, Surabaya Barat</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400 text-sm">call</span>
              <a href="tel:+628155401679" className="hover:text-white font-mono">+62 815-5401-6679</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400 text-sm">mail</span>
              <a href="mailto:admin@rombongkontainersurabaya.web.id" className="hover:text-white">admin@rombongkontainersurabaya.web.id</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400 text-sm">schedule</span>
              <span>Senin - Sabtu: 08:00 - 17:00 WIB</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
        <p>&copy; 2017 - 2026 JM Kontainer &amp; Workshop Surabaya. All Rights Reserved.</p>
        <div className="flex gap-4 text-stone-400">
          <a href="#layanan" className="hover:text-amber-400">Privasi</a>
          <a href="#layanan" className="hover:text-amber-400">Syarat &amp; Ketentuan</a>
          <a href="https://rombongkontainersurabaya.web.id/" className="hover:text-amber-400">rombongkontainersurabaya.web.id</a>
        </div>
      </div>
    </footer>
  )
}
