/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [require('flowbite/plugin'),require('flowbite-typography'),],
=======
  plugins: [require('flowbite/plugin')],
>>>>>>> 2f4fb8910c29a37b9e746c157bc88aeccb667b7d
}
