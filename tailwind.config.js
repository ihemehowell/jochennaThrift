/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-neutral-light",
    "text-neutral-dark",
    "font-baloo"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
      },
      colors: {
        // Main brand colors
        primary: "#6EC1E4",       // Soft Sky Blue
        primarylight: "#E3F4FB",  // Light Blue Tint
        secondary: "#F8B6A4",     // Peach Pink
        secondarylight: "#FDE8E4",

        // Additional accents
        accent: "#FFD97D",        // Sunshine Yellow
        mint: "#A8E6CF",          // Mint Green
        coral: "#FF6F61",         // Coral Red
        lavender: "#C3AED6",      // Lavender

        // Neutral palette
        neutral: {
          light: "#FAFAFA",       // Off White
          dark: "#333333"         // Charcoal
        },

        // Status colors
        success: "#00C48C",       // Fresh Green
        error: "#FF3B30"          // Soft Red
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
