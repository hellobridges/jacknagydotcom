/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        primary: '#2563EB',
        secondary: '#1E293B',
        glass: {
          subtle: 'rgba(30, 41, 59, 0.25)',
          border: 'rgba(107, 114, 128, 0.1)',
          glow: 'rgba(37, 99, 235, 0.02)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float-slow': 'floatSlow 20s ease-in-out infinite',
        'float-reverse': 'floatReverse 25s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-10px, -10px) rotate(1deg)' },
          '66%': { transform: 'translate(5px, -5px) rotate(-0.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(8px, 8px) rotate(-1deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 