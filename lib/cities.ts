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
    metaTitle: 'Custom Container Booth & Kanopi Surabaya | JayaMulya Studio Fabrikasi Presisi',
    metaDesc: 'Studio fabrikasi custom container booth, commercial kiosk F&B, kanopi alderon UPVC & gerbang minimalis di Surabaya. Workshop di Pakal Benowo, survei lokasi terjadwal.',
    heroHeadline: 'Fabrikasi Custom Container Booth & Kanopi Baja Surabaya',
    heroSubheadline: 'Fabrikasi langsung dari workshop JayaMulya di Pakal, Surabaya Barat. Material BSI Spindo SNI, presisi rekayasa arsitektural, siap kirim ke seluruh sudut Surabaya.',
    deliveryDays: '7-12 Hari Kerja',
    popularRequests: [
      'Custom Container Booth Kopi & F&B Modern 3x2m',
      'Commercial Kiosk Modular Multi-Outlet 4x2.5m',
      'Architectural Canopy Alderon UPVC Double Layer Carport',
      'Minimalist Steel Sliding Gate Hollow SNI Finishing Duco'
    ],
    faq: [
      {
        q: 'Apakah bisa survei lokasi langsung di area Surabaya?',
        a: 'Ya, tim JayaMulya melayani survei pengukuran lokasi langsung se-Surabaya (Surabaya Barat, Timur, Pusat, Selatan, Utara) untuk ukur luasan booth, kanopi, atau gerbang.'
      },
      {
        q: 'Berapa lama proses fabrikasi di workshop Surabaya?',
        a: 'Pengerjaan rata-rata 7-12 hari kerja sesuai antrian order dan tingkat kompleksitas interior/aksesoris. Workshop kami berlokasi di Benowo, Pakal, Surabaya Barat.'
      },
      {
        q: 'Material apa yang menjadi standar konstruksi?',
        a: 'Kami memakai rangka baja hollow BSI Spindo SNI tebal, dinding spandek/zincalume anti-karat, meja stainless steel, dan finishing cat duco premium tahan cuaca.'
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
    metaTitle: 'Custom Container Booth & Kanopi Sidoarjo | JayaMulya Industrial Studio',
    metaDesc: 'Fabrikasi custom container booth, kiosk commercial & kanopi arsitektural di Sidoarjo (Waru, Sedati, Candi, Krian). Rangka SNI kokoh, survei lokasi terjadwal.',
    heroHeadline: 'Fabrikasi Custom Container Booth & Kanopi di Sidoarjo',
    heroSubheadline: 'Solusi container booth usaha kuliner, cafe, dan gerobak waralaba di Sidoarjo. Dikerjakan tukang las berpengalaman 7+ tahun dengan kualitas terukur dan transparan.',
    deliveryDays: '7-14 Hari Kerja',
    popularRequests: [
      'Booth Cafe Modular Bongkar Pasang Sidoarjo',
      'Commercial Kiosk F&B Modern 3x2m',
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
    metaTitle: 'Custom Container Booth & Kanopi Gresik | JayaMulya Fabrikasi Baja',
    metaDesc: 'Fabrikasi booth container commercial, kanopi baja arsitektural, & gerbang minimalis di Gresik (Menganti, Driyorejo, Manyar, GKB). Bergaransi mutu terpercaya.',
    heroHeadline: 'Fabrikasi Custom Container Booth & Kanopi Baja di Gresik',
    heroSubheadline: 'Lokasi workshop kami di Surabaya Barat sangat dekat dengan Menganti dan Driyorejo Gresik. Respon cepat, survei akurat, dan standar material SNI.',
    deliveryDays: '7-14 Hari Kerja',
    popularRequests: [
      'Booth Kontainer Take-away Minuman Menganti Gresik',
      'Gerobak Kontainer Estetik GKB (Gresik Kota Baru)',
      'Kanopi Carport Alderon Rumah Tinggal & Komersial',
      'Pagar Laser Cutting / Plat Besi Minimalis'
    ],
    faq: [
      {
        q: 'Apakah lokasi Gresik dekat dengan workshop JayaMulya?',
        a: 'Sangat dekat. Workshop kami di Benowo-Pakal berbatasan langsung dengan Menganti dan Kepatihan Gresik, sehingga survei dan kirim sangat cepat.'
      },
      {
        q: 'Berapa skema pembayaran untuk mulai pengerjaan?',
        a: 'DP bertahap setelah gambar dan penawaran disepakati, termin progres pengerjaan, dan pelunasan saat unit siap kirim atau serah terima.'
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
    metaTitle: 'Custom Container Booth Bangkalan Madura | JayaMulya Fabrication Studio',
    metaDesc: 'Jasa pembuatan container booth komersial dan kanopi baja di Bangkalan Madura via Suramadu. Kuat, tahan angin pesisir, material BSI Spindo SNI.',
    heroHeadline: 'Fabrikasi Custom Container Booth di Bangkalan Madura',
    heroSubheadline: 'Melayani pengiriman cepat via Jembatan Suramadu ke Kamal, Burneh, dan Bangkalan Kota. Diberi lapisan anti-karat ekstra untuk ketahanan iklim pesisir.',
    deliveryDays: '8-14 Hari Kerja',
    popularRequests: [
      'Booth Kontainer Cafe & Minuman Kamal Madura',
      'Custom Container Booth Kuliner Seafood Bangkalan',
      'Kanopi Alderon Tahan Panas & Angin Kencang',
      'Pagar Besi Minimalis Kuat Anti Keropos'
    ],
    faq: [
      {
        q: 'Apakah unit booth dikirim lewat Suramadu ke Bangkalan?',
        a: 'Ya, kami kirim unit booth siap pakai menggunakan armada truk langsung melintasi Suramadu ke lokasi Anda di Bangkalan.'
      },
      {
        q: 'Apakah material tahan karat untuk daerah pesisir Madura?',
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
    metaTitle: 'Custom Container Booth & Kanopi Lamongan | JayaMulya Studio',
    metaDesc: 'Fabrikasi booth container komersial, kanopi baja & pagar besi minimalis di Lamongan dan Babat. Hubungi JayaMulya 0815-5401-6679.',
    heroHeadline: 'Fabrikasi Custom Container Booth & Kanopi di Lamongan',
    heroSubheadline: 'Solusi booth fungsional, estetik, berdaya tahan tinggi, dan mudah disesuaikan untuk pebisnis kuliner dan ritel di Kabupaten Lamongan.',
    deliveryDays: '8-14 Hari Kerja',
    popularRequests: [
      'Custom Container Booth Kuliner Lamongan Modern 3x2m',
      'Booth Minuman Portable Area Komersial Deket',
      'Kanopi Alderon Rumah Tinggal di Babat Lamongan',
      'Pagar Besi Hollow Galvanis Minimalis'
    ],
    faq: [
      {
        q: 'Apakah bisa kirim sampai ke Babat dan Paciran Lamongan?',
        a: 'Bisa. Kami melayani pengiriman booth dan pemasangan kanopi ke seluruh kecamatan di Kabupaten Lamongan.'
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
    metaTitle: 'Custom Container Booth Pasuruan & Pandaan | JayaMulya Presisi',
    metaDesc: 'Fabrikasi container booth cafe, commercial kiosk, kanopi & pagar minimalis di Pandaan, Gempol, Bangil, Pasuruan. Standar kualitas industri.',
    heroHeadline: 'Custom Container Booth & Fabrikasi Pasuruan - Pandaan',
    heroSubheadline: 'Dukung geliat pariwisata kuliner dan cafe di Pandaan dan Pasuruan dengan booth container estetik dan konstruksi kanopi berstandar industri.',
    deliveryDays: '8-14 Hari Kerja',
    popularRequests: [
      'Booth Cafe Outdoor Estetik Pandaan & Prigen',
      'Commercial Food Container Kiosk Bangil Pasuruan',
      'Kanopi Alderon Carport Villa & Rumah Tinggal',
      'Pagar Besi Sliding Minimalis Otomatis'
    ],
    faq: [
      {
        q: 'Apakah melayani area wisata Pandaan dan Prigen Pasuruan?',
        a: 'Ya, kami melayani pesanan booth cafe modular untuk kawasan kuliner dan wisata di Pandaan, Tretes, dan Prigen.'
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
    metaTitle: 'Custom Container Booth Malang & Batu | JayaMulya Studio Fabrikasi',
    metaDesc: 'Pusat fabrikasi custom container booth cafe, franchise kiosk, & kanopi modern di Malang & Kota Batu. Rangka kokoh BSI Spindo SNI.',
    heroHeadline: 'Fabrikasi Custom Container Booth Cafe di Malang & Batu',
    heroSubheadline: 'Spesialis booth container cafe kampus, resto modular, dan kiosk F&B di Malang Raya. Tahan cuaca dingin dan hujan lebat, finishing mulus.',
    deliveryDays: '10-14 Hari Kerja',
    popularRequests: [
      'Booth Container Coffee Shop Lowokwaru Malang',
      'Booth Kuliner Kampus UB / UM 3x2m',
      'Booth Modular Kios Wisata Kota Batu',
      'Kanopi Alderon Tebal Bebas Bocor Malang'
    ],
    faq: [
      {
        q: 'Bagaimana pengiriman booth kontainer ke Malang dan Batu?',
        a: 'Unit kami kirim via armada truk khusus langsung ke titik lokasi usaha Anda di Malang Raya dan Kota Batu siap pakai.'
      },
      {
        q: 'Apakah tahan cuaca lembap dan curah hujan tinggi di Malang?',
        a: 'Sangat tahan. Rangka besi kami lapisi zinc chromate & duco polyurethane, serta atap diberi insulasi peredam panas dan suara.'
      }
    ]
  }
}
