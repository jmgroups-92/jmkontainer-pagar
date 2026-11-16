'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'
import ProjectModal from '@/components/ProjectModal'
import InquiryConfigurator from '@/components/InquiryConfigurator'
import { PORTFOLIO_ITEMS, PortfolioItem } from '@/lib/portfolio-data'
import { trackEvent } from '@/lib/gtag'

const HERO_SLIDES = [
  {
    id: 1,
    src: '/images/slider/slide-1.webp',
    title: 'Custom Container Booth 3x2m',
    category: 'Commercial F&B',
    location: 'Surabaya Timur',
    spec: 'Rangka Hollow Galvanis SNI • Meja Stainless • Hidrolik Otomatis',
  },
  {
    id: 2,
    src: '/images/slider/slide-2.webp',
    title: 'Modular F&B Kiosk Multi-Outlet',
    category: 'Commercial Kiosk',
    location: 'Sidoarjo',
    spec: 'Instalasi Listrik Terpadu • Exhaust System • Cat Duco Weather-Resistant',
  },
  {
    id: 3,
    src: '/images/slider/slide-3.webp',
    title: 'Architectural Canopy Alderon UPVC',
    category: 'Residential & Commercial',
    location: 'Pakuwon City, Surabaya',
    spec: 'Baja Profil WF • Double Layer UPVC Peredam Suhu 40% • Talang Tersembunyi',
  },
  {
    id: 4,
    src: '/images/slider/slide-4.webp',
    title: 'Minimalist Steel Sliding Gate',
    category: 'Architectural Steelwork',
    location: 'Gresik Kota Baru',
    spec: 'Hollow Tebal SNI • Rel Stainless Anti-Macet • Finishing Doff Anti-Karat',
  },
  {
    id: 5,
    src: '/images/slider/slide-5.webp',
    title: 'Precision Fabrication Workshop',
    category: 'Manufacturing Base',
    location: 'Pakal Benowo, Surabaya Barat',
    spec: 'Pengelasan CO2/MIG Presisi • Quality Control Standar Industri',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Layanan fabrikasi apa saja yang tersedia di JayaMulya?',
    a: 'JayaMulya mengkhususkan diri pada 4 pilar utama: 1) Custom Container Booth & Commercial Kiosk untuk F&B/ritel, 2) Architectural Canopy berbasis baja WF & atap Alderon UPVC, 3) Minimalist Steel Gate & pagar modern tahan karat, serta 4) Fabrikasi baja custom struktural seperti mezzanine, tangga putar, dan partisi arsitektural.',
  },
  {
    q: 'Apakah ukuran, tata letak, dan spesifikasi desain bisa disesuaikan sepenuhnya?',
    a: 'Ya, seluruh pekerjaan JayaMulya bersifat 100% custom-tailored. Tim kami menyesuaikan dimensi panjang, lebar, ketinggian, bukaan jendela/hidrolik, titik stopkontak, instalasi air, meja kerja stainless, hingga warna branding sesuai kebutuhan operasional dan denah ruang Anda.',
  },
  {
    q: 'Apakah JayaMulya melayani proyek kemitraan / franchise dengan kebutuhan multi-outlet?',
    a: 'Sangat bisa. Kami berpengalaman memproduksi unit booth berulang dengan standarisasi modul, dimensi, dan material yang konsisten untuk jaringan franchise. Jadwal produksi dan skema pengiriman dapat dijadwalkan secara bertahap.',
  },
  {
    q: 'Bagaimana proses konsultasi teknis dan survei lokasi?',
    a: 'Konsultasi awal dilakukan via WhatsApp atau telepon untuk mendiskusikan kebutuhan, estimasi ukuran, dan acuan desain. Untuk proyek canopy, pagar, atau booth terpasang di wilayah Surabaya, Sidoarjo, dan Gresik, tim kami siap melakukan survei pengukuran lokasi langsung.',
  },
  {
    q: 'Bagaimana skema penawaran harga dan pembayaran?',
    a: 'Setelah ukuran dan spesifikasi material disepakati, kami menerbitkan Surat Penawaran Harga (RAB/Quotation) resmi dan transparan tanpa biaya tersembunyi. Pembayaran dilakukan bertahap sesuai progres (DP awal pengerjaan, termin progres fabrikasi, dan pelunasan setelah QC/serah terima).',
  },
  {
    q: 'Berapa lama estimasi waktu pengerjaan sebuah proyek?',
    a: 'Rata-rata waktu pengerjaan 1 unit custom container booth berkisar antara 7 hingga 14 hari kerja tergantung kompleksitas interior dan antrian workshop. Untuk kanopi dan pagar minimalis umumnya berkisar 5 hingga 10 hari kerja dari fabrikasi hingga pemasangan di lokasi.',
  },
  {
    q: 'Apakah melayani pengiriman dan instalasi di luar kota Surabaya?',
    a: 'Ya. Selain melayani kawasan Gerbangkertosusila (Surabaya, Sidoarjo, Gresik, Bangkalan, Mojokerto, Lamongan), kami juga melayani pengiriman unit ke Malang Raya, Pasuruan, Tuban, hingga area Jawa Timur lainnya dengan armada pengiriman yang aman.',
  },
  {
    q: 'Bagaimana ketentuan garansi hasil fabrikasi konstruksi?',
    a: 'Setiap hasil fabrikasi JayaMulya disertai garansi konstruksi resmi. Kami menjamin kekokohan sambungan las struktural, fungsi mekanis engsel/hidrolik/rel, serta proteksi terhadap kebocoran kanopi dan booth.',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [filter, setFilter] = useState<'all' | 'kontainer' | 'kanopi' | 'pagar'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)

  const ITEMS_PER_PAGE = 12

  // Auto-cycle hero visual smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const filteredPortfolio =
    filter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter)

  const totalPages = Math.ceil(filteredPortfolio.length / ITEMS_PER_PAGE)
  const displayedItems = filteredPortfolio.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleFilterChange = (cat: 'all' | 'kontainer' | 'kanopi' | 'pagar') => {
    setFilter(cat)
    setCurrentPage(1)
  }

  const goToPage = (p: number) => {
    setCurrentPage(p)
    const el = document.getElementById('portofolio')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#F7F6F2] text-[#202326] min-h-screen">
      {/* SECTION 01 — PREMIUM NAVIGATION */}
      <Navbar />

      <main className="overflow-x-hidden pt-20">
        {/* SECTION 02 — CINEMATIC EDITORIAL HERO */}
        <section
          id="hero"
          className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center technical-grid border-b border-[rgba(32,35,38,0.08)] py-12 lg:py-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Asymmetric Editorial Typography */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Technical Eyebrow */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(32,35,38,0.1)] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#B66A37]"></span>
                  <span className="text-[11px] font-mono tracking-widest text-[#202326] uppercase font-semibold">
                    INDUSTRIAL FABRICATION / SURABAYA, INDONESIA
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.045em] text-[#202326] leading-[1.02]">
                  Merancang Struktur. <br />
                  <span className="text-[#B66A37]">Mewujudkan Karya.</span>
                </h1>

                {/* Supporting Body */}
                <p className="text-base sm:text-lg text-[#686B6D] max-w-2xl leading-relaxed">
                  Solusi fabrikasi custom untuk kebutuhan komersial dan arsitektural. Dikerjakan dengan presisi rekayasa baja, material terukur berstandar SNI, dan perhatian mendalam pada setiap detail sambungan.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="#konfigurator"
                    onClick={() => trackEvent('click_whatsapp', { button_location: 'hero_primary_cta' })}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-copper-glow active:scale-[0.98]"
                  >
                    <span>Konsultasikan Proyek</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <a
                    href="#portofolio"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[8px] bg-white hover:bg-[#EAE7DF] text-[#202326] border border-[rgba(32,35,38,0.12)] font-semibold text-sm transition-all duration-200 shadow-sm"
                  >
                    <span>Jelajahi Portofolio</span>
                    <span className="font-mono text-xs text-[#969794]">({PORTFOLIO_ITEMS.length}+)</span>
                  </a>
                </div>

                {/* Engineering Standards Micro-Grid */}
                <div className="pt-6 border-t border-[rgba(32,35,38,0.08)] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#686B6D]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
                    <span>Baja WF &amp; Hollow SNI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
                    <span>Alderon UPVC Original</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
                    <span>Workshop Surabaya Barat</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Large Cinematic Project Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full rounded-[18px] overflow-hidden bg-[#EAE7DF] border border-[rgba(32,35,38,0.12)] shadow-elevated">
                  
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                      
                      {/* Slide Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white z-20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-[#D19A68]">
                          <span className="uppercase tracking-wider font-semibold">{slide.category}</span>
                          <span>{slide.location}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                          {slide.title}
                        </h2>
                        <p className="text-xs text-stone-300 font-mono line-clamp-2">
                          {slide.spec}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Slide Indicators */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeSlide ? 'w-5 bg-[#B66A37]' : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 03 — COMPANY CREDENTIALS */}
        <section className="bg-white border-b border-[rgba(32,35,38,0.08)] py-12">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202326] tracking-tight font-mono">
                  2017
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#B66A37] font-semibold">
                  Tahun Didirikan
                </div>
                <p className="text-xs text-[#686B6D] pt-0.5">
                  Berpengalaman lebih dari 7 tahun dalam fabrikasi baja dan konstruksi presisi.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202326] tracking-tight font-mono">
                  500+
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#B66A37] font-semibold">
                  Proyek Terpasang
                </div>
                <p className="text-xs text-[#686B6D] pt-0.5">
                  Unit booth, kanopi, dan pagar terpasang di Surabaya &amp; sekitarnya.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202326] tracking-tight font-mono">
                  Surabaya
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#B66A37] font-semibold">
                  Basis Workshop
                </div>
                <p className="text-xs text-[#686B6D] pt-0.5">
                  Workshop berlokasi di Benowo, Pakal, Surabaya Barat dengan armada mandiri.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202326] tracking-tight font-mono">
                  Custom
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#B66A37] font-semibold">
                  Engineering Capability
                </div>
                <p className="text-xs text-[#686B6D] pt-0.5">
                  Dikerjakan mengikuti gambar kerja, kebutuhan operasional, dan beban struktural.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 04 — BRAND NARRATIVE */}
        <section id="tentang-kami" className="py-24 bg-[#171A1D] text-white technical-grid-dark relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D19A68] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
                  Filosofi Fabrikasi
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Lebih dari Sekadar Fabrikasi. <br />
                  <span className="text-[#D19A68]">Kami Membangun Kualitas yang Terukur.</span>
                </h2>

                <p className="text-base text-[#969794] leading-relaxed">
                  Setiap proyek dimulai dari pemahaman kebutuhan fungsional, pemilihan material yang sesuai kalkulasi beban, dan perencanaan pengerjaan yang terstruktur. Kami mengutamakan hasil sambungan yang presisi, konstruksi yang kokoh, serta detail finishing tahan karat yang sesuai dengan karakter setiap ruang arsitektural.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-[12px] bg-white/5 border border-white/10">
                    <span className="font-mono text-xs text-[#D19A68] uppercase tracking-wider block">Standar Material</span>
                    <p className="text-sm font-semibold text-white mt-1">Baja Profil &amp; Hollow SNI</p>
                    <p className="text-xs text-[#969794] mt-0.5">Ketebalan presisi terukur tanpa manipulasi bahan.</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-white/5 border border-white/10">
                    <span className="font-mono text-xs text-[#D19A68] uppercase tracking-wider block">Keahlian Las</span>
                    <p className="text-sm font-semibold text-white mt-1">Tukang Las Senior</p>
                    <p className="text-xs text-[#969794] mt-0.5">Pengalaman puluhan tahun pengerjaan struktur &amp; estetika.</p>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Narrative */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-[14px] overflow-hidden bg-[#1F2327] border border-white/10">
                    <Image
                      src="/images/portfolio/workshop-las-1.webp"
                      alt="Workshop Pengelasan JayaMulya"
                      fill
                      sizes="(max-width: 768px) 50vw, 320px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-mono text-white/90">Perakitan Rangka Presisi</span>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-[14px] overflow-hidden bg-[#1F2327] border border-white/10 translate-y-6">
                    <Image
                      src="/images/slider/slide-5.webp"
                      alt="Pengelasan CO2 MIG di Workshop JayaMulya"
                      fill
                      sizes="(max-width: 768px) 50vw, 320px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-mono text-white/90">Quality Control Sambungan</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 05 — CORE FABRICATION CAPABILITIES */}
        <section id="layanan" className="py-24 bg-[#F7F6F2] border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
            
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                Layanan Spesialisasi
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#202326]">
                Core Fabrication Capabilities
              </h2>
              <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                Tiga pilar layanan fabrikasi arsitektural dan komersial dengan eksekusi teknis terstandarisasi.
              </p>
            </div>

            <div className="space-y-16">
              
              {/* SERVICE A — CUSTOM CONTAINER BOOTH */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-[18px] bg-white border border-[rgba(32,35,38,0.1)] shadow-subtle">
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-[14px] overflow-hidden bg-[#EAE7DF]">
                  <Image
                    src="/images/slider/slide-1.webp"
                    alt="Custom Container Booth JayaMulya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white font-mono text-xs backdrop-blur-sm">
                    SERVICE 01
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#B66A37] font-semibold">
                    Komersial &amp; Retail F&amp;B
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202326] tracking-tight">
                    Custom Container Booth
                  </h3>
                  <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                    Booth komersial dan container kiosk yang dirancang mengikuti kebutuhan operasional, alur kerja kasir/kitchen, identitas brand, dan karakter lokasi usaha Anda.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#202326]">
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Custom Dimensions (2x1.5m s/d 6x3m)
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Rangka Hollow Galvanis SNI
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Meja Stainless &amp; Instalasi Listrik
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Jendela Hidrolik Otomatis
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20konsultasi%20pembuatan%20custom%20container%20booth"
                      target="_blank"
                      rel="noopener"
                      onClick={() => trackEvent('click_whatsapp', { button_location: 'service_booth_cta' })}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
                    >
                      <span>Konsultasikan Booth</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* SERVICE B — ARCHITECTURAL CANOPY */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-[18px] bg-white border border-[rgba(32,35,38,0.1)] shadow-subtle">
                <div className="lg:col-span-6 lg:order-2 relative aspect-[16/10] rounded-[14px] overflow-hidden bg-[#EAE7DF]">
                  <Image
                    src="/images/portfolio/kanopi-alderon-carport.webp"
                    alt="Architectural Canopy Alderon UPVC JayaMulya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white font-mono text-xs backdrop-blur-sm">
                    SERVICE 02
                  </span>
                </div>

                <div className="lg:col-span-6 lg:order-1 space-y-5">
                  <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#B66A37] font-semibold">
                    Arsitektural &amp; Perlindungan Ruang
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202326] tracking-tight">
                    Architectural Canopy
                  </h3>
                  <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                    Solusi kanopi modern dengan konstruksi baja WF dan hollow galvanis yang dirancang untuk menghasilkan perlindungan maksimal terhadap panas/hujan serta tampilan arsitektural yang harmonis.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#202326]">
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Atap Alderon UPVC Double Layer
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Redam Panas 40% &amp; Hening Hujan
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Rangka Profil WF / Besi Hollow SNI
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Talang Air Terintegrasi Anti Bocor
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20konsultasi%20pembuatan%20kanopi"
                      target="_blank"
                      rel="noopener"
                      onClick={() => trackEvent('click_whatsapp', { button_location: 'service_canopy_cta' })}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
                    >
                      <span>Konsultasikan Kanopi</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* SERVICE C — MINIMALIST STEEL GATE */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-[18px] bg-white border border-[rgba(32,35,38,0.1)] shadow-subtle">
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-[14px] overflow-hidden bg-[#EAE7DF]">
                  <Image
                    src="/images/portfolio/pagar-minimalis-modern.webp"
                    alt="Minimalist Steel Gate JayaMulya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white font-mono text-xs backdrop-blur-sm">
                    SERVICE 03
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#B66A37] font-semibold">
                    Keamanan &amp; Fasad Bangunan
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202326] tracking-tight">
                    Minimalist Steel Gate &amp; Fence
                  </h3>
                  <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                    Pagar dan gerbang custom dengan desain modern, struktur presisi, rel stainless enteng, serta pilihan kombinasi material yang disesuaikan dengan fasad bangunan hunian maupun komersial.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#202326]">
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Sliding Gate / Swing Gate Kokoh
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Kombinasi Woodplank / Laser Cut
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Rel Stainless Steel Anti-Macet
                    </div>
                    <div className="p-3 rounded-[8px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.06)]">
                      • Cat Primer Epoxy Anti Karat
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20konsultasi%20pembuatan%20pagar%20besi%20custom"
                      target="_blank"
                      rel="noopener"
                      onClick={() => trackEvent('click_whatsapp', { button_location: 'service_gate_cta' })}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
                    >
                      <span>Konsultasikan Pagar</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 06 — SIGNATURE PROJECT PORTFOLIO */}
        <section id="portofolio" className="py-24 bg-white border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
            
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(32,35,38,0.08)]">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                  Portofolio Fabrikasi Terverifikasi
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#202326]">
                  Selected Fabrication Projects
                </h2>
                <p className="text-sm text-[#686B6D] max-w-xl">
                  Dokumentasi autentik hasil fabrikasi bengkel JayaMulya dari workshop hingga instalasi rapi di lokasi pelanggan.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: 'all', label: 'Semua Proyek' },
                  { key: 'kontainer', label: 'Container Booth' },
                  { key: 'kanopi', label: 'Architectural Canopy' },
                  { key: 'pagar', label: 'Steel Gate' },
                ].map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => handleFilterChange(cat.key as any)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 ${
                      filter === cat.key
                        ? 'bg-[#202326] text-white shadow-sm'
                        : 'bg-[#F7F6F2] hover:bg-[#EAE7DF] text-[#686B6D] border border-[rgba(32,35,38,0.08)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Grid: Editorial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="group cursor-pointer rounded-[18px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.08)] overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Restrained Zoom */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE7DF]">
                    <Image
                      src={item.src}
                      alt={item.alt || item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white uppercase tracking-wider">
                      {item.badge}
                    </div>
                  </div>

                  {/* Meta & Title */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#686B6D]">
                        <span>ID #{item.id}</span>
                        <span>{item.loc}</span>
                      </div>
                      <h3 className="font-bold text-base text-[#202326] group-hover:text-[#B66A37] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#686B6D] line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[rgba(32,35,38,0.06)] flex items-center justify-between text-xs font-semibold text-[#B66A37]">
                      <span>Lihat Spesifikasi Lengkap</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-8 border-t border-[rgba(32,35,38,0.08)] flex items-center justify-center gap-2">
                <button
                  onClick={() => goToPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-[8px] bg-white border border-[rgba(32,35,38,0.12)] text-xs font-semibold text-[#202326] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F7F6F2] transition-colors"
                >
                  Sebelumnya
                </button>

                <div className="flex items-center gap-1 font-mono text-xs text-[#686B6D] px-3">
                  <span>Halaman</span>
                  <strong className="text-[#202326]">{currentPage}</strong>
                  <span>dari {totalPages}</span>
                </div>

                <button
                  onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-[8px] bg-white border border-[rgba(32,35,38,0.12)] text-xs font-semibold text-[#202326] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F7F6F2] transition-colors"
                >
                  Berikutnya
                </button>
              </div>
            )}

          </div>
        </section>

        {/* SECTION 07 — MANUFACTURING EXCELLENCE */}
        <section id="kapabilitas" className="py-24 bg-[#F7F6F2] border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
            
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                Proses Manufaktur Terukur
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#202326]">
                Built with Precision. Finished with Purpose.
              </h2>
              <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                Tahapan pengerjaan di workshop JayaMulya Pakal Benowo yang memadukan rekayasa teknis, kerapian pengelasan, dan kontrol kualitas ketat.
              </p>
            </div>

            {/* 5-Step Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 shadow-subtle">
                <span className="font-mono text-xl font-extrabold text-[#B66A37]">01</span>
                <h3 className="font-bold text-base text-[#202326]">Material Selection</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Pemilihan material baja profil WF dan hollow galvanis BSI/Spindo SNI sesuai kalkulasi beban konstruksi dan lokasi proyek.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 shadow-subtle">
                <span className="font-mono text-xl font-extrabold text-[#B66A37]">02</span>
                <h3 className="font-bold text-base text-[#202326]">Cutting &amp; Preparation</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Pengukuran mikro dan pemotongan material presisi sudut 45° &amp; 90° dengan toleransi ketat sebelum perakitan.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 shadow-subtle">
                <span className="font-mono text-xl font-extrabold text-[#B66A37]">03</span>
                <h3 className="font-bold text-base text-[#202326]">Welding &amp; Assembly</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Perakitan struktur dengan pengelasan CO2 / MIG solid untuk memastikan sambungan kokoh, padat, dan bebas retak struktural.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 shadow-subtle">
                <span className="font-mono text-xl font-extrabold text-[#B66A37]">04</span>
                <h3 className="font-bold text-base text-[#202326]">Finishing &amp; Protection</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Aplikasi epoxy primer anti-karat disusul pengecatan duco premium atau powder coating berdaya tahan cuaca tropis ekstrem.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 shadow-subtle">
                <span className="font-mono text-xl font-extrabold text-[#B66A37]">05</span>
                <h3 className="font-bold text-base text-[#202326]">Quality Control</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Inspeksi dimensional, uji kekedapan air/kebocoran, dan uji fungsionalitas engsel/hidrolik sebelum proses pengiriman.
                </p>
              </div>

            </div>

            {/* Workshop Authenticity Strip */}
            <div className="p-8 rounded-[18px] bg-[#EAE7DF] border border-[rgba(32,35,38,0.12)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-bold text-base text-[#202326]">Ingin meninjau pengerjaan langsung di workshop?</h4>
                <p className="text-xs text-[#686B6D]">
                  Kami mengundang Anda melihat proses perakitan dan kualitas material kami di Jl. Rejosari Gg. Musholla Baru, Pakal Benowo, Surabaya Barat.
                </p>
              </div>
              <a
                href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20jadwalkan%20kunjungan%20ke%20workshop"
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent('click_whatsapp', { button_location: 'workshop_visit_cta' })}
                className="shrink-0 px-6 py-3 rounded-[8px] bg-[#202326] hover:bg-[#B66A37] text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
              >
                Jadwalkan Kunjungan Workshop
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 08 — B2B & COMMERCIAL SOLUTIONS */}
        <section id="solusi-b2b" className="py-24 bg-white border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
            
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                Kemitraan Korporat &amp; Komersial
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#202326]">
                Your Fabrication Partner for Business Expansion.
              </h2>
              <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                Dari satu unit booth hingga kebutuhan pengembangan multi-lokasi usaha, JayaMulya siap mendiskusikan solusi fabrikasi sesuai spesifikasi brand dan kebutuhan operasional bisnis Anda.
              </p>
            </div>

            {/* 4 Audience Segments */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-[18px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.08)] space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#B66A37]/10 flex items-center justify-center text-[#B66A37]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-[#202326]">Franchise &amp; F&amp;B Brands</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Standarisasi dimensi, konsistensi warna brand, dan kesiapan produksi repeat order untuk ekspansi mitra franchise.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.08)] space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#B66A37]/10 flex items-center justify-center text-[#B66A37]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-[#202326]">Cafe &amp; Restaurant Chains</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Solusi booth semi-permanen, outdoor seating canopy, serta counter bar berdaya tahan cuaca dan mudah dirawat.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.08)] space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#B66A37]/10 flex items-center justify-center text-[#B66A37]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-[#202326]">Commercial Properties</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Pengembangan pujasera, sentra kuliner, area drop-off ruko, shelter keamanan, dan tenant kios kawasan terpadu.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.08)] space-y-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#B66A37]/10 flex items-center justify-center text-[#B66A37]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-[#202326]">Architects &amp; Contractors</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Mitra sub-kontraktor fabrikasi baja terpercaya untuk eksekusi gambar kerja kanopi, railing, fasad, dan gate presisi.
                </p>
              </div>

            </div>

            {/* B2B Call to Action */}
            <div className="p-8 sm:p-10 rounded-[18px] bg-[#171A1D] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Punya Proyek B2B atau Rencana Multi-Unit?</h3>
                <p className="text-xs sm:text-sm text-[#969794]">
                  Konsultasikan spesifikasi teknis, perkiraan kuantitas, dan target jadwal dengan tim engineering kami.
                </p>
              </div>
              <a
                href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20fabrikasi%20untuk%20proyek%20bisnis%2Ffranchise"
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent('click_whatsapp', { button_location: 'b2b_section_cta' })}
                className="shrink-0 px-8 py-3.5 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-xs tracking-wide transition-all shadow-copper-glow"
              >
                Diskusikan Kebutuhan Proyek B2B
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 09 — PROJECT WORKFLOW */}
        <section id="alur-kerja" className="py-24 bg-[#F7F6F2] border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
            
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                Alur Pengerjaan Terstruktur
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#202326]">
                Clear Process. Controlled Execution.
              </h2>
              <p className="text-sm sm:text-base text-[#686B6D] leading-relaxed">
                Lima tahap terencana untuk memastikan setiap proyek terealisasi sesuai spesifikasi, anggaran, dan target waktu.
              </p>
            </div>

            {/* 5-Step Execution Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              
              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 relative shadow-subtle">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F7F6F2] text-[#B66A37] font-bold">
                  STEP 01
                </span>
                <h3 className="font-bold text-base text-[#202326]">Consultation</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Memahami kebutuhan, fungsi operasional, lokasi penempatan, dan estimasi ukuran yang diinginkan.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 relative shadow-subtle">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F7F6F2] text-[#B66A37] font-bold">
                  STEP 02
                </span>
                <h3 className="font-bold text-base text-[#202326]">Survey &amp; Measurement</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Peninjauan lokasi dan pengukuran fisik terinci untuk memastikan kesesuaian bentang struktur dan elevasi.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 relative shadow-subtle">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F7F6F2] text-[#B66A37] font-bold">
                  STEP 03
                </span>
                <h3 className="font-bold text-base text-[#202326]">Design &amp; Quotation</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Pembahasan spesifikasi material, detail teknis, estimasi waktu, dan penawaran biaya tertulis yang transparan.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 relative shadow-subtle">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F7F6F2] text-[#B66A37] font-bold">
                  STEP 04
                </span>
                <h3 className="font-bold text-base text-[#202326]">Fabrication</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Produksi di workshop JayaMulya Pakal Benowo dengan tahapan QC bertahap dari pemotongan hingga pengecatan.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[rgba(32,35,38,0.08)] space-y-3 relative shadow-subtle">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F7F6F2] text-[#B66A37] font-bold">
                  STEP 05
                </span>
                <h3 className="font-bold text-base text-[#202326]">Delivery &amp; Installation</h3>
                <p className="text-xs text-[#686B6D] leading-relaxed">
                  Pengiriman armada aman, instalasi rapi di lokasi, pengujian fungsional, dan serah terima garansi resmi.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 10 — PROJECT INQUIRY CONFIGURATOR */}
        <InquiryConfigurator />

        {/* SECTION 11 — FAQ */}
        <section id="faq" className="py-24 bg-white border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-4 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                  Tanya Jawab Teknis
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#202326]">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-[#686B6D] leading-relaxed">
                  Hal-hal penting seputar kapabilitas pengerjaan, ketentuan survei, proses pemesanan, dan garansi resmi JayaMulya.
                </p>

                <div className="pt-4">
                  <a
                    href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20menanyakan%20hal%20lain%20terkait%20layanan%20fabrikasi"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#B66A37] hover:text-[#A0592C] transition-colors"
                  >
                    <span>Ada pertanyaan spesifik lain? Hubungi Kami</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Accordion Column */}
              <div className="lg:col-span-8 divide-y divide-[rgba(32,35,38,0.08)] border-y border-[rgba(32,35,38,0.08)]">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div key={idx} className="py-5">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-base text-[#202326] group-hover:text-[#B66A37] transition-colors">
                          {item.q}
                        </span>
                        <span className="shrink-0 p-1 rounded-full bg-[#F7F6F2] text-[#202326] group-hover:bg-[#B66A37] group-hover:text-white transition-colors">
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-3 pr-8 text-sm text-[#686B6D] leading-relaxed animate-in fade-in duration-200">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 12 — PREMIUM CLOSING CTA */}
        <section className="py-24 bg-[#171A1D] text-white relative overflow-hidden technical-grid-dark">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D19A68] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
              Mulai Proyek Anda
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
              Let&apos;s Build Something Exceptional.
            </h2>

            <p className="text-base sm:text-lg text-[#969794] max-w-2xl mx-auto leading-relaxed">
              Setiap proyek memiliki karakter, tantangan, dan kebutuhan fungsional tersendiri. Mari diskusikan solusi fabrikasi yang tepat, presisi, dan tahan lama bersama JayaMulya.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#konfigurator"
                onClick={() => trackEvent('click_whatsapp', { button_location: 'closing_primary_cta' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-sm tracking-wide transition-all shadow-copper-glow active:scale-[0.98]"
              >
                <span>Konsultasikan Proyek Sekarang</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="https://wa.me/6281554016679?text=Halo%20JayaMulya%2C%20saya%20ingin%20konsultasi%20langsung%20dengan%20tim%20engineering"
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent('click_whatsapp', { button_location: 'closing_secondary_cta' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-all"
              >
                <span>Chat WhatsApp Engineering</span>
              </a>
            </div>

            <div className="pt-6 text-xs font-mono text-[#686B6D]">
              JAYAMULYA FABRICATION STUDIO • WORKSHOP PAKAL BENOWO, SURABAYA BARAT
            </div>

          </div>
        </section>

      </main>

      {/* SECTION 13 — FOOTER */}
      <Footer />

      {/* FLOATING ACTION & BACK TO TOP */}
      <FloatingWA />

      {/* PROJECT DETAIL MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
