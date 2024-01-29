/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'poppins': [ 'Poppins', 'sans-serif'],
      'style-script': [ 'Style Script', 'cursive'],
    },
    backgroundImage: {
      'mobile-features': "url('/images/bg-mobile-features.svg')",

      'desktop-features': "url('/images/bg-desktop-features.svg')",

      'mobile-testimonials': "url('/images/bg-mobile-testimonials.svg')",

      'desktop-testimonials': "url('/images/bg-desktop-testimonials.svg')",
     
      
    },
    letterSpacing: {
      widest: "0.5em",
    },
    colors: {
      'primary-green': "#176729",
      'primary-grey': "#D9D9D9;",
    },
   },
  },
  plugins: [],
}

