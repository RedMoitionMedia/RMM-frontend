/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 950px)" },
        // => @media (min-height: 1000px) { ... }
      },
    },
  },
  plugins: [],
};
