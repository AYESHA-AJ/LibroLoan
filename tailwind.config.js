/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding:"1.25rem"
      },
      colors: {
        primary: '#D2D180',
        yellow: '#FFAF00',
        Ppink: '#D8AE7E',
        cuteGreen:'#FFC94A'
      }
    },
  },
  plugins: [],
}

