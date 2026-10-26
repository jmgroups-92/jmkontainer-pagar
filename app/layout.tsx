import type { Metadata } from 'next'
import { Hanken_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const hanken = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken', display: 'swap', weight: ['400','600','700','800'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400','500','600'] })

const GA_ID = 'G-QMY2G5J3EJ'

export const metadata: Metadata = {
  title: 'JM Kontainer Surabaya | Pabrikasi Booth Container UMKM, Kanopi & Pagar Besi',
  description: 'Bengkel las spesialis Booth Container Custom, Rombong UMKM, Kanopi Alderon UPVC & Pagar Minimalis. Melayani Surabaya, Sidoarjo, Gresik, Bangkalan, Lamongan, Pasuruan & Malang. Free survei lokasi!',
  keywords: 'booth container surabaya, rombong kontainer surabaya, booth container sidoarjo, booth container gresik, booth container bangkalan, booth container lamongan, booth container pasuruan, booth container malang, kanopi alderon surabaya, pagar minimalis surabaya, bengkel las surabaya, kontainer umkm',
  metadataBase: new URL('https://rombongkontainersurabaya.web.id'),
  authors: [{ name: 'JM Kontainer Surabaya' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://rombongkontainersurabaya.web.id/', languages: { 'id': 'https://rombongkontainersurabaya.web.id/' } },
  openGraph: {
    type: 'website',
    url: 'https://rombongkontainersurabaya.web.id/',
    title: 'JM Kontainer Surabaya | Spesialis Rombong Kontainer, Kanopi & Pagar',
    description: 'Bengkel las spesialis booth container & fabrikasi presisi di Jawa Timur sejak 2017. Material BSI Spindo SNI, survei lokasi gratis!',
    siteName: 'JM Kontainer Surabaya',
    locale: 'id_ID',
    images: [{ url: '/images/slider/slide-1.jpg', width: 1200, height: 630, alt: 'Booth Kontainer Premium JM Kontainer Surabaya' }],
  },
  twitter: { card: 'summary_large_image', title: 'JM Kontainer Surabaya | Rombong Kontainer & Kanopi', description: 'Bengkel las spesialis Jawa Timur sejak 2017.' },
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
  '@id': 'https://rombongkontainersurabaya.web.id/#business',
  name: 'JM Kontainer Surabaya',
  description: 'Bengkel las fabrikasi spesialis Rombong Kontainer, Booth UMKM Custom, Kanopi Alderon UPVC, dan Pagar Minimalis Modern di Jawa Timur sejak 2017.',
  url: 'https://rombongkontainersurabaya.web.id',
  telephone: '+6281554016679',
  email: 'admin@rombongkontainersurabaya.web.id',
  foundingDate: '2017',
  priceRange: '$$',
  image: 'https://rombongkontainersurabaya.web.id/images/slider/slide-1.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Rejosari Gg. Musholla Baru, RT. 01 Benowo, Pakal',
    addressLocality: 'Surabaya Barat',
    addressRegion: 'Jawa Timur',
    postalCode: '60195',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.2575,
    longitude: 112.7521,
  },
  areaServed: [
    { '@type': 'City', name: 'Surabaya' },
    { '@type': 'City', name: 'Sidoarjo' },
    { '@type': 'City', name: 'Gresik' },
    { '@type': 'City', name: 'Bangkalan' },
    { '@type': 'City', name: 'Lamongan' },
    { '@type': 'City', name: 'Pasuruan' },
    { '@type': 'City', name: 'Malang' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan JM Kontainer',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pembuatan Booth Container / Rombong UMKM' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pemasangan Kanopi Alderon UPVC Double Layer' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fabrikasi Pagar Minimalis BSI Spindo SNI' } },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '124' },
  sameAs: ['https://www.instagram.com/jayamaswood'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${hanken.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          media="print"
          // @ts-expect-error onLoad media swap
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#FAF8F5] text-[#1C1917] antialiased selection:bg-gold-500 selection:text-white">
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
