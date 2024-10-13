/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#d9e9fa',
        primary: '#5F021F',
        secondary: '#c2ddfc',
        textDark: '#333333',
        black: '#000000',
        blueLight:'#6d9dbf',
        burdeos:{
          100: '#f8d7da', // tono claro
          200: '#f5c6cb',
          300: '#f1b0b2',
          400: '#ec878d',
          500: '#800000', // tono base
          600: '#600000', // tono oscuro
          700: '#400000',
          800: '#200000',
          900: '#0c0000', // tono muy oscuro
        }
      },
    },
  },
  plugins: [],
}

