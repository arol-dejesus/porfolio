
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712', // Deepest black/blue
          900: '#0f172a', // Rich dark
          800: '#1e293b', // Card bg
          700: '#334155', // Borders
        },
        accent: {
          cyan: '#22d3ee',
          purple: '#a78bfa',
          pink: '#f472b6',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(circle, #1e293b 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
