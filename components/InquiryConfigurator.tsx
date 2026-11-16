'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/gtag'

export default function InquiryConfigurator() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    projectType: 'Container Booth',
    dimensions: '',
    location: 'Surabaya',
    timeline: 'Dalam 2-4 minggu',
    notes: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const projectTypes = [
    'Container Booth',
    'Architectural Canopy',
    'Minimalist Steel Gate',
    'Custom Metal Fabrication',
    'B2B / Multi-location Project',
  ]

  const timelineOptions = [
    'Segera (Dalam 1-2 minggu)',
    'Dalam 2-4 minggu',
    'Bulan depan / Perencanaan',
    'Fleksibel / Diskusi Proyek B2B',
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap / penanggung jawab wajib diisi'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor WhatsApp aktif wajib diisi'
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      newErrors.phone = 'Masukkan nomor WhatsApp yang valid (min. 9 digit)'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    trackEvent('generate_lead', {
      form_name: 'inquiry_configurator',
      project_type: formData.projectType,
    })

    const message = [
      'Halo JayaMulya, saya ingin konsultasi proyek fabrikasi.',
      '',
      `• Nama: ${formData.name.trim()}`,
      formData.company.trim() ? `• Perusahaan / Brand: ${formData.company.trim()}` : null,
      `• Kontak WhatsApp: ${formData.phone.trim()}`,
      `• Jenis Proyek: ${formData.projectType}`,
      `• Estimasi Ukuran / Dimensi: ${formData.dimensions.trim() || 'Perlu Rekomendasi Teknis'}`,
      `• Lokasi Proyek: ${formData.location.trim() || 'Surabaya'}`,
      `• Target Waktu: ${formData.timeline}`,
      formData.notes.trim() ? `• Catatan Kebutuhan: ${formData.notes.trim()}` : null,
      '',
      'Mohon informasi lebih lanjut mengenai spesifikasi material, detail teknis, dan estimasi penawaran tertulis. Terima kasih.',
    ]
      .filter((line) => line !== null)
      .join('\n')

    const waUrl = `https://wa.me/6281554016679?text=${encodeURIComponent(message)}`
    setSubmitted(true)

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener')
  }

  return (
    <section id="konfigurator" className="py-24 bg-[#171A1D] text-white relative overflow-hidden technical-grid-dark">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Editorial */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D19A68] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
              Konfigurator Proyek
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              Let&apos;s Discuss Your Next Project.
            </h2>

            <p className="text-base text-[#969794] leading-relaxed">
              Berikan gambaran kebutuhan Anda. Tim engineering dan fabrikasi JayaMulya akan membantu mendiskusikan spesifikasi material, perencanaan struktur, dan langkah pengerjaan selanjutnya secara transparan.
            </p>

            {/* Direct Value Highlights */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-md bg-[#B66A37]/20 border border-[#B66A37]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#D19A68]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Konsultasi Teknis &amp; Rekomendasi Material</h3>
                  <p className="text-xs text-[#969794] mt-0.5">Pemilihan hollow galvanis, WF, Alderon UPVC, atau pelat sesuai beban dan lokasi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-md bg-[#B66A37]/20 border border-[#B66A37]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#D19A68]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Survei Lokasi Terjadwal</h3>
                  <p className="text-xs text-[#969794] mt-0.5">Pengukuran langsung di wilayah Surabaya, Sidoarjo, Gresik, dan sekitarnya.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-md bg-[#B66A37]/20 border border-[#B66A37]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#D19A68]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Penawaran Tertulis &amp; Jadwal Presisi</h3>
                  <p className="text-xs text-[#969794] mt-0.5">Rincian lingkup kerja, spesifikasi komponen, dan timeline fabrikasi yang terkontrol.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-[14px] bg-[#1F2327] border border-white/5 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
              <p className="text-xs font-mono text-[#D19A68]">
                WhatsApp Resmi: +62 815-5401-6679 (Respon Aktif Hari Kerja 08:00 - 17:00 WIB)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-10 rounded-[18px] bg-[#1F2327] border border-white/10 shadow-2xl space-y-6"
            >
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">Formulir Diskusi Proyek</h3>
                <p className="text-xs text-[#969794] mt-1">Data Anda diteruskan langsung ke WhatsApp resmi JayaMulya secara instan.</p>
              </div>

              {submitted && (
                <div className="p-3.5 rounded-[8px] bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Data terformat rapi. Jendela WhatsApp telah terbuka untuk melanjutkan diskusi.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nama */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Nama Lengkap <span className="text-[#B66A37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Bpk. Hendra Wijaya"
                    className={`w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border ${
                      errors.name ? 'border-rose-500' : 'border-white/15'
                    } text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#B66A37] transition-colors`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Perusahaan / Brand */}
                <div>
                  <label htmlFor="inquiry-company" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Perusahaan / Brand <span className="text-stone-500 text-[10px]">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Contoh: Kopi Titik Temu / PT Jaya Abadi"
                    className="w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border border-white/15 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#B66A37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nomor WhatsApp */}
                <div>
                  <label htmlFor="inquiry-phone" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Nomor WhatsApp <span className="text-[#B66A37]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className={`w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border ${
                      errors.phone ? 'border-rose-500' : 'border-white/15'
                    } text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#B66A37] transition-colors`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                {/* Jenis Proyek */}
                <div>
                  <label htmlFor="inquiry-projectType" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Jenis Proyek <span className="text-[#B66A37]">*</span>
                  </label>
                  <select
                    id="inquiry-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border border-white/15 text-white text-sm focus:outline-none focus:border-[#B66A37] transition-colors cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#171A1D] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Estimasi Ukuran */}
                <div>
                  <label htmlFor="inquiry-dimensions" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Estimasi Ukuran
                  </label>
                  <input
                    type="text"
                    id="inquiry-dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="Contoh: 3x2m / 6x4m"
                    className="w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border border-white/15 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#B66A37] transition-colors"
                  />
                </div>

                {/* Lokasi Proyek */}
                <div>
                  <label htmlFor="inquiry-location" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Lokasi Proyek
                  </label>
                  <input
                    type="text"
                    id="inquiry-location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Contoh: Surabaya Barat / Sidoarjo"
                    className="w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border border-white/15 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#B66A37] transition-colors"
                  />
                </div>

                {/* Target Waktu */}
                <div>
                  <label htmlFor="inquiry-timeline" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                    Target Waktu
                  </label>
                  <select
                    id="inquiry-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border border-white/15 text-white text-sm focus:outline-none focus:border-[#B66A37] transition-colors cursor-pointer"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#171A1D] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label htmlFor="inquiry-notes" className="block text-xs font-mono uppercase tracking-wider text-[#969794] mb-2">
                  Catatan Kebutuhan / Spesifikasi Khusus
                </label>
                <textarea
                  id="inquiry-notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ceritakan detail fungsional: interior, meja stainless, instalasi listrik, warna cat, atau kebutuhan penempatan..."
                  className="w-full px-4 py-3 rounded-[8px] bg-[#171A1D] border border-white/15 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#B66A37] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2.5 shadow-copper-glow active:scale-[0.99]"
              >
                <span>Kirim Format Rencana ke WhatsApp Resmi</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-center text-[11px] font-mono text-[#969794]">
                Pesan akan diformat otomatis dan diarahkan ke WhatsApp resmi: +62 815-5401-6679
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
