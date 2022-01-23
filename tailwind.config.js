module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Noto Sans Display"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
