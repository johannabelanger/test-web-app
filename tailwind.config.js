/** @type {import('tailwindcss').Config} */

import { withTV } from 'tailwind-variants/transformer';
import colors from'tailwindcss/colors';

export default withTV({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '644px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: "#FFFFFF",
        black: "#000000",
        background: "#F9FAFB", // gray-50
        border: "#E5E7EB", // gray-200
        text: {
          primary: '#111827', // gray-900
          secondary: '#6B7280', // gray-500
          link: '#1A6C7F', // fluidra-aqua-500
          success: '#047857',
          error: '#B91C1C', // red-700
        },
        fluidra: {
          aqua: { // primary
            50: '#E1F5F9',
            100: '#C4EAF3',
            200: '#88D5E8',
            300: '#4DC1DB',
            400: '#269FBA',
            500: '#1A6C7F',
            600: '#155766',
            700: '#10414C',
            800: '#0A2B33'
          },
          blue: { // secondary-ish, perhaps accent
            50: '#D6E0FF',
            100: '#ADC0FF',
            200: '#6186FF',
            300: '#0F47FF',
            400: '#002DC2',
            500: '#001A70',
            600: '#00155C',
            700: '#000F42',
            800: '#000B2E'
          },
        },
        gray: colors.gray,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        green: colors.green,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
});

