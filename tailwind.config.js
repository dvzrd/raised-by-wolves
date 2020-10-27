module.exports = {
  theme: {
    purge: ["src/**/*.js", "src/**/*.jsx", "public/**/*.html"],
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1.5rem",
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
        orange: {
          500: "var(--color-orange-500)",
        },
        primary: "var(--color-primary)",
      },
      fontFamily: {
        sans: [
          "Overpass",
          "Nunito Sans",
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
