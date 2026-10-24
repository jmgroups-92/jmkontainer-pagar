# Software Requirements Specification (SRS)
## JM Workshop Surabaya Web Application

### 1. System Architecture & Tech Stack
- **Framework:** Next.js 14.2+ (App Router)
- **UI & Runtime:** React 18.3, TypeScript 5.x
- **CSS Engine:** Tailwind CSS 3.4 + `@tailwindcss/forms`
- **Fonts:** Google Fonts via `next/font` (`Hanken_Grotesk` display, `Inter` body)
- **Icons:** Google Material Symbols Outlined
- **Package Manager / Runtime:** Bun / Node.js 20+

### 2. Runtime & Port Configuration
- **Development Port:** `7761` (`bun run dev` executes `next dev -p 7761`)
- **Default Host:** `http://localhost:7761`
- **Build Mode:** Standalone static export / Node.js SSR runtime

### 3. File & Module Structure
```
d:\Codes\bisnis\jmkontainer-pagar\
├── app/
│   ├── globals.css          # Tailwind base & custom animations/blueprint grid
│   ├── layout.tsx           # Root Layout, Metadata, JSON-LD Schema, GA4 Script
│   └── page.tsx             # Main landing page components & content data
├── components/
│   ├── FloatingWA.tsx       # Client FAB WhatsApp button with ping animation
│   ├── Footer.tsx           # Footer, nav links, contact info, lead form handler
│   ├── Navbar.tsx           # Sticky responsive navbar with mobile drawer
│   └── TrackingEvents.tsx   # Scroll reveal observer & CTA analytics hook
├── docs/
│   ├── BRD.md               # Business Requirements Document
│   ├── PRD.md               # Product Requirements Document
│   └── SRS.md               # Software Requirements Specification
├── lib/
│   └── gtag.ts              # GA4 window.gtag helper function
├── public/
│   └── images/              # Optimized WebP/PNG assets
├── package.json             # Scripts (dev on 7761) & dependencies
└── tailwind.config.js       # Typography & custom color tokens
```

### 4. Component Interface Specifications
1. **`app/layout.tsx` (Server Component):**
   - Mendefinisikan font CSS variables `--font-hanken` dan `--font-inter`.
   - Menginjeksi metadata Next.js (title, description, canonical, robots, geo tags).
   - Menyisipkan skrip Google Analytics 4 (`next/script` strategy `afterInteractive`).
   - Menyertakan structured data schema `LocalBusiness` melalui `<script type="application/ld+json">`.
2. **`components/Navbar.tsx` (Client Component):**
   - State `open` untuk toggle drawer menu pada layar mobile (< 768px).
   - Event trigger `click_whatsapp` dengan parameter `{ button_location: 'nav' | 'nav_mobile' }`.
3. **`components/Footer.tsx` (Client Component):**
   - Form handling: Validasi field `name` dan `contact`.
   - Memicu event `generate_lead` dan otomatis redirect ke WhatsApp API dengan URL-encoded message template.
4. **`components/FloatingWA.tsx` (Client Component):**
   - Fixed position `bottom-6 right-6` dengan z-index 50.
   - Ping ring pulse effect untuk memaksimalkan rasio klik.
5. **`lib/gtag.ts`:**
   - Menyediakan `trackEvent(eventName: string, params?: Record<string, any>)` yang aman terhadap `window.gtag` undefined check.

### 5. Non-Functional Requirements
- **Performance:** Target Google Lighthouse Score > 90 pada Desktop & Mobile.
- **Responsiveness:** Fluid breakpoint rendering dari 320px (mobile) hingga 1920px (desktop ultrawide).
- **SEO & Accessibility:** Tag semantic valid, atribut `alt` wajib pada seluruh elemen `<Image />`, contrast ratio teks memenuhi standar WCAG AA.
- **Conflict Prevention:** Dev port dialokasikan ke `7761` untuk menghindari tabrakan dengan service lain (misal Vite pada port 5173).
