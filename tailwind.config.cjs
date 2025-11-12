/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        adharaPink: "#ED5A87",
        adharaBlack: "#0B0B0C",
      },
    },
  },
  plugins: [],
};
