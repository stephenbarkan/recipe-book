const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./site/**/*.njk"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1328px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      serif: "Cardo,Times New Roman",
      sans: "Arial",
    },
    extend: {
      fontSize: {
        "4xl": ["2.5rem", "1.25"],
        "5xl": ["3rem", "1.15"],
      },
      letterSpacing: {
        tight: "-.015em",
      },
      zIndex: {
        "-1": "-1",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        0: "0ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  variants: {
    extend: {
      translate: ["focus"],
      rotate: ["group-hover"],
      scale: ["group-hover"],
      textColor: ["group-hover"],
      borderColor: ["group-hover"],
      backgroundColor: ["group-hover"],
      opacity: ["group-hover"],
      ringWidth: ["group-focus"],
      padding: ["first", "last"],
    },
  },
  plugins: [],
};
