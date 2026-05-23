/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-bright': '#f8f9fb',
        'surface': '#f8f9fb',
        'surface-dim': '#d9dadc',
        'outline': '#747878',
        'outline-variant': '#c4c7c7',
        'on-surface': '#191c1e',
        'on-surface-variant': '#444748',
        'primary-container': '#1c1b1b',
        'surface-container-high': '#e7e8ea',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f4f6',
        'surface-container': '#edeef0',
        'secondary-container': '#fea619',
        'on-secondary-container': '#684000',
        'primary': '#000000',
        'on-primary': '#ffffff',
        'industrial-yellow': '#F59E0B',
        'action-green': '#22C55E',
        'matte-black': '#1A1A1A',
      },
      spacing: {
        xl: '80px', lg: '48px', md: '24px', xs: '8px',
        'margin-mobile': '16px', 'margin-desktop': '64px', gutter: '24px', sm: '16px',
      },
      fontFamily: {
        display: ['var(--font-hanken)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(40px,6vw,64px)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['clamp(32px,4vw,48px)', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-sm': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.5' }],
        'label-md': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
