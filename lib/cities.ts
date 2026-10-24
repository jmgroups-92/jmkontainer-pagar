export interface CityData {
  slug: string
  name: string
  province: string
  postalCode: string
  geo: { lat: number; lng: number }
  districts: string[]
  metaTitle: string
  metaDesc: string
  heroHeadline: string
  heroSubheadline: string
  deliveryDays: string
  popularRequests: string[]
  faq: { q: string; a: string }[]
}

export const CITIES: Record<string, CityData> = {
  surabaya: {
    slug: 'surabaya',
    name: 'Surabaya',
    province: 'Jawa Timur',
    postalCode: '60195',
    geo: { lat: -7.2575, lng: 112.7521 },
    districts: ['Pakal', 'Benowo', 'Rungkut', 'Tegalsari', 'Wiyung', 'Sambikerep', 'Sukolilo', 'Wonokromo', 'Kenjeran'],
    metaTitle: 'Jasa Booth Container & Rombong Surabaya | JM Kontainer Pabrikasi Presisi',
    metaDesc: 'Jasa pembuatan booth container UMKM, rombong jualan custom, kanopi alderon & pagar minimalis di Surabaya. Workshop di Pakal Benowo, free survei lokasi!',
    heroHeadline: 'Jasa Pembuatan Booth Container & Rombong Custom Surabaya',
    heroSubheadline: 'Fabrikasi langsung dari bengkel las JM Kontainer di Pakal, Surabaya Barat. Material BSI Spindo SNI, anti-bocor, siap kirim ke seluruh sudut Surabaya.',
    deliveryDays: '7-12 Hari Kerja',
    popularRequests: [
      'Booth Container Kopi & Minuman Kekinian 2x1.5m',
      'Rombong Kontainer Makanan / Fried Chicken 3x2m',
      'Kanopi Alderon UPVC Double Layer Carport Rumah',
      'Pagar Besi Hollow Minimalis Modern Cat Duco'
    ],
    faq: [
      {
        q: 'Apakah bisa survei lokasi gratis di area Surabaya?',
        a: 'Ya, tim JM Kontainer melayani survei lokasi gratis se-Surabaya (Surabaya Barat, Timur, Pusat, Selatan, Utara) untuk ukur luasan booth atau carport.'
      },
      {
        q: 'Berapa lama proses pembuatan booth kontainer di Surabaya?',
        a: 'Pengerjaan rata-rata 7-12 hari kerja sesuai antrian order. Workshop kami berlokasi di Benowo, Pakal, Surabaya Barat.'
      },
      {
        q: 'Material apa yang digunakan?',
        a: 'Kami memakai rangka besi hollow BSI Spindo SNI tebal, dinding spandek/zincalume anti karat, meja stainless steel, dan finishing cat duco premium.'
      }
    ]
  },
  sidoarjo: {
    slug: 'sidoarjo',
    name: 'Sidoarjo',
    province: 'Jawa Timur',
    postalCode: '61218',
    geo: { lat: -7.4478, lng: 112.7183 },
    districts: ['Waru', 'Gedangan', 'Sedati', 'Candi', 'Taman', 'Krian', 'Sidoarjo Kota', 'Sukodono'],
    metaTitle: 'Jasa Booth Container & Rombong Sidoarjo | JM Kontainer Murah Berkualitas',
    metaDesc: 'Bengkel pembuatan booth container & rombong jualan custom di Sidoarjo (Waru, Sedati, Candi, Krian). Rangka BSI Spindo SNI kokoh, free survei lokasi.',
    heroHeadline: 'Jasa Booth Container & Rombong Jualan di Sidoarjo',
    heroSubheadline: 'Solusi booth kontainer usaha kuliner, cafe, dan gerobak waralaba di Sidoarjo. Dikerjakan tukang las berpengalaman 7+ tahun dengan harga jujur apa adanya.',
    deliveryDays: '7-14 Hari Kerja',
    popularRequests: [
      'Booth Cafe Modular Bongkar Pasang Sidoarjo',
      'Rombong Kontainer Kebab & Burger 2x2m',
      'Kanopi Alderon Peredam Panas Perumahan Sidoarjo',
      'Pagar Dorong Minimalis Modern BSI Spindo'
    ],
    faq: [
      {
        q: 'Apakah melayani kirim dan setting di Sidoarjo?',
        a: 'Tentu, kami melayani pengiriman dan setting langsung di lokasi Anda di Waru, Gedangan, Taman, Krian, Candi, hingga Porong.'
      },
      {
        q: 'Bisa custom kelistrikan dan meja sink air?',
        a: 'Bisa. Semua booth kontainer bisa di-custom lengkap dengan instalasi MCB kabel listrik, stop kontak, lampu LED downlight, dan sink cuci piring.'
      }
    ]
  },
  gresik: {
    slug: 'gresik',
    name: 'Gresik',
    province: 'Jawa Timur',
    postalCode: '61121',
    geo: { lat: -7.1566, lng: 112.6555 },
    districts: ['Kebomas', 'Manyar', 'Driyorejo', 'Menganti', 'Gresik Kota', 'Bungah', 'Cerme'],
    metaTitle: 'Jasa Booth Container & Rombong Gresik | Bengkel Las JM Kontainer',
    metaDesc: 'Pusat pembuatan booth container UMKM, rombong jualan, & kanopi alderon di Gresik (Menganti, Driyorejo, Manyar, GKB). Bergaransi anti karat.',
    heroHeadline: 'Jasa Booth Container & Rombong Custom di Gresik',
    heroSubheadline: 'Lokasi workshop kami di Surabaya Barat sangat dekat dengan Menganti dan Driyorejo Gresik. Respon cepat, survei tanpa biaya, dan kualitas SNI.',
    deliveryDays: '7-14 Hari Kerja',
    popularRequests: [
      'Booth Kontainer Take-away Minuman Menganti Gresik',
      'Gerobak Kontainer Estetik GKB (Gresik Kota Baru)',
      'Kanopi Carport Alderon Rumah Subsidi & Komersial',
      'Pagar Laser Cutting / Plat Besi Minimalis'
    ],
    faq: [
      {
        q: 'Apakah lokasi Gresik dekat dengan workshop JM Kontainer?',
        a: 'Sangat dekat. Workshop kami di Benowo-Pakal berbatasan langsung dengan Menganti dan Kepatihan Gresik, sehingga survei dan kirim sangat cepat.'
      },
      {
        q: 'Berapa DP untuk mulai pengerjaan?',
        a: 'DP 50% setelah SPK dan desain disepakati, sisa pelunasan saat unit siap kirim atau setting di tempat.'
      }
    ]
  },
  bangkalan: {
    slug: 'bangkalan',
    name: 'Bangkalan',
    province: 'Jawa Timur',
    postalCode: '69112',
    geo: { lat: -7.0315, lng: 112.7483 },
    districts: ['Kamal', 'Burneh', 'Socah', 'Bangkalan Kota', 'Arosbaya', 'Blega', 'Tanjung Bumi'],
    metaTitle: 'Jasa Booth Container Bangkalan Madura | JM Kontainer Terpercaya',
    metaDesc: 'Jasa pembuatan rombong booth container jualan dan kanopi di Bangkalan Madura via Suramadu. Kuat, tahan angin laut, material BSI Spindo SNI.',
    heroHeadline: 'Jasa Pembuatan Booth Container di Bangkalan Madura',
    heroSubheadline: 'Melayani pengiriman cepat via Jembatan Suramadu ke Kamal, Burneh, dan Bangkalan Kota. Diberi lapisan anti karat ekstra untuk ketahanan iklim pesisir.',
    deliveryDays: '8-14 Hari Kerja',
    popularRequests: [
      'Booth Kontainer Es Teh & Boba Kamal Madura',
      'Rombong Kontainer Kuliner Bebek & Seafood Bangkalan',
      'Kanopi Alderon Tahan Panas & Angin Kencang',
      'Pagar Besi Minimalis Kuat Anti Keropos'
    ],
    faq: [
      {
        q: 'Apakah booth kontainer dikirim lewat Suramadu ke Bangkalan?',
        a: 'Ya, kami kirim unit booth kontainer siap pakai menggunakan armada truk/towing langsung melintasi Suramadu ke lokasi Anda di Bangkalan.'
      },
      {
        q: 'Apakah besi tahan karat untuk daerah Madura?',
        a: 'Kami mengaplikasikan cat dasar epoxy primer anti-karat sebelum finishing duco, sangat cocok untuk iklim pesisir Madura.'
      }
    ]
  },
  lamongan: {
    slug: 'lamongan',
    name: 'Lamongan',
    province: 'Jawa Timur',
    postalCode: '62211',
    geo: { lat: -7.1281, lng: 112.4131 },
    districts: ['Babat', 'Paciran', 'Deket', 'Lamongan Kota', 'Tikung', 'Sukodadi', 'Turi'],
    metaTitle: 'Jasa Booth Container & Rombong Lamongan | JM Kontainer Murah',
    metaDesc: 'Bengkel las pembuatan booth container UMKM, rombong jualan kuliner khas, kanopi & pagar besi di Lamongan dan Babat. Hubungi 0815-5401-6679.',
    heroHeadline: 'Jasa Booth Container & Rombong Custom di Lamongan',
    heroSubheadline: 'Cocok untuk pedagang kuliner Lamongan dan pebisnis muda. Booth ringkas, estetik, berdaya tahan tinggi, dan mudah dipindah tempat.',
    deliveryDays: '8-14 Hari Kerja',
    popularRequests: [
      'Rombong Kontainer Soto Lamongan Modern 3x2m',
      'Booth Minuman Portable Pasar Kuliner Deket',
      'Kanopi Alderon Rumah Tinggal di Babat Lamongan',
      'Pagar Besi Hollow Galvanis Minimalis'
    ],
    faq: [
      {
        q: 'Apakah bisa kirim sampai ke Babat dan Paciran Lamongan?',
        a: 'Bisa. Kami melayani pengiriman booth jadi ke seluruh kecamatan di Kabupaten Lamongan.'
      }
    ]
  },
  pasuruan: {
    slug: 'pasuruan',
    name: 'Pasuruan',
    province: 'Jawa Timur',
    postalCode: '67118',
    geo: { lat: -7.6453, lng: 112.9075 },
    districts: ['Pandaan', 'Gempol', 'Bangil', 'Pasuruan Kota', 'Purwosari', 'Prigen', 'Sukorejo'],
    metaTitle: 'Jasa Booth Container Pasuruan & Pandaan | JM Kontainer Presisi',
    metaDesc: 'Fabrikasi booth container cafe, rombong jualan kuliner, kanopi & pagar minimalis di Pandaan, Gempol, Bangil, Pasuruan. Kualitas premium SNI.',
    heroHeadline: 'Jasa Booth Container & Rombong Custom Pasuruan - Pandaan',
    heroSubheadline: 'Dukung geliat pariwisata kuliner dan cafe di Pandaan dan Pasuruan dengan booth container estetik instagramable berstandar industri.',
    deliveryDays: '8-14 Hari Kerja',
    popularRequests: [
      'Booth Cafe Estetik Outdoor Pandaan & Prigen',
      'Rombong Kontainer Street Food Bangil Pasuruan',
      'Kanopi Alderon Carport Villa & Rumah',
      'Pagar Besi Sliding Minimalis Otomatis'
    ],
    faq: [
      {
        q: 'Apakah melayani area wisata Pandaan dan Prigen Pasuruan?',
        a: 'Ya, kami sering menerima pesanan booth cafe modular untuk kawasan kuliner dan wisata di Pandaan, Tretes, dan Prigen.'
      }
    ]
  },
  malang: {
    slug: 'malang',
    name: 'Malang',
    province: 'Jawa Timur',
    postalCode: '65111',
    geo: { lat: -7.9797, lng: 112.6304 },
    districts: ['Klojen', 'Lowokwaru', 'Blimbing', 'Sukun', 'Kedungkandang', 'Singosari', 'Batu'],
    metaTitle: 'Jasa Booth Container Malang & Batu | JM Kontainer Custom Cafe',
    metaDesc: 'Pusat pembuatan booth container cafe kekinian, rombong franchise, & kanopi modern di Malang & Kota Batu. Rangka kokoh BSI Spindo SNI.',
    heroHeadline: 'Jasa Pembuatan Booth Container Cafe di Malang & Batu',
    heroSubheadline: 'Spesialis booth container cafe kampus, resto modular, dan rombong F&B di Malang Raya. Tahan cuaca dingin dan hujan lebat, finishing mulus.',
    deliveryDays: '10-14 Hari Kerja',
    popularRequests: [
      'Booth Container Coffee Shop 2 Lantai Lowokwaru Malang',
      'Booth Kuliner Kampus UB / UM 2x2m',
      'Booth Modular Kios Wisata Kota Batu',
      'Kanopi Alderon Tebal Bebas Bocor Malang'
    ],
    faq: [
      {
        q: 'Bagaimana pengiriman booth kontainer ke Malang dan Batu?',
        a: 'Unit kami kirim via truk towing atau flatbed langsung ke titik usaha Anda di Malang Raya dan Kota Batu siap pakai.'
      },
      {
        q: 'Apakah tahan cuaca hujan dan lembap di Malang?',
        a: 'Sangat tahan. Rangka besi kami lapisi zinc chromate & duco polyurethane, serta plafon kami beri insulasi peredam panas & suara.'
      }
    ]
  }
}
