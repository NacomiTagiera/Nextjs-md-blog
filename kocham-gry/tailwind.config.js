/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303030",
        secondary: "#C34F4F",
        warning: "#FF7475",
        light: "#FFF6F4",
      },
    },
  },
  plugins: [],
};
