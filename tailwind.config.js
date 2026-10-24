/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EBE5D8',
          card: '#FFFFFF',
        },
        gold: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
        },
        bronze: {
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-hanken)', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(180, 83, 9, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'warm-hover': '0 20px 35px -5px rgba(180, 83, 9, 0.15), 0 8px 10px -4px rgba(0, 0, 0, 0.04)',
        'gold-glow': '0 4px 20px -2px rgba(217, 119, 6, 0.35)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
