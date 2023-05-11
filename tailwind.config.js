/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        "epilogue": ["Epilogue", "sans-serif"]
      },
      screens: {
        '3xl': '2500px',
      }
    },
  },
  plugins: [
  ],
}