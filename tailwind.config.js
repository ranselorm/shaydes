/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle at center, #2C3539 0%, #1a1a1a 100%)",
        "btn-gradient": "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
        btn: "url(/btn2.jpg)",
      },
    },
  },
  plugins: [],
};
