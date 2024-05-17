/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   colors: {
     'primary': '#3e2723',
     'secondary': '#dd6a41',
     'accent': '#ffdab9',
     'natural-brown': '#7e5835'
   }
  },
  plugins: [],
};
