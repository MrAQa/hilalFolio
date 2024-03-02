// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       fontSize: {
//         28: "28px",
//         35: "35px",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        28: "28px",
        35: "35px",
        32: "32px",
      },
      screens: {
        xs: "350px",
      },
      colors: {
        lightThemeDelete: "#CD0000",
        lightThemeSuccess: "#098C26",
        primaryPurple: "#6F4F9F",
        lightThemeSecondary: "#747474",
      },
      maxWidth: {
        // sm: '100%',
        md: "768px",
        lg: "1024px",
        xl: "1168px",
        "2xl": "1320px",
      },
      // maxWidth: {
      //   sm: '100%',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1168px',
      //   '2xl': '1320px',
      // },
    },
  },
  plugins: [],
};
