/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        chakra:  "Noto Sans Display, sans-serif",
      },
      colors: {
        black: '#000000'
      }
    },
  },
  plugins: [],
}

