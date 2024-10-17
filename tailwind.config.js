/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Helvetica', 
          'Arial', 
          'sans-serif', 
          '"Apple Color Emoji"', 
          '"Segoe UI Emoji"',
        ],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-horizontal': 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}