const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#24292C",
        white: colors.white,
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
