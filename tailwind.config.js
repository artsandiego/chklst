module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'card': '500px',
      },
      height: {
        'card': '350px',
      }
    },
    fontSize: {
      '11': '11px',
      '14': '14px',
      '24': '24px',
      '18': '18px',
      '72': '72px',
      '36': '36px',
    },
    colors: {
      primary: '#F49910',
      secondary: '#192C3A',
      accent: '#2A3B48',
      white: '#FFFFFF'
    },
    letterSpacing: {
      default: '1.5rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
