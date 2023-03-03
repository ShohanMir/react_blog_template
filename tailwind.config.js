/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-g':
          'linear-gradient(95deg, rgba(223,0,242,1) 0%, rgba(212,0,0,1) 100%);',
      },
    },
    // colors: {
    //   BASE_YELLOW: '#C9FB5C',
    //   black: '#0f172a',
    // },
  },
  plugins: [],
};
