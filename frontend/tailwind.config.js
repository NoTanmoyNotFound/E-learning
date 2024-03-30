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
    colors:{
      'dark-purple' : '#081a51',
      'Light-white' : 'rgba(255,255,255,0.18)',
      'black-dark':'#00000050',
      'dull-white': '#FFFFFFB3',
      'white-light': '#FFFFFF30',
      'white-mediam': '#FFFFFF40',
      'neon-blue': '#2ED8FF',
      'ivorow' : "#FFFFF0",
      'op-blue': "#7DA0FA",
      'neon-red' : '#FF3131',
      'back-dr' : '#343a40'
    },
  },
  plugins: [],
}

