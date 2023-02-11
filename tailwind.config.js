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
        gray3: "#A3A3A3",
        white2: "#E9E9E9",
      },
      backgroundImage: {
        "yellow-gradient": "url('/assets/gradientbg.png')",
        "cloth-bg": "url('/assets/actionbg.png')",
      },
    },
  },
  plugins: [],
}
