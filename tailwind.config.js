module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    boxShadow: {
      md: '0 4px 6px -1px rgba(9, 72, 179, 0.1), 0 2px 4px -1px rgba(9, 72, 179, 0.06)',
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      boxShadow: ['active'],
    },
  },
  plugins: [require("daisyui")],
};
