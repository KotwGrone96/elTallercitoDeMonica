module.exports = {
  content: [
    './pages/*.{js,jsx}',
    './components/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './layout/*.{js,jsx}',
  ],
  theme: {
    colors: {
      purple: '#8685EF',
      halfPurple: '#C6C0F8',
      lightPurple: '#F2ECFF',
      green: '#00C896',
      white: '#ffffff',
      lessWhite: '#f1f1f1',
      black: '#000000',
      lessBlack: '#1f1f1f',
    },
    fontFamily: {
      barlow: ['Barlow Condensed'],
    },
    extend: {
      spacing: {
        600: '37.5rem',
        900: '56.25rem',
      },
    },
  },
  plugins: [],
};
