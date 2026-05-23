import type { Metadata } from 'next'
import { Hanken_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const hanken = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken', display: 'swap', weight: ['400','600','700','800'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400','500','600'] })

const GA_ID = 'G-QMY2G5J3EJ'

export const metadata: Metadata = {
  title: 'JM Workshop Surabaya | Rombong Kontainer & Kanopi Alderon',
  description: 'Spesialis Rombong Kontainer UMKM, Kanopi Alderon UPVC & Pagar Minimalis Surabaya. 500+ proyek, 7 tahun pengalaman, harga terjangkau, garansi kualitas. Konsultasi gratis!',
  keywords: 'rombong kontainer surabaya, rombong kontainer murah, kontainer murah surabaya, kanopi murah surabaya, kanopi alderon murah, kanopi alderon surabaya, pagar minimalis murah surabaya, pagar minimalis surabaya, bengkel las surabaya, jasa las surabaya, container booth surabaya, booth container umkm, rombong food truck surabaya, kanopi baja ringan surabaya, pagar besi minimalis modern, rombong kontainer sidoarjo, kanopi alderon sidoarjo, jasa fabrikasi logam surabaya, bengkel las profesional surabaya, kanopi upvc surabaya',
  metadataBase: new URL('https://www.jmworkshop.com'),
  authors: [{ name: 'JM Workshop Surabaya' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://www.jmworkshop.com/', languages: { 'id': 'https://www.jmworkshop.com/' } },
  openGraph: {
    type: 'website',
    url: 'https://www.jmworkshop.com/',
    title: 'JM Workshop Surabaya | Spesialis Rombong Kontainer, Kanopi & Pagar Minimalis',
    description: 'Bengkel las spesialis Surabaya sejak 2017. Rombong Kontainer, Kanopi Alderon, Pagar Minimalis. Konsultasi Gratis!',
    siteName: 'JM Workshop Surabaya',
    locale: 'id_ID',
    images: [{ url: '/images/modern_premium_container_booth_rombong_kontainer_for_umkm_street_food_business.png', width: 1200, height: 630, alt: 'Rombong Kontainer Premium JM Workshop Surabaya' }],
  },
  twitter: { card: 'summary_large_image', title: 'JM Workshop Surabaya | Rombong Kontainer & Kanopi', description: 'Bengkel las spesialis Surabaya sejak 2017.' },
  other: {
    'geo.region': 'ID-JI',
    'geo.placename': 'Surabaya, Jawa Timur',
    'geo.position': '-7.2575;112.7521',
    'ICBM': '-7.2575, 112.7521',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.jmworkshop.com/#business',
  name: 'JM Workshop Surabaya',
  description: 'Bengkel las spesialis Rombong Kontainer, Kanopi Alderon, dan Pagar Minimalis di Surabaya sejak 2017.',
  url: 'https://www.jmworkshop.com',
  telephone: '+628155401679',
  email: 'info@jmworkshop.com',
  foundingDate: '2017',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', streetAddress: 'Jl. Raya Surabaya-Gresik No. 123', addressLocality: 'Surabaya', addressRegion: 'Jawa Timur', postalCode: '60000', addressCountry: 'ID' },
  geo: { '@type': 'GeoCoordinates', latitude: -7.2575, longitude: 112.7521 },
  areaServed: ['Surabaya','Sidoarjo','Gresik','Mojokerto','Lamongan'].map(n => ({ '@type': 'City', name: n })),
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '17:00' }],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Layanan JM Workshop', itemListElement: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Container Booth / Rombong Kontainer Surabaya' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kanopi Alderon UPVC Surabaya' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pagar Minimalis Modern Surabaya' } },
  ]},
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '87' },
  sameAs: ['https://www.instagram.com/jmworkshopsurabaya'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${hanken.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#f8f9fb] text-[#191c1e] antialiased">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}</Script>
      </body>
    </html>
  )
}
