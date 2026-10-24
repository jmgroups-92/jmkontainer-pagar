import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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
    title: city.metaTitle,
    description: city.metaDesc,
    keywords: `booth container ${city.name.toLowerCase()}, rombong kontainer ${city.name.toLowerCase()}, jasa rombong custom ${city.name.toLowerCase()}, kanopi alderon ${city.name.toLowerCase()}, pagar minimalis ${city.name.toLowerCase()}, bengkel las ${city.name.toLowerCase()}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDesc,
      url: canonicalUrl,
      type: 'article',
      locale: 'id_ID',
      siteName: 'JM Kontainer Surabaya',
      images: [
        {
          url: '/images/slider/slide-1.jpg',
          width: 1200,
          height: 630,
          alt: `Jasa Pembuatan Booth Container di ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: city.metaTitle,
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
            name: `Area Layanan ${city.name}`,
            item: `https://rombongkontainersurabaya.web.id/kota/${city.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `https://rombongkontainersurabaya.web.id/kota/${city.slug}#service`,
        name: `Jasa Pembuatan Booth Container & Rombong di ${city.name}`,
        serviceType: 'Fabrikasi Booth Kontainer & Bengkel Las Besi',
        provider: {
          '@type': 'LocalBusiness',
          name: 'JM Kontainer Surabaya',
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
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Schema Markup for SEO & Generative Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Top Banner Notice */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-medium text-emerald-400">Layanan Area {city.name}:</span>
            <span>Survei Lokasi &amp; Konsultasi Desain Gratis</span>
          </div>
          <div className="flex items-center gap-3 text-stone-300">
            <span className="hidden sm:inline font-mono font-medium">Besi Hollow BSI Spindo SNI</span>
            <a
              href={`https://wa.me/6281554016679?text=Halo%20JM%20Kontainer%2C%20saya%20di%20${city.name}%20mau%20konsultasi%20pembuatan%20booth`}
              target="_blank"
              rel="noopener"
              className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2">
              Hubungi Cabang Surabaya &rarr;
            </a>
          </div>
        </div>
      </div>

      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-400">Area Layanan Jatim</span>
            <span>/</span>
            <span className="text-amber-800 font-bold font-sans">{city.name}</span>
          </nav>
        </div>

        {/* Hero Section City */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-4">
                  <span className="material-symbols-outlined text-sm text-amber-700">location_on</span>
                  Cakupan Wilayah: {city.name} &amp; Sekitarnya
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
                  {city.heroHeadline}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                  {city.heroSubheadline}
                </p>

                {/* GEO Fast Fact Sheet (Optimized for AI Engines: ChatGPT, Perplexity, Gemini) */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-xs sm:text-sm">
                  <div className="font-mono font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5 text-amber-800">
                    <span className="material-symbols-outlined text-base">verified</span>
                    Fakta Singkat Layanan {city.name}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <div className="text-[10px] text-stone-500 uppercase font-mono">Waktu Produksi</div>
                      <div className="font-bold text-stone-900 mt-0.5">{city.deliveryDays}</div>
                      <div className="text-[10px] text-amber-700 mt-0.5">(Sesuai antrian order)</div>
                    </div>
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <div className="text-[10px] text-stone-500 uppercase font-mono">Material Standar</div>
                      <div className="font-bold text-stone-900 mt-0.5">BSI Spindo SNI</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Plat Tebal &amp; Duco</div>
                    </div>
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-stone-500 uppercase font-mono">Garansi &amp; Survei</div>
                      <div className="font-bold text-stone-900 mt-0.5">Garansi Bocor</div>
                      <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Survei Lokasi Free</div>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/6281554016679?text=Halo%20JM%20Kontainer%2C%20saya%20di%20${city.name}%20mau%20tanya%20desain%20dan%20harga%20booth`}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-sm shadow-gold-glow active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-base">chat</span>
                    Konsultasi Gratis Wilayah {city.name}
                  </a>
                  <a
                    href="tel:+6281554016679"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-800 font-bold text-sm hover:bg-stone-50 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-base text-amber-700">call</span>
                    0815-5401-6679
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="bg-white p-4 rounded-3xl border border-stone-200 shadow-xl relative overflow-hidden">
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-stone-100 mb-4">
                    <img
                      src="/images/slider/slide-1.jpg"
                      alt={`Contoh Fabrikasi Booth Kontainer untuk Pengiriman ke ${city.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      JM Kontainer
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-1">
                      Kecamatan / Area Layanan di {city.name}:
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {city.districts.map((district) => (
                        <span
                          key={district}
                          className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-lg text-xs font-medium border border-stone-200/60">
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
        <section className="py-12 bg-white border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Model Populer Pilihan Pengusaha di {city.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Desain telah disesuaikan dengan kebutuhan ruang, peredaman panas, dan kepraktisan operasional harian.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {city.popularRequests.map((req, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-sm text-stone-900 mb-2 leading-snug">
                      {req}
                    </h3>
                  </div>
                  <a
                    href={`https://wa.me/6281554016679?text=Halo%20JM%20Kontainer%2C%20mau%20tanya%20estimasi%20harga%20${encodeURIComponent(req)}%20untuk%20area%20${city.name}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 pt-3 border-t border-stone-200/70 inline-flex items-center justify-between text-xs font-bold text-amber-700 hover:text-amber-900">
                    <span>Tanya Biaya Model Ini</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (SEO & GEO Structured Questions) */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-200 text-stone-800 text-xs font-mono font-bold uppercase mb-2">
                Tanya Jawab {city.name}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Pertanyaan Seputar Fabrikasi &amp; Pengiriman ke {city.name}
              </h2>
            </div>

            <div className="space-y-4">
              {city.faq.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <h3 className="text-base font-bold text-stone-900 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-amber-600 shrink-0 mt-0.5 text-lg">help</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed pl-7">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Switcher SEO Pills (Clean, Simple, Token-Efficient) */}
        <section className="py-10 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Pilih Area Layanan Lainnya:
                </span>
                <span className="text-xs text-stone-500">
                  Melayani seluruh wilayah Jawa Timur dari workshop JM Kontainer di Pakal, Surabaya Barat.
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
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        isActive
                          ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                          : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                      }`}>
                      {c.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWA />
    </div>
  )
}
