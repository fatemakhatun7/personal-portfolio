/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["fantasy"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
