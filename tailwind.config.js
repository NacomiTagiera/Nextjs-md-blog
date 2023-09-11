/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      dark: '#5E5E5E',
      light: '#F2ECFF',
      smoky: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        DEFAULT: '#303030',
      },
      seagreen: {
        50: '#eafff7',
        100: '#cdfee9',
        200: '#a0fad8',
        300: '#63f2c5',
        400: '#25e2ac',
        DEFAULT: '#00c896',
        500: '#00a47b',
        600: '#008367',
        700: '#006752',
        800: '#005545',
        900: '#003028',
      },
    },
    keyframes: {
      jelly: {
        '0%,100%': { transform: 'scale(1, 1)' },
        '25%': { transform: 'scale(0.95, 1.05)' },
        '50%': { transform: 'scale(1.05, 0.95)' },
        '75%': { transform: 'scale(0.95, 1.05)' },
      },
    },
    animation: {
      jelly: 'jelly 0.5s',
    },
    animationDuration: {
      1500: '1500ms',
      2000: '2000ms',
      2500: '2500ms',
    },
  },
};
export const plugins = [require('tailwindcss-animate'), require('@tailwindcss/typography')];
