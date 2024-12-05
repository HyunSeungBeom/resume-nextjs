import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple100: '#E9D8FD',
        purple200: '#D6BCFA',
        purple300: '#B794F4',
        purple400: '#9F7AEA',
        purple500: '#805AD5',
        purple600: '#6B46C1',
        blue100: '#ECF6FF',
        blue101: '#F2FBFE',
        blue200: '#2D9CDB',
        blue300: '#2F80ED',
        blue400: '#0E4E97',
        gray100: '#E8EBED',
        gray200: '#C9CDD2',
        gray300: '#9FA4AA',
        gray400: '#72787F',
        gray500: '#464C53',
        gray600: '#26282B',
        green100: '#EEFDFA',
        green200: '#00AF89',
        green300: '#14866D',
        red100: '#FEE7E6',
        red200: '#EB5757',
        red300: '#B32424',
        white100: '#FFFFFF',
        white200: '#F7F8F9',
        yellow100: '#FEF6E7',
        yellow200: '#FFCC33',
        yellow300: '#F2994A',
      },
    },
  },
  plugins: [],
} satisfies Config;
