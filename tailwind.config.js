/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primaryColor)",
        "background": "var(--backgroundColor)",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        Averia:['Averia Serif Libre', 'serif'],
      },
    },
  },
  plugins: [],
};
