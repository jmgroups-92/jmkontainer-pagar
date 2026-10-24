# Product Requirements Document (PRD)
## JM Workshop Landing & Conversion Engine

### 1. Product Vision
Platform web landing page berkecepatan tinggi, dioptimalkan untuk perangkat mobile, berorientasi konversi langsung (WhatsApp First), serta memiliki fondasi Local SEO & Analytics komprehensif untuk bisnis bengkel fabrikasi logam.

### 2. User Personas & User Flow
```
Pengunjung (Pencarian Google / Iklan / IG)
    │
    ▼
Landing Page (Hero & Value Prop) ──► 1-Click WhatsApp Direct
    │
    ├─► Validasi Layanan (Layanan / Spek)
    ├─► Validasi Kepercayaan (6 USPs, 500+ Proyek, Testimoni)
    ├─► Bukti Pengerjaan (Galeri Riil & Foto Workshop)
    │
    ▼
Footer / Floating Button ──► Form Penawaran / WhatsApp Lead
```

### 3. Core Feature Requirements
1. **Hero Section:**
   - H1 kaya kata kunci lokal (*"Spesialis Rombong Kontainer, Kanopi Alderon & Pagar Minimalis Surabaya"*).
   - Trust badge (Pengalaman sejak 2017).
   - High-contrast direct CTAs (WhatsApp CTA & Smooth Scroll CTA).
2. **Trust Bar & Value Proposition:**
   - Baris badge cepat penanda otoritas lokal & jangkauan kota.
   - 6 Pilar USP: Pengalaman 7+ tahun, 500+ proyek, SNI material, garansi pengerjaan, harga transparan, survei gratis.
3. **Showcase Layanan & Portofolio:**
   - 3 Layanan utama dengan tag kategori & link direct konsultasi harga.
   - Grid galeri foto resolusi tinggi nyata pengerjaan (bukan 3D render mock) + link eksternal Instagram `@jayamaswood`.
4. **Social Proof & Testimonial:**
   - Ulasan terverifikasi pelanggan (Booth Kopi, Rumah Tinggal, Kontraktor).
   - Sejarah profil bengkel & metrik capaian.
5. **Interactive Engagement & Lead Capture:**
   - Floating Action Button (FAB) WhatsApp dengan animasi pulse & auto pre-filled chat text.
   - Form penawaran harga di footer yang terintegrasi pengalihan pesan WhatsApp otomatis.
6. **Analytics & Tracking (GA4):**
   - Integrasi GA4 tag `G-QMY2G5J3EJ`.
   - Event tracking: `click_whatsapp`, `generate_lead`, `click_instagram`, `click_email`.
   - IntersectionObserver reveal animations untuk engagement scroll.

### 4. SEO & Metadata Specifications
- Semantic HTML (h1 tunggal, header, nav, main, section, footer).
- JSON-LD Structured Data: Schema `LocalBusiness` lengkap dengan geo koordinat (-7.2575, 112.7521), area served, catalog layanan, dan opening hours.
- OpenGraph & Twitter Card tags dengan thumbnail preview 1200x630.
