/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        'gradient-blue': '#28A7ED',
        'gradient-purple': '#A337F6',
        'gradient-red': '#E84D70',
        'white': '#FFFFFF',
        'grey-white': '#F2F4FF',
        'grey-white2': '#F7F8FD',
        'blue': '#3A4374',
        'grey': '#647196',
        'strong-blue': '#4661E6',
        'dark-blue': '#373F68',
        'purple': '#AD1FEA',
        'red': '#D73737',
        'orange': '#F49F85',
        'light-blue': '#62BCFA',
        'hover-purple': '#C75AF6',
        'hover-blue': '#CFD7FF',
        'hover-grey': '#656EA3',
        'hover-red': '#E98888',
        'white2': '#F2F4FE',
      },
    },
  },
  plugins: [],
}