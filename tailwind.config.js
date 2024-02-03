/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primaryColor)",
        "background": "var(--backgroundColor)",
        "purple": "var(--purple)",
        "orange": "var(--orange)",
        "green": "var(--green)",
        "red": "var(--red)",
        "highlight": "var(--highlightColor)",
        "secondary": "var(--secondaryColor)",
        "yellow":"var(--yellow)",
        "cyan":"var(--cyan)",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        Lexend:[ 'Lexend Mega', 'sans-serif'],
        Encode:['Encode Sans Semi Condensed', 'sans-serif'],
        Michroma:['Michroma', 'sans-serif'],
        Archivo:['Archivo', 'sans-serif'],
        PressStart: ['"Press Start 2P"', 'monospace'],
        Ubuntu: ['Ubuntu Mono', 'monospace'],
        RobotoMono: ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
};
