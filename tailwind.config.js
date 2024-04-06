/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          'voilet': "#1C2448",
          'skincolor': "#F8F3E5",
          'Metallic-gold': '#FFDF7A',
          'navy-blue': '#003049',
        },
      },
      fontFamily: {
        'Anek Gurmukhi': ['Anek Gurmukhi', 'sans'],
        'Montserrat': ['Montserrat', 'sans'],
        'Onest': ['Onest', 'sans'],
        'Orbitron': ['Orbitron', 'sans'],
        'Roboto Serif': ['Roboto Serif', 'serif'],
        'Roboto Slab': ['Roboto Slab', 'serif'],
        'Roboto': ['Roboto', 'sans'],
        'Anek Devanagari': ['Anek Devanagari', 'sans-serif'],
        'rozha': ['Rozha One', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'Noto+Serif+Display': ['Noto Serif Display', 'serif'],
      },
    },

  },
  plugins: [],
}
