/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12100E',
          900: '#12100E',
          800: '#1B1814',
          700: '#27221D',
          600: '#3A332B',
        },
        ivory: {
          DEFAULT: '#F8F4EC',
          50: '#FFFDF9',
          100: '#FCFAF6',
          200: '#F1EADF',
          300: '#E6DCCB',
        },
        gold: {
          200: '#F1E3C4',
          300: '#E8D3A6',
          400: '#D9B87A',
          500: '#C9A15A',
          600: '#B08840',
          700: '#8A672C',
        },
        maroon: {
          600: '#6E1E2B',
          700: '#5A1823',
          800: '#45121B',
        },
        taupe: {
          400: '#8D8377',
          500: '#6B6156',
          600: '#4F473E',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif Tamil"', 'Georgia', 'serif'],
        sans: ['Manrope', '"Noto Sans Tamil"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18,16,14,0.04), 0 12px 32px -12px rgba(18,16,14,0.14)',
        lift: '0 2px 4px rgba(18,16,14,0.04), 0 24px 48px -16px rgba(18,16,14,0.22)',
        glow: '0 0 0 1px rgba(201,161,90,0.35), 0 18px 40px -14px rgba(201,161,90,0.45)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out both',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        progress: 'progress 8s linear both',
      },
    },
  },
  plugins: [],
};
