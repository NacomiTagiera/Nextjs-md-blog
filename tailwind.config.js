/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: '#303030',
      secondary: '#C34F4F',
    },
  },
};
export const plugins = [
  require('tailwindcss-animate'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
];
