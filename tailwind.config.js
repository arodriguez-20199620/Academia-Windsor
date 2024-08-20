/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'golden-yellow': '#F0B506',
        'burnt-red': '#B64733',
        'almost-black': '#1D1D22',
      },
    }
  },
  plugins: [],
}