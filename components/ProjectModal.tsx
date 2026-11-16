'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { PortfolioItem } from '@/lib/portfolio-data'
import { trackEvent } from '@/lib/gtag'

interface ProjectModalProps {
  project: PortfolioItem | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const categoryLabels: Record<string, string> = {
    kontainer: 'Custom Container Booth',
    kanopi: 'Architectural Canopy',
    pagar: 'Minimalist Steel Gate',
  }

  const categoryName = categoryLabels[project.category] || 'Fabrikasi Baja Custom'

  const inquiryUrl = `https://wa.me/6281554016679?text=${encodeURIComponent(
    `Halo JayaMulya, saya tertarik berkonsultasi mengenai proyek referensi: "${project.title}" (${categoryName} - Lokasi: ${project.loc}). Mohon informasi spesifikasi teknis dan estimasi penawarannya.`
  )}`

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F6F2] text-[#202326] rounded-[18px] border border-[rgba(32,35,38,0.12)] shadow-2xl z-10">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[rgba(32,35,38,0.08)]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B66A37] font-semibold">
              ID #{project.id}
            </span>
            <span className="text-[rgba(32,35,38,0.2)]">•</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[rgba(32,35,38,0.08)] text-[#202326]">
              {categoryName}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#686B6D] hover:text-[#202326] hover:bg-black/5 transition-colors focus:outline-none"
            aria-label="Tutup dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Visual */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[14px] overflow-hidden bg-[#EAE7DF] border border-[rgba(32,35,38,0.08)]">
            <Image
              src={project.src}
              alt={project.alt || project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          {/* Title & Metadata Grid */}
          <div className="space-y-4">
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#202326]"
            >
              {project.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-[12px] bg-white border border-[rgba(32,35,38,0.08)]">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#686B6D]">
                  Lokasi Proyek
                </span>
                <span className="text-sm font-semibold text-[#202326] mt-0.5 block">
                  {project.loc || 'Surabaya & Sekitarnya'}
                </span>
              </div>

              <div className="p-3.5 rounded-[12px] bg-white border border-[rgba(32,35,38,0.08)]">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#686B6D]">
                  Spesifikasi / Dimensi
                </span>
                <span className="text-sm font-semibold text-[#202326] mt-0.5 block">
                  {project.dim || 'Kustom Sesuai Kebutuhan Ruang'}
                </span>
              </div>

              <div className="p-3.5 rounded-[12px] bg-white border border-[rgba(32,35,38,0.08)]">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#686B6D]">
                  Standar Mutu
                </span>
                <span className="text-sm font-semibold text-[#202326] mt-0.5 block">
                  Baja SNI &amp; Finishing Anti-Karat
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="pt-2 text-sm text-[#686B6D] leading-relaxed">
              <p>{project.desc}</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[rgba(32,35,38,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#969794] font-mono">
              Dokumentasi asli fabrikasi bengkel JayaMulya.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-[8px] border border-[rgba(32,35,38,0.12)] text-xs font-semibold text-[#202326] hover:bg-white transition-colors"
              >
                Tutup
              </button>

              <a
                href={inquiryUrl}
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent('click_whatsapp', { button_location: 'modal_project_cta' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white text-xs font-semibold tracking-wide transition-all duration-150 shadow-sm"
              >
                <span>Konsultasikan Spesifikasi Ini</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
