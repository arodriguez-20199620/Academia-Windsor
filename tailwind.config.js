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
        'dark-blue': '#004173',
        'sky-blue': '#0cb7f2',
        'light-sky-blue': '#7cdaf9',
        'pale-cyan': '#b6ffff',
        'steel-blue': '#0979b0',
      },
    }
  },
  plugins: [],
}