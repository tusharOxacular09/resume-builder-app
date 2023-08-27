/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'a': '#2b274c',
        'nav': '#1a1a1a',
        'bg-sec': '#f0effe',
      },
    },
  },
  plugins: [],
}

