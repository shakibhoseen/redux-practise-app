/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#F1A350",
      },
      secondary: {
        DEFAULT: "#6984A5",
        100: "#4F4F59bf",
        50: "#6984a520",
      },
      dark: {
        DEFAULT: "#141421",
        300: "#1E1E30",
        100: "#141421db",
        50: "#14142180",
      },
      white: {
        DEFAULT: "#FFF",
      },
      gray: {
        DEFAULT: "#898990",
        500: "#4F4F59",
        100: "#E1E6ED",
        50: "#E9EFF5",
      },
      light: {
        DEFAULT: "#FFF",
        300: "#E9EFF5",
        500: "#E1E6ED",
        100: "#FFFfffdb",
        50: "#FFFfff80",
      },
      warning: {
        DEFAULT: "#F55050",
      },
      success: {
        DEFAULT: "#6CC4A1",
      },
    },

    extend: {
      fontFamily: {
        firaSansLight: ["firaSans-light"],
        firaSansRegular: ["firaSans-regular"],
        firaSansMedium: ["firaSans-medium"],
        firaSansSemibold: ["firaSans-semibold"],
        firaSansBold: ["firaSans-bold"],
      },
      fontSize: {
        xs: 10,
        sm: 12,
        base: 14,
        lg: 16,
        xl: 18,
        "2xl": 20,
      },
    },
  },
  plugins: [],
};
