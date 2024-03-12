/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          'voilet': "#1C2448",
          'skincolor': "#F8F3E5",
          'Metallic-gold': '#FFD700',
        },
      },
    },
  },
  plugins: [],
}

