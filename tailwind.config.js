/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'uncut-sans': ['Uncut Sans', 'sans-serif'],
        'neue-machina': ['Neue Machina', 'sans-serif'],
      },
      boxShadow: {
        'inner-1': 'inset 0px 0px 0px 1px rgb(91 102 111 / 20%)',
      },
      brightness: {
        full: '10',
      },
      colors: {
        // Configure your color palette here
        primary: '#0D0630',

        'grey-border': 'rgba(91, 102, 111, 0.2)',
        grey: '#8E9AA4',

        'orange-primary': '#F19E5A',
        'orange-secondary': 'rgba(241, 158, 90, 0.2)',
        'orange-dark': '#ee8c3b',

        'body-icon-bg': '#D5E7D7',
        'body-text': '#585469',

        dark: '#3E474F',
        darker: '#130F26',

        // colors for body components bg linear-gradient
        'grad-yellow': 'rgba(227, 203, 84, 0.2) 14.1%',
        'grad-green': 'rgba(124, 183, 142, 0.2) 68.22%',
      },
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      md: '.5rem',
      lg: '.5rem',
      xl: '.75rem',
      full: '50%',
    },
  },
  plugins: [require('tailwindcss-gradient')],
}
