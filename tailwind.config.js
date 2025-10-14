/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFF0F5',
        'pink-accent': '#FFB6D9',
      },
      fontFamily: {
        'sans': ['Mona Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}