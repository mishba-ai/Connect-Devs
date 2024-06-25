/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite ",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(240%)" },
        },
      },
      colors: {
        primary: "var(--primaryColor)",
        background: "var(--backgroundColor)",
        purple: "var(--purple)",
        orange: "var(--orange)",
        green: "var(--green)",
        red: "var(--red)",
        highlight: "var(--highlightColor)",
        secondary: "var(--secondaryColor)",
        yellow: "var(--yellow)",
        cyan: "var(--cyan)",
        tiltbtn: "var(--tiltbtn)",
        pink: "var(--pink)",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        Lexend: ["Lexend Mega", "sans-serif"],
        Encode: ["Encode Sans Semi Condensed", "sans-serif"],
        Michroma: ["Michroma", "sans-serif"],
        Archivo: ["Archivo", "sans-serif"],
        PressStart: ['"Press Start 2P"', "monospace"],
        Ubuntu: ["Ubuntu Mono", "monospace"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        custom:
          "9px 10px 0 -1px var(--primaryColor), 9px 10px 0 rgb(102,55,238)",
      },
    },
  },
  plugins: [],
};
