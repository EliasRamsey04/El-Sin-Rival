/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEF2F2", // A light red/pink (red-50)
        vanilla: "#FEE2E2", // Slightly darker red (red-100)
        pink: "#FFD1DC",
        pistachio: "#93C572",
        chocolate: "#7B3F00",
        strawberry: "#DC2626", // Red-600 for contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
