import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'
import { CITIES, CityData } from '@/lib/cities'

interface Props {
  params: { city: string }
}

export function generateStaticParams() {
  return Object.keys(CITIES).map((slug) => ({ city: slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = CITIES[params.city.toLowerCase()]
  if (!city) return {}

  const canonicalUrl = `https://rombongkontainersurabaya.web.id/kota/${city.slug}`

  return {
    title: `${city.metaTitle} | JayaMulya Industrial Fabrication Studio`,
    description: city.metaDesc,
    keywords: `jayamulya, booth container ${city.name.toLowerCase()}, rombong kontainer ${city.name.toLowerCase()}, jasa kanopi ${city.name.toLowerCase()}, pagar minimalis ${city.name.toLowerCase()}, bengkel las ${city.name.toLowerCase()}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${city.metaTitle} | JayaMulya Studio`,
      description: city.metaDesc,
      url: canonicalUrl,
      type: 'article',
      locale: 'id_ID',
      siteName: 'JayaMulya Industrial Fabrication Studio',
      images: [
        {
          url: '/images/slider/slide-1.webp',
          width: 1200,
          height: 630,
          alt: `Jasa Fabrikasi Custom Container Booth dan Kanopi di ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.metaTitle} | JayaMulya`,
      description: city.metaDesc,
    },
    other: {
      'geo.region': 'ID-JI',
      'geo.placename': `${city.name}, Jawa Timur`,
      'geo.position': `${city.geo.lat};${city.geo.lng}`,
      'ICBM': `${city.geo.lat}, ${city.geo.lng}`,
    },
  }
}

export default function CityPage({ params }: Props) {
  const city: CityData = CITIES[params.city.toLowerCase()]
  if (!city) {
    notFound()
  }

  const allCitySlugs = Object.keys(CITIES)

  // GEO & LocalBusiness Schema JSON-LD
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `https://rombongkontainersurabaya.web.id/kota/${city.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rombongkontainersurabaya.web.id/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Wilayah Layanan ${city.name}`,
            item: `https://rombongkontainersurabaya.web.id/kota/${city.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `https://rombongkontainersurabaya.web.id/kota/${city.slug}#service`,
        name: `Jasa Fabrikasi Custom Container Booth & Kanopi di ${city.name}`,
        serviceType: 'Fabrikasi Baja Industri & Arsitektural',
        provider: {
          '@type': 'LocalBusiness',
          name: 'JayaMulya — Industrial Fabrication Studio',
          telephone: '+6281554016679',
          url: 'https://rombongkontainersurabaya.web.id',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Rejosari Gg. Musholla Baru, RT. 01 Benowo, Pakal',
            addressLocality: 'Surabaya Barat',
            addressRegion: 'Jawa Timur',
            postalCode: '60195',
            addressCountry: 'ID',
          },
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: city.geo.lat,
            longitude: city.geo.lng,
          },
        },
        description: city.metaDesc,
      },
      {
        '@type': 'FAQPage',
        '@id': `https://rombongkontainersurabaya.web.id/kota/${city.slug}#faq`,
        mainEntity: city.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#202326] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <Navbar />

      <main className="flex-1 pt-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#686B6D] font-mono">
            <Link href="/" className="hover:text-[#B66A37] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#969794]">Wilayah Layanan</span>
            <span>/</span>
            <span className="text-[#202326] font-bold font-sans">{city.name}</span>
          </nav>
        </div>

        {/* Hero Section City */}
        <section className="py-12 sm:py-16 technical-grid border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(32,35,38,0.1)] text-xs font-mono text-[#B66A37] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
                  Wilayah Layanan: {city.name} &amp; Sekitarnya
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#202326] leading-[1.1]">
                  {city.heroHeadline}
                </h1>

                <p className="text-base text-[#686B6D] leading-relaxed max-w-2xl">
                  {city.heroSubheadline}
                </p>

                {/* Facts Sheet */}
                <div className="mt-6 p-5 rounded-[18px] bg-white border border-[rgba(32,35,38,0.1)] shadow-subtle space-y-3">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#B66A37] font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B66A37]"></span>
                    Fakta Spesifikasi Layanan {city.name}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-[#F7F6F2] p-3 rounded-[12px] border border-[rgba(32,35,38,0.06)]">
                      <div className="text-[10px] text-[#686B6D] uppercase font-mono">Waktu Produksi</div>
                      <div className="font-bold text-[#202326] mt-0.5 text-xs sm:text-sm">{city.deliveryDays}</div>
                      <div className="text-[10px] text-[#B66A37] mt-0.5">Sesuai Antrian Workshop</div>
                    </div>
                    <div className="bg-[#F7F6F2] p-3 rounded-[12px] border border-[rgba(32,35,38,0.06)]">
                      <div className="text-[10px] text-[#686B6D] uppercase font-mono">Standar Material</div>
                      <div className="font-bold text-[#202326] mt-0.5 text-xs sm:text-sm">BSI Spindo SNI</div>
                      <div className="text-[10px] text-[#686B6D] mt-0.5">Baja Profil &amp; Hollow</div>
                    </div>
                    <div className="bg-[#F7F6F2] p-3 rounded-[12px] border border-[rgba(32,35,38,0.06)] col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-[#686B6D] uppercase font-mono">Ketentuan Garansi</div>
                      <div className="font-bold text-[#202326] mt-0.5 text-xs sm:text-sm">Garansi Resmi</div>
                      <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Survei Lokasi Terjadwal</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/6281554016679?text=${encodeURIComponent(
                      `Halo JayaMulya, saya ingin konsultasi proyek fabrikasi booth/kanopi untuk area ${city.name}`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#B66A37] hover:bg-[#A0592C] text-white font-semibold text-xs tracking-wide shadow-copper-glow transition-all"
                  >
                    <span>Konsultasi Proyek Wilayah {city.name}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <a
                    href="tel:+6281554016679"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-white border border-[rgba(32,35,38,0.12)] text-[#202326] font-semibold text-xs hover:bg-[#F7F6F2] transition-colors"
                  >
                    <span>0815-5401-6679</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="bg-white p-5 rounded-[18px] border border-[rgba(32,35,38,0.1)] shadow-elevated space-y-4">
                  <div className="relative aspect-[16/11] w-full rounded-[14px] overflow-hidden bg-[#EAE7DF]">
                    <Image
                      src="/images/slider/slide-1.webp"
                      alt={`Fabrikasi Booth Kontainer Pengiriman ke ${city.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider">
                      JayaMulya Studio
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#B66A37] uppercase tracking-wider font-semibold block">
                      Cakupan Kecamatan di {city.name}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {city.districts.map((district) => (
                        <span
                          key={district}
                          className="px-2.5 py-1 bg-[#F7F6F2] text-[#202326] rounded-md text-xs font-mono border border-[rgba(32,35,38,0.06)]"
                        >
                          {district}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Popular Requests Section */}
        <section className="py-20 bg-white border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B66A37] font-semibold">
                Konfigurasi Pilihan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202326] tracking-tight">
                Model Fabrikasi Populer di {city.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#686B6D]">
                Spesifikasi teruji untuk durabilitas iklim tropis, kemudahan mobilitas, dan kesesuaian operasional bisnis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {city.popularRequests.map((req, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[18px] bg-[#F7F6F2] border border-[rgba(32,35,38,0.08)] flex flex-col justify-between hover:shadow-subtle transition-all"
                >
                  <div className="space-y-3">
                    <span className="w-8 h-8 rounded-[8px] bg-white text-[#B66A37] flex items-center justify-center font-mono font-bold text-xs border border-[rgba(32,35,38,0.08)]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-sm text-[#202326] leading-snug">
                      {req}
                    </h3>
                  </div>

                  <a
                    href={`https://wa.me/6281554016679?text=${encodeURIComponent(
                      `Halo JayaMulya, saya ingin konsultasi spesifikasi dan estimasi harga "${req}" untuk area ${city.name}`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 pt-3 border-t border-[rgba(32,35,38,0.08)] inline-flex items-center justify-between text-xs font-semibold text-[#B66A37] hover:text-[#A0592C] transition-colors"
                  >
                    <span>Konsultasikan Model Ini</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#F7F6F2] border-b border-[rgba(32,35,38,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white border border-[rgba(32,35,38,0.08)] text-xs font-mono uppercase tracking-wider text-[#B66A37] font-semibold">
                Tanya Jawab Wilayah {city.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202326] tracking-tight">
                Pertanyaan Seputar Fabrikasi &amp; Pengiriman ke {city.name}
              </h2>
            </div>

            <div className="space-y-4">
              {city.faq.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[18px] border border-[rgba(32,35,38,0.08)] shadow-subtle space-y-2">
                  <h3 className="text-base font-bold text-[#202326] flex items-start gap-2.5">
                    <span className="text-[#B66A37] font-mono font-bold text-sm mt-0.5">Q.</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686B6D] leading-relaxed pl-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Switcher */}
        <section className="py-12 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B66A37] font-semibold block mb-0.5">
                Cakupan Wilayah Lainnya:
              </span>
              <span className="text-xs text-[#686B6D]">
                Melayani seluruh wilayah Jawa Timur dari workshop JayaMulya di Pakal Benowo, Surabaya Barat.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {allCitySlugs.map((slug) => {
                const c = CITIES[slug]
                const isActive = slug === city.slug
                return (
                  <Link
                    key={slug}
                    href={`/kota/${slug}`}
                    className={`px-3.5 py-1.5 rounded-[8px] text-xs font-semibold transition-all border ${
                      isActive
                        ? 'bg-[#202326] text-white border-[#202326] shadow-sm'
                        : 'bg-[#F7F6F2] text-[#202326] hover:bg-[#EAE7DF] border-[rgba(32,35,38,0.08)]'
                    }`}
                  >
                    {c.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWA />
    </div>
  )
}
