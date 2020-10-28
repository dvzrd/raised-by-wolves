const defaultTheme = require("tailwindcss/defaultTheme");

// TODO:
// - look into issue where theme extends overrides default config.

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
        ...defaultTheme.colors,
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
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
        ...defaultTheme.fontSize,
        "7xl": "4.5rem",
      },
      leading: {
        ...defaultTheme.leading,
        11: "2.75rem",
        12: "3rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
