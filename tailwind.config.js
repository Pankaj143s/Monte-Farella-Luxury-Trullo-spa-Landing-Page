/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "headingColor": "#bd9769", // Custom color for headings
      },
      letterSpacing: {
        extra: "0.25em", // Add more letter spacing
      },
      fontFamily: {
        forum: ["Forum", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
