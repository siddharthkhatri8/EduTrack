/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: '#eeeeee',
        backWhite: '#FFFFFF',
        customGray: '#E9EDF1',
        textBlue: "#3F526E",
      },
    },
  },  
  plugins: [],
};
