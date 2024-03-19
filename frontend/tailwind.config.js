<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
     'Nunito' : ['Nunito', 'sans-serif'] 
    },
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
  ],
  },
  plugins: [],
}

>>>>>>> 38aee47d5fbd111cbc171fd84c2c9d21da9a756e
