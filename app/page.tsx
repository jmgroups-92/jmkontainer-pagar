import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'
import TrackingEvents from '@/components/TrackingEvents'

const SERVICES = [
  { icon: 'storefront', title: 'Rombong Kontainer / Container Booth', desc: 'Rombong Kontainer modular fungsional, tahan cuaca, dan memberikan identitas kuat bagi brand UMKM Anda di Surabaya. Harga terjangkau, kualitas premium.', tag: 'Business Solution' },
  { icon: 'roofing',    title: 'Kanopi Alderon UPVC',                  desc: 'Pemasangan Kanopi Alderon UPVC murah di Surabaya dengan rangka kokoh. Sejuk, kedap suara, anti bocor, tahan lama hingga 15+ tahun.', tag: 'Residential' },
  { icon: 'fence',      title: 'Pagar Minimalis Modern',                desc: 'Pagar besi powder coat premium yang mengutamakan keamanan tanpa mengesampingkan estetika industrial modern. Desain custom sesuai selera.', tag: 'Security' },
]

const GALLERY = [
  { src: '/images/modern_premium_container_booth_rombong_kontainer_for_umkm_street_food_business.png', alt: 'Rombong Kontainer Murah Premium Surabaya untuk UMKM Street Food', tag: 'Rombong Kontainer', title: 'Premium Matte Black Booth', wide: true },
  { src: '/images/modern_minimalist_house_gate_pagar_minimalis_black_powder_coated_iron_elegant.png',  alt: 'Pagar Minimalis Modern Powder Coat Surabaya', tag: 'Pagar Minimalis', title: 'Industrial Security Gate', wide: false },
  { src: '/images/high_quality_alderon_canopy_installation_on_a_modern_house_white_and_black.png',     alt: 'Kanopi Alderon UPVC Murah Surabaya Instalasi Rumah Modern', tag: 'Kanopi Alderon', title: 'Modern UPVC Canopy', wide: false },
  { src: '/images/professional_welding_workshop_interior_skilled_craftsmen_working_on_custom.png',      alt: 'Workshop Las Profesional JM Workshop Surabaya', tag: 'Workshop Las', title: 'Crafted with Precision', wide: false },
]

const USPS = [
  { icon: '🏆', title: '7+ Tahun Pengalaman', desc: 'Berdiri sejak 2017, sudah dipercaya ratusan pelanggan di Jawa Timur.' },
  { icon: '✅', title: '500+ Proyek Selesai', desc: 'Portofolio lengkap mulai rombong kontainer, kanopi, hingga pagar minimalis.' },
  { icon: '🔩', title: 'Material Premium SNI', desc: 'Hanya menggunakan bahan baku bersertifikat — tidak ada kompromi soal kualitas.' },
  { icon: '🛡️', title: 'Garansi Pengerjaan',  desc: 'Setiap proyek dilengkapi garansi konstruksi. Kami bertanggung jawab penuh.' },
  { icon: '💰', title: 'Harga Transparan',    desc: 'Penawaran tertulis, tidak ada biaya tersembunyi. Cocok untuk semua budget.' },
  { icon: '📐', title: 'Survei & Konsultasi Gratis', desc: 'Tim kami siap datang ke lokasi Anda gratis untuk mengukur dan berdiskusi.' },
]

const TESTIMONIALS = [
  { name: 'Pak Budi', business: 'Pemilik Booth Kopi Surabaya', text: 'Rombong kontainer dari JM Workshop keren banget! Sudah jalan 1 tahun, masih kokoh dan banyak yang tertarik lihat booth saya.' },
  { name: 'Bu Sari',  business: 'Pemilik Rumah Sidoarjo',       text: 'Kanopi alderonnya bagus, rapih, dan tidak bocor sama sekali. Pengerjaannya cepat dan harga sesuai penawaran awal.' },
  { name: 'Pak Hendra', business: 'Kontraktor Gresik',          text: 'Sudah 3x order pagar di sini. Hasilnya selalu memuaskan, tukang las mereka profesional dan disiplin.' },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ═══ HERO ═══ */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <Image
            src="/images/modern_premium_container_booth_rombong_kontainer_for_umkm_street_food_business.png"
            alt="Rombong Kontainer Murah Berkualitas — JM Workshop Surabaya"
            fill className="object-cover" priority quality={90}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-16 text-white">
            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-[#F59E0B] text-black font-bold text-xs uppercase tracking-widest mb-5 rounded-sm">
              Bengkel Las Terpercaya · Surabaya Sejak 2017
            </span>

            {/* H1 — wajib mengandung keyword utama */}
            <h1 className="font-display mb-3 leading-tight" style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 800 }}>
              Spesialis Rombong Kontainer,<br />
              Kanopi Alderon &amp; Pagar Minimalis<br />
              <span className="text-[#F59E0B]">Surabaya</span>
            </h1>

            {/* Subtitle / marketing copy */}
            <p className="text-body-lg text-gray-300 mb-4 max-w-2xl">
              Konstruksi besi presisi untuk bisnis UMKM &amp; hunian modern Anda.
              Material premium standar SNI, garansi pengerjaan, harga terjangkau.
            </p>

            {/* Trust signals di bawah headline */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-300">
              <span>⭐ 500+ Proyek Selesai</span>
              <span>·</span>
              <span>🛡️ Garansi Kualitas</span>
              <span>·</span>
              <span>📐 Survei Gratis</span>
              <span>·</span>
              <span>💰 Harga Transparan</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a id="btn-whatsapp-hero"
                href="https://wa.me/628155401679?text=Halo%20JM%20Workshop%2C%20saya%20ingin%20konsultasi%20gratis"
                target="_blank" rel="noopener"
                className="px-8 py-4 bg-[#22C55E] text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2">
                💬 Konsultasi Gratis Sekarang
              </a>
              <a id="btn-lihat-kontak" href="#kontak"
                className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all text-center">
                Lihat Kontak
              </a>
            </div>
          </div>
        </section>

        {/* ═══ TRUST BAR ═══ */}
        <section className="bg-black py-5 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            {['🏭 Bengkel Las Profesional Surabaya','📦 Rombong Kontainer Murah','🏠 Kanopi Alderon Murah','🔒 Pagar Minimalis Murah','🚚 Melayani Surabaya, Sidoarjo, Gresik'].map(t => (
              <span key={t} className="text-gray-300">{t}</span>
            ))}
          </div>
        </section>

        {/* ═══ LAYANAN ═══ */}
        <section className="py-20 bg-[#f8f9fb]" id="layanan">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="text-center mb-14">
              <h2 className="font-display text-headline-lg text-black mb-3">Layanan Unggulan Fabrikasi Logam Surabaya</h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto mb-5" />
              <p className="text-gray-500 max-w-2xl mx-auto">Solusi fabrikasi logam dengan teknik pengelasan presisi, material berkualitas standar SNI, dan harga yang kompetitif di Surabaya.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <div key={i} className="reveal bg-white rounded-xl p-10 border border-gray-200 industrial-shadow hover:border-[#F59E0B] transition-all group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F59E0B] transition-colors">
                    <span className="material-symbols-outlined text-black text-4xl">{s.icon}</span>
                  </div>
                  <h3 className="font-display text-headline-sm mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-body-md mb-6">{s.desc}</p>
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[#F59E0B] text-label-md uppercase tracking-wider">{s.tag}</span>
                    <a href="https://wa.me/628155401679" target="_blank" rel="noopener"
                      className="text-xs font-bold text-gray-400 hover:text-[#22C55E] transition-colors">Tanya Harga →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ KENAPA PILIH KAMI ═══ */}
        <section className="py-20 bg-[#1A1A1A] text-white" id="keunggulan">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="text-center mb-14">
              <h2 className="font-display text-headline-lg text-[#F59E0B] mb-3">Kenapa Order ke JM Workshop Surabaya?</h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto mb-5" />
              <p className="text-gray-400 max-w-2xl mx-auto">Kami bukan sekadar bengkel las biasa. Setiap detail dikerjakan dengan standar tinggi agar Anda puas dan percaya pada kami.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {USPS.map((u, i) => (
                <div key={i} className="reveal bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#F59E0B] transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="text-4xl mb-4">{u.icon}</div>
                  <h3 className="font-display text-headline-sm text-white mb-2">{u.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://wa.me/628155401679?text=Halo%20JM%20Workshop%2C%20saya%20ingin%20minta%20penawaran"
                target="_blank" rel="noopener"
                className="inline-block px-10 py-4 bg-[#22C55E] text-white font-bold text-lg rounded-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                💬 Minta Penawaran Gratis Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* ═══ GALLERY ═══ */}
        <section className="py-20 bg-gray-900 text-white" id="produk">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <div>
                <h2 className="font-display text-headline-lg text-[#F59E0B] mb-2">Portofolio Rombong Kontainer &amp; Kanopi Surabaya</h2>
                <p className="text-gray-400">Hasil pengerjaan nyata — bukan render 3D. Lihat kualitas kami sebelum order.</p>
              </div>
              <a href="https://www.instagram.com/jayamaswood" target="_blank" rel="noopener"
                className="flex items-center gap-2 px-6 py-2 border border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black transition-colors text-sm font-bold rounded whitespace-nowrap">
                📷 Follow Instagram Kami
              </a>
            </div>

            {/* Grid: 1 wide + 3 normal + 1 Instagram CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Wide card */}
              <div className="reveal md:col-span-2 group relative overflow-hidden rounded-xl h-[350px]">
                <Image src={GALLERY[0].src} alt={GALLERY[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-[#F59E0B] font-bold text-sm">{GALLERY[0].tag}</span>
                  <h4 className="text-white font-display text-headline-sm mt-1">{GALLERY[0].title}</h4>
                  <p className="text-gray-300 text-xs mt-1">Custom size & warna sesuai permintaan</p>
                </div>
              </div>

              {/* Pagar */}
              <div className="reveal group relative overflow-hidden rounded-xl h-[350px]" style={{ transitionDelay: '100ms' }}>
                <Image src={GALLERY[1].src} alt={GALLERY[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#F59E0B] font-bold text-sm">{GALLERY[1].tag}</span>
                  <h4 className="text-white font-display text-xl mt-1">{GALLERY[1].title}</h4>
                </div>
              </div>

              {/* Kanopi */}
              <div className="reveal group relative overflow-hidden rounded-xl h-[300px]" style={{ transitionDelay: '150ms' }}>
                <Image src={GALLERY[2].src} alt={GALLERY[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#F59E0B] font-bold text-sm">{GALLERY[2].tag}</span>
                  <h4 className="text-white font-display text-xl mt-1">{GALLERY[2].title}</h4>
                </div>
              </div>

              {/* Workshop */}
              <div className="reveal group relative overflow-hidden rounded-xl h-[300px]" style={{ transitionDelay: '200ms' }}>
                <Image src={GALLERY[3].src} alt={GALLERY[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#F59E0B] font-bold text-sm">{GALLERY[3].tag}</span>
                  <h4 className="text-white font-display text-xl mt-1">{GALLERY[3].title}</h4>
                </div>
              </div>

              {/* Instagram CTA Card */}
              <div className="reveal flex flex-col items-center justify-center rounded-xl h-[300px] border-2 border-dashed border-gray-600 hover:border-[#F59E0B] transition-colors p-8 text-center" style={{ transitionDelay: '250ms' }}>
                <div className="text-5xl mb-4">📸</div>
                <p className="text-gray-300 font-semibold mb-2">Lihat 50+ foto portofolio</p>
                <p className="text-gray-500 text-sm mb-5">Rombong kontainer, kanopi, & pagar minimalis di Instagram kami</p>
                <a href="https://www.instagram.com/jayamaswood" target="_blank" rel="noopener"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-sm hover:scale-105 transition-transform">
                  @jayamaswood →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIAL ═══ */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="text-center mb-12">
              <h2 className="font-display text-headline-lg text-black mb-3">Kata Pelanggan Kami</h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="reveal bg-white rounded-xl p-8 border border-gray-200 industrial-shadow" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-[#F59E0B] text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-black">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.business}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TENTANG ═══ */}
        <section className="py-20 bg-white blueprint-grid" id="tentang">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="w-full lg:w-1/2 reveal">
                <div className="relative">
                  <Image src="/images/professional_welding_workshop_interior_skilled_craftsmen_working_on_custom.png"
                    alt="Bengkel Las Profesional JM Workshop Surabaya"
                    width={700} height={500} className="rounded-2xl shadow-2xl relative z-10 w-full h-auto" loading="lazy" />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F59E0B] -z-0 rounded-2xl hidden md:block" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 reveal">
                <span className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-4 block">Perjalanan Kami</span>
                <h2 className="font-display text-headline-lg text-black mb-6 leading-tight">Bengkel Las Profesional Surabaya Sejak 2017</h2>
                <div className="space-y-4 text-gray-600 text-body-lg">
                  <p>Berawal dari workshop kecil di Surabaya pada 2017, JM Workshop lahir dengan visi menghadirkan <strong>rombong kontainer</strong>, <strong>kanopi alderon</strong>, dan <strong>pagar minimalis</strong> berkualitas tinggi dengan harga yang jujur.</p>
                  <p>Kami percaya bahwa setiap las dan sambungan adalah fondasi kepercayaan pelanggan. Itulah mengapa kami tidak pernah berkompromi pada kualitas material maupun keahlian pengerjaan.</p>
                </div>
                <div className="mt-10 flex items-center gap-8">
                  {[['500+','Proyek Selesai'],['7+','Tahun Pengalaman'],['5','Kota Layanan']].map(([n, l], i, arr) => (
                    <div key={l} className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-extrabold text-black">{n}</div>
                        <div className="text-xs font-semibold text-gray-500 mt-1">{l}</div>
                      </div>
                      {i < arr.length - 1 && <div className="w-px h-10 bg-gray-200" />}
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/628155401679" target="_blank" rel="noopener"
                  className="mt-8 inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:-translate-y-1 transition-all">
                  Hubungi Kami Sekarang →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AREA LAYANAN ═══ */}
        <section className="py-10 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
            <h3 className="font-display text-headline-sm mb-5 text-black">Wilayah Layanan Rombong Kontainer &amp; Kanopi:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Surabaya','Sidoarjo','Gresik','Mojokerto','Lamongan'].map(kota => (
                <span key={kota} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-black hover:border-[#F59E0B] transition-colors cursor-default">{kota}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA FINAL ═══ */}
        <section className="py-20 bg-[#F59E0B]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-headline-lg text-black mb-4">Siap Order Rombong Kontainer atau Kanopi?</h2>
            <p className="text-black/70 text-body-lg mb-8">Hubungi kami sekarang. Survei gratis, penawaran transparan, garansi pengerjaan. Respon cepat via WhatsApp.</p>
            <a href="https://wa.me/628155401679?text=Halo%20JM%20Workshop%2C%20saya%20ingin%20order%20dan%20minta%20penawaran"
              target="_blank" rel="noopener"
              className="inline-block px-12 py-5 bg-black text-white font-bold text-xl rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
              💬 Chat WhatsApp Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWA />
      <TrackingEvents />
    </>
  )
}
