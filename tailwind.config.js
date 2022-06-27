/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        "pri": "var(--primary)",
        "sec": "var(--secondary)",
        "thi": "var(--thirty)",
        "pri-text": "var(--primary-text)",
        "sec-text": "var(--secondary-text)",
        "bgr": "var(--bgr)",
        "danger": "var(--danger)",
      },
    },
  },
  plugins: [require("daisyui")],
}
