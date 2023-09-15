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
        'reds': '#f44336',
        'reds1': '#FDE3E1',
        'pinks': '#e91e63',
        'pinks1': '#fcdde8',
        'deepBlues': '#673ab7',
        'deepBlues1': '#e8e2f4',
        'blues': '#3f51b5',
        'blues1': '#e2e5f4',
        'skys': '#4896d5',
        'skys1': '#e4eff9',
        'deepSkys': '#4896d5',
        'deepSkys1': '#d9f2fd',
        'greens': '#4caf50',
        'greens1': '#e4f3e5',
        'lightGreens': '#8bc34a',
        'lightGreens1': '#eef6e4',
        'yellows': '#cddc39',
        'yellows1': '#eef6e4',
        'darkYellows': '#ffeb3b',
        'darkYellows1': '#fffce2',
        'darks': '#222222',
        'darks1': '#dedede',
        'lights': '#dddddd',
        'lights1': '#fafafa',
        'resBg': '#ffffff',
        'resText': '#000000',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

