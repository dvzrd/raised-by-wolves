const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    purge: ["src/**/*.js", "src/**/*.jsx", "public/**/*.html"],
    container: {
      center: true,
      padding: {
        default: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "6rem",
        xl: "12rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        gray: {
          ...defaultTheme.colors.gray,
          500: "var(--color-gray-500)",
          900: "var(--color-gray-900)",
        },
        orange: {
          ...defaultTheme.colors.orange,
          500: "var(--color-orange-500)",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      leading: {
        11: "2.75rem",
        12: "3rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
