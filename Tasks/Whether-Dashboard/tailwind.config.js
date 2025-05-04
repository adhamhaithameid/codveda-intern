/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button_dark: "#1e1e1e",
        background: "#111014",
        primary_text:"#e7e7e7",
        secondary_text:"#eeeeee",
      },
    },
  },
  plugins: [],
};
