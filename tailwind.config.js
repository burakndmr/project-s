/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      "Light-Gray": "#F5F7F8",
      Publishing: "#3AC183",
      Published: "#ACACAC",
      "Need-Approval": "#F7BF38",
      Error: "#FB6450",
      "Logo-Bg": "#31363B",
      "SideBar-Main": "#2A2F33",
      "SideBar-Secondary": "#393D42",
      "SideBar-Red": "#F55661",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
