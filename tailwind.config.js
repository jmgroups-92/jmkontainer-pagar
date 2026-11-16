/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#F7F6F2',
          surface: '#EAE7DF',
          elevated: '#FFFFFF',
          dark: '#171A1D',
          darkcard: '#1F2327',
          darkborder: 'rgba(255, 255, 255, 0.08)',
          text: '#202326',
          secondary: '#686B6D',
          muted: '#969794',
        },
        copper: {
          50: '#FBF5F0',
          100: '#F6E9DD',
          200: '#ECD0BA',
          300: '#E1B394',
          400: '#D19A68',
          500: '#B66A37',
          600: '#A0592C',
          700: '#834522',
          800: '#67351B',
          900: '#4D2714',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        editorial: ['Georgia', 'Cambria', 'serif'],
      },
      borderRadius: {
        card: '18px',
        btn: '8px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(32, 35, 38, 0.04), 0 6px 16px rgba(32, 35, 38, 0.03)',
        'elevated': '0 12px 32px -8px rgba(23, 26, 29, 0.08), 0 4px 12px -2px rgba(23, 26, 29, 0.04)',
        'dark-elevated': '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
        'copper-glow': '0 8px 24px -4px rgba(182, 106, 55, 0.28)',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'emphasis': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
