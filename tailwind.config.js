

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    ,  "./src/components/timer.js",
    ,  "./src/pages/student/dashboard/index.js",
    ,  "./src/pages/student/home.js",
    ,  "./src/pages/student/Applied.js",
    "./src/components/student/sidebar.js",
    "./src/components/student/jobListing.js",
    "./src/components/startUp/AI/Aipopup.js",
    "./src/components/student",
    "./src/components/student/JobListing",
    "./src/components/Loadpopup.js",
    "./src/components/responsiveAppBar.js",
    "./src/components/otpBox/otpBox.js",
    "./src/pages/signIn.js",
    "./src/pages/signUp.js",
    "./src/pages/startUp/addNew.js",
    "./src/pages/startUp/account.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: ["light"],
  },

}
