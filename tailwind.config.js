export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary
        primary: '#006194',
        'primary-container': '#007bb9',
        'primary-fixed': '#cce5ff',
        'primary-fixed-dim': '#93ccff',
        'on-primary': '#ffffff',
        'on-primary-container': '#fdfcff',
        'on-primary-fixed': '#001d31',
        'on-primary-fixed-variant': '#004b73',
        'inverse-primary': '#93ccff',
        // Secondary
        secondary: '#516445',
        'secondary-container': '#d0e7c0',
        'secondary-fixed': '#d3e9c3',
        'secondary-fixed-dim': '#b7cda8',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#556849',
        'on-secondary-fixed': '#0f2008',
        'on-secondary-fixed-variant': '#394c2f',
        // Tertiary
        tertiary: '#545d62',
        'tertiary-container': '#6d767b',
        'tertiary-fixed': '#dbe4ea',
        'tertiary-fixed-dim': '#bfc8ce',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#fbfdff',
        'on-tertiary-fixed': '#141d21',
        'on-tertiary-fixed-variant': '#3f484d',
        // Error
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        // Surface
        surface: '#f8f9ff',
        'surface-dim': '#cbdbf5',
        'surface-bright': '#f8f9ff',
        'surface-container': '#e5eeff',
        'surface-container-low': '#eff4ff',
        'surface-container-high': '#dce9ff',
        'surface-container-highest': '#d3e4fe',
        'surface-container-lowest': '#ffffff',
        'surface-variant': '#d3e4fe',
        'surface-tint': '#006398',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#3f4850',
        // Inverse
        'inverse-surface': '#213145',
        'inverse-on-surface': '#eaf1ff',
        // Background
        background: '#f8f9ff',
        'on-background': '#0b1c30',
        // Outline
        outline: '#707881',
        'outline-variant': '#bfc7d2',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        'lg': '0.5rem',
        'xl': '1.5rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}
