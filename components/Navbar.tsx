'use client'

import { useState, useEffect } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Proyek', href: '#portofolio' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kapabilitas', href: '#kapabilitas' },
    { label: 'Proses Kerja', href: '#alur-kerja' },
    { label: 'Solusi B2B', href: '#solusi-b2b' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[rgba(32,35,38,0.08)] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Identity: Typography-led */}
          <a
            href="#"
            className="flex flex-col group focus:outline-none"
            aria-label="JAYAMULYA Industrial Fabrication Studio"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B66A37] font-semibold">
              Studio Fabrikasi
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-[-0.04em] text-[#202326]">
                JAYAMULYA
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
              <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#686B6D] uppercase">
                Surabaya
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[rgba(32,35,38,0.08)] shadow-sm backdrop-blur-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#202326]/80 hover:text-[#202326] hover:bg-white rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+6281554016679"
              className="text-xs font-mono font-medium text-[#686B6D] hover:text-[#202326] transition-colors hidden lg:flex items-center gap-1.5"
            >
              <svg
                className="w-3.5 h-3.5 text-[#B66A37]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0815-5401-6679
            </a>

            <a
              href="#konfigurator"
              onClick={() => trackEvent('click_whatsapp', { button_location: 'navbar_cta' })}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#202326] hover:bg-[#B66A37] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <span>Konsultasikan Proyek</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#202326] hover:bg-black/5 focus:outline-none"
            aria-label="Buka Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-[18px] bg-white border border-[rgba(32,35,38,0.12)] shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 border-b border-[rgba(32,35,38,0.08)] pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-[#202326] hover:bg-[#F7F6F2] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#konfigurator"
                onClick={() => {
                  setMobileMenuOpen(false)
                  trackEvent('click_whatsapp', { button_location: 'navbar_mobile_cta' })
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-[8px] bg-[#B66A37] text-white font-semibold text-sm shadow-sm"
              >
                <span>Konsultasikan Proyek</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20konsultasi%20langsung%20proyek%20fabrikasi"
                target="_blank"
                rel="noopener"
                onClick={() => {
                  setMobileMenuOpen(false)
                  trackEvent('click_whatsapp', { button_location: 'navbar_mobile_wa' })
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[8px] bg-[#171A1D] text-white text-xs font-mono font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                WhatsApp: 0815-5401-6679
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
