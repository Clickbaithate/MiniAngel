/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        polaroid: [ "Permanent Marker" ],
        title: [ "Modak" ]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

