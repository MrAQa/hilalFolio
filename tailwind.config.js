/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        28: "28px",
        35: "35px",
        32: "32px",
        30:'30px'
      },
      screens: {
        xs: "350px",
      },
      colors: {
        lightThemeDelete: "var(--color-light-delete)",
        lightThemeSuccess: "var(--color-light-success)",
        lightThemeText: "var(--color-light-text)",
        lightThemebg: "var(--color-light-bg)",
        primaryPurple: "var(--color-primary-purple)",
        lightThemeSecondary: "var(--color-light-secondary)",
        primaryDark: "var(--color-primary-dark)",
        lightSecondaryText: "var(--color-light-secondary-text)",
        lightThemeOutline: "var(--color-light-outline)",
        white:"var(--color-white)",
        lightGray:"var(--color-light-gray)",
        container1:"var(--color-container1",
        gray: {
          900: "var(--color-gray-900)",
          600: "var(--color-gray-600)",
          500: "var(--color-gray-500)",
        },
      },
      maxWidth: {
        // sm: '100%',
        md: "768px",
        lg: "1024px",
        xl: "1146px",
        "2xl": "1320px",
      },
      boxShadow: {
        'custom': '0px 1px 2px rgba(16,24,40,0.05)', // Define your custom shadow
      },
    },
  },
  plugins: [],
};
