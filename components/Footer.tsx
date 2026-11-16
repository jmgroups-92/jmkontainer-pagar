'use client'

import { trackEvent } from '@/lib/gtag'

export default function Footer() {
  const currentYear = 2026

  return (
    <footer className="bg-[#171A1D] text-[#969794] border-t border-[rgba(255,255,255,0.08)] text-xs" id="kontak">
      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B66A37] font-semibold">
                Industrial Fabrication Studio
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-[-0.04em] text-white">
                  JAYAMULYA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
              </div>
            </div>

            <p className="text-[#969794] leading-relaxed pr-4 text-xs">
              Studio fabrikasi custom industri dan arsitektural berbasis di Surabaya Barat sejak 2017. Menghadirkan konstruksi baja presisi, container booth komersial, kanopi premium, dan gerbang minimalis berstandar mutu tinggi.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/jayamaswood"
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent('click_instagram')}
                aria-label="Instagram Resmi JayaMulya"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#B66A37] text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://wa.me/6281554016679"
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent('click_whatsapp', { button_location: 'footer_icon' })}
                aria-label="WhatsApp Resmi JayaMulya"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#B66A37] text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Fabrication Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Bidang Fabrikasi
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Custom Container Booth &amp; Kiosks
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Architectural Canopy (WF &amp; Alderon)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Minimalist Steel Gate &amp; Fencing
                </a>
              </li>
              <li>
                <a href="#solusi-b2b" className="hover:text-white transition-colors">
                  Franchise &amp; Multi-Outlet Production
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="hover:text-white transition-colors">
                  Custom Structural Metal Fabrication
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Area Layanan SEO */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Wilayah Layanan
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/kota/surabaya" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Surabaya
                </a>
              </li>
              <li>
                <a href="/kota/sidoarjo" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Sidoarjo
                </a>
              </li>
              <li>
                <a href="/kota/gresik" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Gresik
                </a>
              </li>
              <li>
                <a href="/kota/bangkalan" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Bangkalan
                </a>
              </li>
              <li>
                <a href="/kota/lamongan" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Lamongan
                </a>
              </li>
              <li>
                <a href="/kota/pasuruan" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Pasuruan
                </a>
              </li>
              <li>
                <a href="/kota/malang" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B66A37]">•</span> Malang &amp; Batu
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Workshop & Legal Credentials */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Workshop &amp; Operasional
            </h3>
            <ul className="space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#B66A37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Rejosari Gg. Musholla Baru, RT. 01 Benowo, Pakal, Surabaya Barat, Jawa Timur 60195</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#B66A37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+6281554016679" className="hover:text-white font-mono">+62 815-5401-6679</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#B66A37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:admin@rombongkontainersurabaya.web.id" className="hover:text-white">admin@rombongkontainersurabaya.web.id</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#B66A37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Senin – Sabtu: 08:00 – 17:00 WIB</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-12 mt-12 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div>
            &copy; {currentYear} JAYAMULYA INDUSTRIAL FABRICATION STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[#686B6D]">
            <span>ENGINEERING SPECIFICATION</span>
            <span>•</span>
            <span>SURABAYA, JAWA TIMUR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
