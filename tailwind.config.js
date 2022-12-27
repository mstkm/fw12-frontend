/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00005C',
      },
      backgroundColor: {
        'primary': '#00005C'
      }
    },
  },
  plugins: [require("daisyui")],
}
