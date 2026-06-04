import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: {
          50:  '#FAF6EE',
          100: '#F5EDD8',
          200: '#EDE0C4',
          300: '#E0CFA8',
          400: '#D4BE96',
          500: '#C4A87A',
          600: '#B08050',
          700: '#8A6038',
          800: '#5A3E24',
          900: '#2E1E0E',
        },
        ink: {
          50:  '#F0EBE6',
          100: '#E0D6CC',
          200: '#C4B4A4',
          300: '#A48A76',
          400: '#7A6050',
          500: '#5C4838',
          600: '#4A3A2C',
          700: '#382C20',
          800: '#26211D',
          900: '#180F0A',
        },
        gold: {
          300: '#E8C878',
          400: '#D4AC5A',
          500: '#B89D73',
          600: '#A07830',
        },
        leather: {
          900: '#0A0806',
          800: '#120E0A',
          700: '#1C1612',
          600: '#281E18',
          500: '#3A2E24',
          400: '#5A4A3A',
          300: '#7A6A58',
          200: '#A09080',
          100: '#C8BAA8',
          50:  '#E8DCC8',
        },
      },
      fontFamily: {
        cinzel:    ['var(--font-cinzel)',    'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        garamond:  ['var(--font-garamond)',  'Georgia', 'serif'],
        serif:     ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      maxWidth: {
        poem:    '52ch',
        prose:   '70ch',
        reading: '65ch',
        site:    '1200px',
      },
      letterSpacing: {
        widest: '0.25em',
        wider:  '0.12em',
        wide:   '0.06em',
      },
      transitionTimingFunction: {
        slow: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in':  'fadeIn 1s ease-out forwards',
        'fade-up':  'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'drawLine 1.4s ease-out forwards',
        'float':    'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%':   { width: '0%',   opacity: '0' },
          '20%':  { opacity: '1' },
          '100%': { width: '100%', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
