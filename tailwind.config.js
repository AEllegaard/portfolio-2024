/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hvid: '#ececec',
        back: '#d9d9d9',
        sort: '#202020',
        grå: '#232323',
      },
      fontSize: {
        display: [ '24px' , '48px' ]
      },
      dropShadow: {
        '3xl': '5px 5px 5px rgba(0, 0, 0, 0.4)',
      },
      cursor: {
        'fancy': 'url(https://www.cursors-4u.com */ * {cursor: url(https://cur.cursors-), pointer',
      }
    },
  },
  plugins: [],
}
