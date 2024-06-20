

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    ,  "./src/components/timer.js",
    ,  "./src/pages/student/dashboard/index.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: ["light"],
  },

}
