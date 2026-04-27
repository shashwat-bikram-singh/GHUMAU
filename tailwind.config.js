export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#006194',
        'primary-container': '#007bb9',
        secondary: '#516445',
        'secondary-container': '#d0e7c0',
        surface: '#f8f9ff',
        'surface-container-low': '#eff4ff',
        'surface-container-high': '#e4ecf9',
        'surface-container-highest': '#d8e1f0',
        'surface-container-lowest': '#ffffff',
        'outline-variant': '#bfc7d2',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#3f4850',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
