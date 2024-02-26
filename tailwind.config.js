module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle at center, #2C3539 0%, #1a1a1a 100%)",
        "gradient-yellow": "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
      },
      backgroundSize: {
        btn: "cover",
      },
      backgroundPosition: {
        btn: "center",
      },
    },
  },
  plugins: [],
};
