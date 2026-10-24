'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'
import TrackingEvents from '@/components/TrackingEvents'
import { trackEvent } from '@/lib/gtag'

// 5 Real Gallery Images from D:\Codes\bisnis\jmkontainer-pagar\public\gallery
const HERO_SLIDES = [
  {
    id: 1,
    src: '/images/slider/slide-1.jpg',
    title: 'Rombong Kontainer F&B Modern 3x2m',
    location: 'Surabaya Timur',
    spec: 'Hollow Galvanis • Cat Duco Ivory Gold • Hidrolik Otomatis',
  },
  {
    id: 2,
    src: '/images/slider/slide-2.jpg',
    title: 'Booth Kontainer Cafe Modular Siap Pakai',
    location: 'Sidoarjo Kota',
    spec: 'Instalasi Listrik Terpadu • Meja Stainless • Anti Bocor',
  },
  {
    id: 3,
    src: '/images/slider/slide-3.jpg',
    title: 'Kanopi Alderon UPVC Double Layer Carport',
    location: 'Pakuwon City, Surabaya',
    spec: 'Peredam Panas 40% • Rangka Kokoh WF • Garansi 10 Tahun',
  },
  {
    id: 4,
    src: '/images/slider/slide-4.jpg',
    title: 'Pagar Besi Minimalis Powder Coating Elegan',
    location: 'Gresik Kota Baru',
    spec: 'Besi Hollow Tebal SNI • Rel Stainless Anti Seret',
  },
  {
    id: 5,
    src: '/images/slider/slide-5.jpg',
    title: 'Pengerjaan & Perakitan Presisi di Workshop',
    location: 'Workshop JM Kontainer Surabaya',
    spec: 'Tukang Las Berpengalaman 7+ Tahun • QC Presisi',
  },
]

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'kontainer',
    src: '/images/portfolio/rombong-kontainer-1.webp',
    badge: 'Rombong Kontainer',
    dim: 'Ukuran: 3.0 x 2.0 x 2.2 m',
    loc: 'Surabaya Barat',
    title: 'Booth Kontainer F&B Premium',
    desc: 'Desain minimalis modern dengan warna ivory & gold accent, meja kerja stainless, siap langsung jualan.',
    waText: 'Halo JM Kontainer, saya tertarik dengan Booth Kontainer F&B Premium ukuran 3x2m'
  },
  {
    id: 2,
    category: 'kontainer',
    src: '/images/portfolio/booth-cafe-1.webp',
    badge: 'Booth Cafe UMKM',
    dim: 'Ukuran: 2.5 x 2.0 x 2.1 m',
    loc: 'Sidoarjo',
    title: 'Kios Kontainer Kopi Kekinian',
    desc: 'Jendela hidrolik buka-tutup ringan, exhaust fan ready, dan finishing anti-karat tahan cuaca tropis.',
    waText: 'Halo JM Kontainer, saya tertarik dengan Kios Kontainer Kopi Kekinian'
  },
  {
    id: 3,
    category: 'kanopi',
    src: '/images/portfolio/kanopi-alderon-1.webp',
    badge: 'Kanopi Alderon UPVC',
    dim: 'Ukuran: 6.0 x 4.5 m (Carport)',
    loc: 'Pakuwon, Surabaya',
    title: 'Kanopi Alderon UPVC Sejuk Carport',
    desc: 'Sangat sejuk di siang hari dan senyap saat hujan deras, rangka besi WF / hollow galvanis kokoh.',
    waText: 'Halo JM Kontainer, saya ingin estimasi biaya pasang Kanopi Alderon'
  },
  {
    id: 4,
    category: 'pagar',
    src: '/images/portfolio/pagar-minimalis-1.webp',
    badge: 'Pagar Minimalis Modern',
    dim: 'Tinggi: 1.8 m • Panjang: 4.5 m',
    loc: 'Surabaya Timur',
    title: 'Pagar Besi Minimalis & Security Gate',
    desc: 'Finishing cat powder coat hitam doff anti-karat, roda bearing stainless super enteng didorong.',
    waText: 'Halo JM Kontainer, saya ingin konsultasi model Pagar Besi Minimalis'
  },
  {
    id: 5,
    category: 'kontainer',
    src: '/images/portfolio/workshop-las-1.webp',
    badge: 'Workshop Pengerjaan',
    dim: 'Kapasitas 15 Unit / Bulan',
    loc: 'Workshop Gresik-Surabaya',
    title: 'Fabrikasi Rangka Kuat Standar SNI',
    desc: 'Pengelasan full weld rapi, struktur diuji beban sebelum dikirim ke lokasi pemesan.',
    waText: 'Halo JM Kontainer, saya ingin jadwal survei lokasi dan konsultasi langsung'
  },
  {
    id: 6,
    category: 'kontainer',
    src: '/images/portfolio/rombong-kontainer-2.webp',
    badge: 'Booth Franchise',
    dim: 'Ukuran: 2.0 x 1.5 x 2.0 m',
    loc: 'Gresik Kota',
    title: 'Booth Kontainer Mini Streetfood',
    desc: 'Praktis, hemat tempat, cocok untuk food court outdoor maupun trotoar usaha kemitraan.',
    waText: 'Halo JM Kontainer, saya ingin penawaran Booth Kontainer Mini Streetfood'
  }
]

const FAQS = [
  {
    q: 'Berapa lama proses pembuatan satu unit Rombong Kontainer?',
    a: 'Rata-rata waktu pengerjaan berkisar antara 7 hingga 14 hari kerja, tergantung ukuran dan aksesoris kelistrikan/interior yang Anda pilih.'
  },
  {
    q: 'Apakah survei lokasi dan konsultasi benar-benar gratis?',
    a: 'Ya, 100% GRATIS tanpa biaya tersembunyi untuk wilayah Surabaya, Sidoarjo, dan Gresik. Tim kami siap datang membawa meteran presisi dan katalog material.'
  },
  {
    q: 'Bagaimana garansi pengerjaan di JM Kontainer?',
    a: 'Setiap unit rombong kontainer, kanopi, maupun pagar memiliki garansi konstruksi. Jika ada kendala kebocoran atau struktur, teknisi kami segera datang memperbaiki.'
  },
  {
    q: 'Bisa melayani pengiriman ke luar kota?',
    a: 'Tentu bisa. Kami melayani seluruh area Jawa Timur (Surabaya, Sidoarjo, Gresik, Mojokerto, Lamongan, Malang, dll) dengan armada pengiriman aman langsung sampai lokasi Anda.'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [filter, setFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Form State
  const [service, setService] = useState('Rombong Kontainer / Booth UMKM')
  const [dim, setDim] = useState('')
  const [city, setCity] = useState('Surabaya')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')

  // Auto-play Slider every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent('generate_lead', { form_name: 'quote_calculator' })
    const msg = `Halo JM Kontainer Surabaya,\n\nSaya ingin konsultasi dan minta estimasi biaya:\n• *Nama / Usaha:* ${name || 'Pelanggan'}\n• *Layanan:* ${service}\n• *Ukuran / Dimensi:* ${dim || 'Sesuai Rekomendasi'}\n• *Lokasi Kota:* ${city}\n• *Catatan:* ${notes || '-'}\n\nMohon info harga terbaik dan jadwal survei gratisnya. Terima kasih!`
    window.open(`https://wa.me/628155401679?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  const filteredPortfolio = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter)

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      
      {/* ═══ 1. TOP ANNOUNCEMENT BANNER ═══ */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2.5 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-amber-400 animate-pulse mr-1"></span>
            <span className="font-semibold text-stone-100">Buka Batch Baru Pembuatan Rombong Kontainer &amp; Kanopi</span>
            <span className="hidden md:inline text-stone-400">— Pengerjaan Cepat 7-14 Hari Kerja <strong className="text-amber-400 font-normal">(sesuai antrian Order)</strong></span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span className="hidden sm:inline font-medium">Kami Pengalaman Lebih dari 7 Tahun, <strong className="text-amber-400">Sejak 2017</strong></span>
            <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20saya%20mau%20order%20batch%20baru%20dan%20ambil%20promo%20survei%20gratis" 
               target="_blank" rel="noopener"
               className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2">Klaim Promo Survei Gratis &rarr;</a>
          </div>
        </div>
      </div>

      <Navbar />

      <main className="overflow-x-hidden">

        {/* ═══ 2. HERO SECTION WITH IMAGE SLIDER (IVORY / GOLD THEME) ═══ */}
        <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 light-grid-pattern overflow-hidden" id="hero-slider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Value Prop & CTAs */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Pill Tag & Batch Alert */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-sm text-xs font-semibold text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    <span className="font-mono text-amber-700 font-bold uppercase tracking-wider">Pengalaman 7+ Tahun • Sejak 2017</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 shadow-sm text-xs font-bold text-amber-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Buka Batch Baru • Pengerjaan Cepat 7-14 Hari Kerja</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                  Spesialis <span className="text-amber-700">Rombong Kontainer</span> UMKM, Kanopi &amp; Pagar Minimalis.
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                  Solusi booth usaha kekinian, kanopi sejuk anti-bocor, dan pagar kokoh presisi berstandar SNI. Kami melayani seluruh generasi pengusaha kuliner hingga pemilik hunian di Jawa Timur.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20saya%20ingin%20konsultasi%20desain%20dan%20survei%20gratis" 
                     target="_blank" rel="noopener"
                     onClick={() => trackEvent('click_whatsapp', { button_location: 'hero_primary' })}
                     className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-base transition-all shadow-gold-glow hover:-translate-y-0.5 active:scale-95">
                    <span>💬 Konsultasi &amp; Survei Gratis</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                  <a href="#portofolio" 
                     className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-base transition-all shadow-sm">
                    <span>Lihat Portofolio (500+)</span>
                  </a>
                </div>

                {/* Trust Points */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-center">
                  <div className="p-2 bg-white/70 backdrop-blur-sm rounded-xl border border-stone-200">
                    <div className="text-2xl font-black text-amber-700 font-mono">500+</div>
                    <div className="text-[11px] text-stone-600 font-medium mt-0.5">Proyek Selesai</div>
                  </div>
                  <div className="p-2 bg-white/70 backdrop-blur-sm rounded-xl border border-stone-200">
                    <div className="text-2xl font-black text-amber-700 font-mono">7+ Thn</div>
                    <div className="text-[11px] text-stone-600 font-medium mt-0.5">Pengalaman Las</div>
                  </div>
                  <div className="p-2 bg-white/70 backdrop-blur-sm rounded-xl border border-stone-200">
                    <div className="text-2xl font-black text-amber-700 font-mono">100%</div>
                    <div className="text-[11px] text-stone-600 font-medium mt-0.5">Material SNI Asli</div>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero Slider with Watermark "JM Kontainer" */}
              <div className="lg:col-span-6">
                <div className="relative bg-white rounded-3xl p-3 border border-stone-200 shadow-xl overflow-hidden group">
                  
                  {/* Slider Container */}
                  <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-stone-100">
                    {HERO_SLIDES.map((slide, index) => (
                      <div 
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}>
                        <Image 
                          src={slide.src} 
                          alt={slide.title} 
                          fill 
                          priority={index === 0}
                          className="object-cover" 
                        />

                        {/* Subtle dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                        {/* 🔒 WATERMARK "JM KONTAINER" (Prominent & Professional) */}
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-none select-none">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          <span className="font-mono font-extrabold text-xs tracking-wider uppercase">JM Kontainer</span>
                          <span className="text-[10px] text-stone-300 font-mono font-medium">• Surabaya</span>
                        </div>

                        {/* Slide Caption Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase mb-1.5">
                            {slide.location}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-stone-200 mt-1 line-clamp-1 drop-shadow">
                            {slide.spec}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Left & Right Slider Arrows */}
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-stone-800 backdrop-blur-md flex items-center justify-center shadow-lg transition-all active:scale-95"
                      aria-label="Previous Slide">
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-stone-800 backdrop-blur-md flex items-center justify-center shadow-lg transition-all active:scale-95"
                      aria-label="Next Slide">
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                  </div>

                  {/* Slide Indicators Dots */}
                  <div className="flex items-center justify-between px-2 pt-3">
                    <span className="text-xs font-mono text-stone-500 font-semibold">
                      Dokumentasi Hasil Jadi Lapangan (100% Asli)
                    </span>
                    <div className="flex items-center gap-1.5">
                      {HERO_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentSlide ? 'w-6 bg-amber-600' : 'w-2 bg-stone-300'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ═══ 3. BENTO SERVICES (LIGHT ELEGANT IVORY & GOLD) ═══ */}
        <section className="py-16 lg:py-24 bg-white border-t border-stone-200" id="layanan">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                  Katalog Layanan
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
                  Fabrikasi Presisi Berkualitas Tinggi
                </h2>
              </div>
              <p className="text-stone-600 max-w-md text-sm leading-relaxed">
                Kami melayani pembuatan custom sesuai luasan tempat dan anggaran Anda. Rapi, kokoh, dan bergaransi resmi dari bengkel las profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Service 1 */}
              <div className="bg-[#FAF8F5] rounded-3xl p-7 border border-stone-200 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">storefront</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Rombong Kontainer UMKM</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    Solusi booth jualan makanan, minuman, dan cafe modular. Bahan spandek/zincalume tahan karat dengan rangka hollow tebal dan instalasi kelistrikan siap colok.
                  </p>
                </div>
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-stone-200">
                    <Image src="/images/portfolio/rombong-kontainer-1.webp" alt="Rombong Kontainer UMKM" fill className="object-cover" />
                  </div>
                  <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20mau%20tanya%20harga%20Rombong%20Kontainer" 
                     target="_blank" rel="noopener"
                     className="flex items-center justify-between text-xs font-bold text-amber-800 hover:text-amber-600 pt-2 border-t border-stone-200">
                    <span>Tanya Harga &amp; Ukuran</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-[#FAF8F5] rounded-3xl p-7 border border-stone-200 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">roofing</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Kanopi Alderon UPVC</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    Meredam panas terik hingga 40% dan tidak berisik saat hujan lebat. Pilihan tepat untuk carport mobil dan teras rumah keluarga modern.
                  </p>
                </div>
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-stone-200">
                    <Image src="/images/portfolio/kanopi-alderon-1.webp" alt="Kanopi Alderon UPVC" fill className="object-cover" />
                  </div>
                  <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20mau%20tanya%20pasang%20Kanopi%20Alderon" 
                     target="_blank" rel="noopener"
                     className="flex items-center justify-between text-xs font-bold text-amber-800 hover:text-amber-600 pt-2 border-t border-stone-200">
                    <span>Konsultasi Ukuran Carport</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-[#FAF8F5] rounded-3xl p-7 border border-stone-200 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">fence</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Pagar Besi Minimalis &amp; Gate</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    Keamanan maksimal tanpa melupakan estetika rumah. Dilapisi cat dasar anti-karat dan finishing warna custom (hitam, putih, ivory, atau motif kayu).
                  </p>
                </div>
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-stone-200">
                    <Image src="/images/portfolio/pagar-minimalis-1.webp" alt="Pagar Besi Minimalis" fill className="object-cover" />
                  </div>
                  <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20mau%20tanya%20desain%20Pagar%20Besi" 
                     target="_blank" rel="noopener"
                     className="flex items-center justify-between text-xs font-bold text-amber-800 hover:text-amber-600 pt-2 border-t border-stone-200">
                    <span>Pilih Model &amp; Desain Pagar</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ═══ 4. FILTERABLE REAL PORTFOLIO WITH WATERMARK ═══ */}
        <section className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-stone-200" id="portofolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-200/80 text-stone-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                  Dokumentasi Foto Nyata
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
                  Portofolio Hasil Produksi Kami
                </h2>
                <p className="text-stone-600 text-sm mt-1">Foto asli langsung dari workshop dan instalasi di tempat pelanggan.</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-2xl border border-stone-300 no-scrollbar overflow-x-auto">
                {[
                  { key: 'all', label: 'Semua Produk' },
                  { key: 'kontainer', label: 'Rombong Kontainer' },
                  { key: 'kanopi', label: 'Kanopi Alderon' },
                  { key: 'pagar', label: 'Pagar Minimalis' },
                ].map(t => (
                  <button 
                    key={t.key}
                    onClick={() => setFilter(t.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      filter === t.key 
                        ? 'bg-amber-600 text-white shadow-md' 
                        : 'text-stone-600 hover:text-stone-950'
                    }`}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-4 border border-stone-200 shadow-warm hover:shadow-warm-hover transition-all">
                  <div className="relative h-60 rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200">
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill className="object-cover" 
                    />
                    {/* Badge Watermark JM Kontainer */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-sm text-white font-mono text-[10px] font-bold shadow flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>JM Kontainer</span>
                    </div>
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-800 font-mono text-[10px] font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <div className="px-2">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                      <span>{item.dim}</span>
                      <span className="text-amber-700 font-bold">{item.loc}</span>
                    </div>
                    <h4 className="font-bold text-base text-stone-900 mb-1.5">{item.title}</h4>
                    <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">{item.desc}</p>
                    <a href={`https://wa.me/628155401679?text=${encodeURIComponent(item.waText)}`}
                       target="_blank" rel="noopener"
                       className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors">
                      <span>Tanya Spek &amp; Harga Model Ini</span>
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ═══ 5. WORKFLOW BENTO (CLEAN LIGHT) ═══ */}
        <section className="py-16 lg:py-24 bg-white border-t border-stone-200" id="workflow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                Langkah Mudah Pemesanan
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-3">
                Proses Pengerjaan Transparan &amp; Rapi
              </h2>
              <p className="text-stone-600 text-sm">Dari awal konsultasi hingga serah terima kunci di lokasi Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { no: '01', title: 'Konsultasi & Survei', desc: 'Diskusikan model impian Anda. Tim kami survei gratis ke lokasi Anda.' },
                { no: '02', title: 'RAB & Desain Pasti', desc: 'Penawaran harga tertulis jelas tanpa biaya tambahan di kemudian hari.' },
                { no: '03', title: 'Fabrikasi Presisi', desc: 'Pemotongan & pengelasan baja SNI oleh tenaga ahli bersertifikat.' },
                { no: '04', title: 'Finishing & Cat Anti-Karat', desc: 'Pengecatan duco/powder coat rapi & uji kebocoran air sebelum kirim.' },
                { no: '05', title: 'Kirim & Garansi', desc: 'Pengiriman aman ke lokasi Anda dilengkapi garansi pengerjaan resmi.' },
              ].map((step) => (
                <div key={step.no} className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 hover:border-amber-400 transition-colors shadow-sm">
                  <div className="font-mono text-2xl font-extrabold text-amber-600 mb-2">{step.no}</div>
                  <h3 className="font-bold text-base text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6. KALKULATOR PENAWARAN INSTAN (LIGHT IVORY/GOLD) ═══ */}
        <section className="py-16 bg-[#FAF8F5] border-t border-stone-200" id="estimasi">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase mb-2 inline-block">
                  Kalkulator &amp; Estimasi Biaya
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2">
                  Dapatkan Perkiraan Harga &amp; Jadwal Survei
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Isi form singkat ini, sistem kami akan langsung menghubungkan Anda ke WhatsApp resmi Kepala Bengkel JM Kontainer.
                </p>
              </div>

              <form onSubmit={handleQuoteSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1.5">1. PILIH PRODUK</label>
                    <select 
                      value={service} 
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-600">
                      <option value="Rombong Kontainer / Booth UMKM">Rombong Kontainer UMKM</option>
                      <option value="Kanopi Alderon UPVC">Kanopi Alderon UPVC</option>
                      <option value="Pagar Minimalis Modern">Pagar Minimalis Besi</option>
                      <option value="Tangga Putar / Mezzanine">Konstruksi Custom Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1.5">2. UKURAN (P x L)</label>
                    <input 
                      type="text" 
                      value={dim}
                      onChange={(e) => setDim(e.target.value)}
                      placeholder="Misal: 3x2m atau 6x4m" 
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-600" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1.5">3. KOTA ANDA</label>
                    <select 
                      value={city} 
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-600">
                      <option value="Surabaya">Surabaya</option>
                      <option value="Sidoarjo">Sidoarjo</option>
                      <option value="Gresik">Gresik</option>
                      <option value="Mojokerto">Mojokerto</option>
                      <option value="Lamongan">Lamongan</option>
                      <option value="Luar Kota (Jawa Timur)">Luar Kota Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1.5">NAMA ANDA / NAMA USAHA</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Pak Budi / Kopi Sejahtera" 
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-600" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1.5">CATATAN KHUSUS (OPSIONAL)</label>
                    <input 
                      type="text" 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Contoh: Butuh meja stainless & roda putar" 
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-600" 
                    />
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
                  <div className="text-xs text-stone-500 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-amber-700 text-sm">verified_user</span>
                    Respon cepat &amp; konsultasi ramah
                  </div>
                  <button type="submit" 
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 active:scale-95 text-white font-bold text-sm tracking-wide transition-all shadow-gold-glow">
                    <span>Kirim ke WhatsApp &amp; Minta Penawaran</span>
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ═══ 7. FAQ ACCORDION ═══ */}
        <section className="py-16 bg-white border-t border-stone-200" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-200/80 text-stone-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                Tanya Jawab
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 mb-2">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-stone-600 text-sm">Informasi seputar lama pengerjaan, pengiriman, dan garansi.</p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-stone-200 rounded-2xl bg-[#FAF8F5] overflow-hidden transition-all">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base">
                    <span>{faq.q}</span>
                    <span className={`material-symbols-outlined text-amber-700 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 8. FINAL WARM CTA ═══ */}
        <section className="py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-700 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="material-symbols-outlined text-3xl text-white">handyman</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Pesan Rombong Kontainer &amp; Kanopi Impian Anda
            </h2>
            <p className="text-amber-100 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Konsultasikan kebutuhan tempat usaha atau rumah Anda bersama tim ahli kami. Survei lokasi gratis dan penawaran transparan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/628155401679?text=Halo%20JM%20Kontainer%2C%20saya%20siap%20order%20dan%20ingin%20konsultasi" 
                 target="_blank" rel="noopener"
                 onClick={() => trackEvent('click_whatsapp', { button_location: 'final_cta' })}
                 className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-amber-800 hover:bg-stone-50 active:scale-95 font-extrabold text-base transition-all shadow-xl">
                <span>💬 Chat WhatsApp Sekarang</span>
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </a>
              <a href="tel:+628155401679" 
                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold text-base transition-all">
                <span className="material-symbols-outlined text-base">call</span>
                <span>Telepon: 0815-5401-6679</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWA />
      <TrackingEvents />
    </div>
  )
}
