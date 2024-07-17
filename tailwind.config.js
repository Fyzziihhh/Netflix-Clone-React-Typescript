/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '6p': '6%',
         '8p':'8%'
      },
      width: {
        '80p': '80%',
        '90p' : "90%"
      },
      height:{
           '50p':'50%'
      },
      colors: {
        'customColor': '#191919',
        'play-btn-hover': "#ffffffbf",
        'info-btn-light': '#6d6d6eb3',
        'info-btn-hover': '#6d6d6e66',
        'signup-btn-bg' : '#e50914',
        'form-switch-text' : '#737373',
        


      },
      gridTemplateColumns: {
        'auto-4': 'auto auto auto auto',
      },
    },
  },
  plugins: [],
}

