/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          accent: '#FF5722',
        },
        surface: {
          DEFAULT: '#FAFAF9',
          card: '#FFFFFF',
          dark: '#0C0A09',
        },
        'industrial-yellow': '#F59E0B',
        'action-green': '#22C55E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-hanken)', 'sans-serif'],
      },
      boxShadow: {
        'bento': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'bento-hover': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'glow-amber': '0 0 50px -10px rgba(249, 115, 22, 0.35)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
