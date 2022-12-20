/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#1D1D1F',
      },
      fontFamily: {
        strong: ['Gilroy-ExtraBold'],
        base: ['Gilroy-Light'],
      },
      boxShadow: {
        brutalism: ['3px 3px 0px #1D1D1F'],
      },
    },
  },
  plugins: [],
}
