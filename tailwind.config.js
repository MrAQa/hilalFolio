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
        lightThemeDelete: "#CD0000",
        lightThemeSuccess: "#098C26",
        // primaryPurple: "#6F4F9F",
        lightThemeText:'#1F1F1F',
        lightThemebg:'#F2F2F2',
        primaryPurple: "#7147B4",
        lightThemeSecondary: "#747474",
        primaryDark: "#0E0A14",
        lightSecondaryText: "#6F7889",
        lightThemeOutline:"#D0D5DD",
        'gray': {
          '900': '#101828', 
          '600':'#475467',
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
