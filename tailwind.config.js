const { withTV } = require('tailwind-variants/transformer');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default withTV({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        huge: '1536px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: "#FFFFFF",
        black: "#000000",
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
        background: "#F9FAFB", // gray-50
        border: "#E5E7EB", // gray-200, there are 2 border colors defined
        fluidra: {
          aqua: {
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
          blue: {
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
        text: {
          primary: '#111827', // gray-900
          secondary: '#6B7280', // gray-500
          link: '#1A6C7F', // fluidra-aqua-500
          success: '#047857',
          error: '#B91C1C', // red-700
        },
        body: {
          color: "#001A70",
          bgWhite: "#FFFFFF",
          bgGray: "#F5F5F5", // gray-100
        },
        secondary: {
          color: "#292929",
          bgWhite: "#FFFFFF",
          bgGray100: "#F5F5F5", // gray-100
        },
        tertiary: {
          color: "#FFFFFF",
          bg: "#114854", // aqua-800, this doesn't match fluidra-aqua-800
        },
        emphasis: '#001A70',
        //border: '#E0E0E0', // not actually gray-200, doesn't match the other
        primary: {
          primaryColorAqua700: '#1A6C7F',
          primaryColorAqua800: '#114854',
        },
        success: {
          color: '#0E8422',
          subtle: '#CFE6D3',
          border: '#CFE6D3',
        },
        danger: {
          color: '#C9302C',
          subtle: '#F4D6D5',
          border: '#F4D6D5',
        },
        warning: {
          color: '#E35205',
          subtle: '#F9DCCD',
          border: '#F9DCCD',
        },
        info: {
          color: '#007DBA',
          subtle: '#CCE5F1',
          border: '#CCE5F1',
        },
      },
    },
  },
  plugins: [],
});

