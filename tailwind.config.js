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
        primary: '#5579e5',
        secondary: '#c2ddfc',
        textDark: '#333333',
        black: '#000000',
        blueLight:'#6d9dbf',
        
      },
    },
  },
  plugins: [],
}

