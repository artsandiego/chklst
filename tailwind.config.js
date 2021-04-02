module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '320px',
      'mobilelg': '600px',
      'tabletlg': '900px',
      'sm': '1024px',
      'md': '1366px',
      'lg': '1440px',
      'xl': '1740px',
    },
    extend: {
      width: {
        'card': '354px',
        'cardsm': '290px'
      },
      height: {
        'card': '426px',
        'meat': '263px',
      }
    },
    fontSize: {
      '10': '10px',
      '11': '11px',
      '12': '12px',
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
