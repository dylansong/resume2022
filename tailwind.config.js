/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grb: "#F8F7F7",
        pri: "#333333",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        mon: ["Montserrat", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
