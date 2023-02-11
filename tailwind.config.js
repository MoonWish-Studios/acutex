/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "#27272A",
        white1: "#FAFAFA",
        gray1: "#737373",
        gray2: "#404040",
        grayInput: "#F2F2F2",
      },
    },
  },
  plugins: [],
}
