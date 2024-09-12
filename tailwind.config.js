/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(47, 47, 255)",
        "secondry": "#004E71",
      },
    }
  },
  plugins: [],
};
