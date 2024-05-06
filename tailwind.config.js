/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
      './templates/**/*.html',
      './containers/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
  
}