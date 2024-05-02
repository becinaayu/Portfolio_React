/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#f8edf7',
        customRose: '#f796be',
        customLilac: '#d0a8d5',
        PinkTitle: '#fc3e7e',
        customBlue: '#99bff4',
        customSky: '#1f94ea'
      },
      animation: {
        
      }
    },
  },
  plugins: [],
}

