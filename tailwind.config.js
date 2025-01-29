/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // roboto: ["Roboto",], // Add the font with a fallback
        // fancy: ["Pacifico", ], // Fancy handwriting font
        Kanit: ["Kanit"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
