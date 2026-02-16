```mjs
/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8EAF0',
          100: '#D1D5E1',
          200: '#A3ADC3',
          300: '#7584A5',
          400: '#475C87',
          500: '#193469',
          600: '#172E5D',
          700: '#142851',
          800: '#112245',
          900: '#0F1C3A',
          950: '#0B142A'
        },
        accent: {
          50: '#FBF6EE',
          100: '#F7EDDC',
          200: '#EEDAA0',
          300: '#E5C683',
          400: '#DCB367',
          500: '#D4A056',
          600: '#B78746',
          700: '#9A7039',
          800: '#7D5A2F',
          900: '#604525',
          950: '#4C361D'
        },
        surface: {
          50: '#FFFFFF',
          100: '#F4F5F7',
          200: '#E9ECF0',
          300: '#D8DDE4',
          900: '#101828'
        },
        success: '#057A55',
        warning: '#D4A056',
        error: '#BE123C',
      },
      fontFamily: {
        // Set Inter as the default sans-serif font
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
```