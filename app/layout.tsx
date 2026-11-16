import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-QMY2G5J3EJ'

export const metadata: Metadata = {
  title: 'JayaMulya — Industrial Fabrication Studio | Custom Container Booth, Kanopi & Pagar Surabaya',
  description: 'Studio fabrikasi custom industri dan solusi arsitektural di Surabaya sejak 2017. Spesialis Custom Container Booth, Architectural Canopy, Minimalist Steel Gate, dan konstruksi baja presisi berstandar SNI.',
  keywords: 'jayamulya, custom container booth surabaya, architectural canopy surabaya, pagar minimalis surabaya, jasa fabrikasi besi surabaya, container booth cafe, booth franchise surabaya, bengkel las custom surabaya',
  metadataBase: new URL('https://rombongkontainersurabaya.web.id'),
  authors: [{ name: 'JayaMulya Industrial Fabrication Studio' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://rombongkontainersurabaya.web.id/',
    languages: {
      id: 'https://rombongkontainersurabaya.web.id/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://rombongkontainersurabaya.web.id/',
    title: 'JayaMulya — Industrial Fabrication Studio',
    description: 'Custom Engineering. Precision Fabrication. Architectural Solutions. Solusi fabrikasi custom untuk kebutuhan komersial dan arsitektural.',
    siteName: 'JayaMulya Studio',
    locale: 'id_ID',
    images: [
      {
        url: '/images/slider/slide-1.webp',
        width: 1200,
        height: 630,
        alt: 'JayaMulya Industrial Fabrication Studio Surabaya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JayaMulya — Industrial Fabrication Studio',
    description: 'Custom Engineering. Precision Fabrication. Architectural Solutions.',
    images: ['/images/slider/slide-1.webp'],
  },
  other: {
    'geo.region': 'ID-JI',
    'geo.placename': 'Surabaya, Jawa Timur',
    'geo.position': '-7.2575;112.7521',
    'ICBM': '-7.2575, 112.7521',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://rombongkontainersurabaya.web.id/#business',
  name: 'JayaMulya — Industrial Fabrication Studio',
  alternateName: 'JayaMulya Bengkel & Studio Fabrikasi Presisi',
  description: 'Studio fabrikasi custom industri dan arsitektural di Surabaya. Spesialis Custom Container Booth, Architectural Canopy, Minimalist Steel Gate, dan rekayasa baja presisi.',
  url: 'https://rombongkontainersurabaya.web.id',
  telephone: '+6281554016679',
  email: 'admin@rombongkontainersurabaya.web.id',
  foundingDate: '2017',
  priceRange: '$$',
  image: 'https://rombongkontainersurabaya.web.id/images/slider/slide-1.webp',
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
    name: 'Layanan Fabrikasi JayaMulya',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Container Booth & Commercial Kiosks',
          description: 'Perancangan dan fabrikasi booth komersial, container kiosk F&B, dan modular space.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Architectural Canopy & Steel Structures',
          description: 'Solusi kanopi baja WF dan Alderon UPVC berdaya redam panas dan akustik tinggi.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Minimalist Steel Gate & Perimeter Fencing',
          description: 'Pagar dan gerbang minimalis modern presisi dengan finishing tahan cuaca.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Industrial Metal Fabrication',
          description: 'Pengerjaan rekayasa baja, mezzanine struktural, tangga putar, dan fabrikasi B2B.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '142',
  },
  sameAs: ['https://www.instagram.com/jayamaswood'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F7F6F2] text-[#202326] antialiased selection:bg-[#B66A37] selection:text-white">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
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
