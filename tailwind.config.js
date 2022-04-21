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
      hoverGreen: '#0eeab3',
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
        500: '31.25rem',
        600: '37.5rem',
        900: '56.25rem',
      },
      backgroundImage: {
        banner: 'url("/images/banner.png")',
      },
      backgroundSize: {
        65: '65%',
        100: '100%',
      },
      boxShadow: {
        normal: '5px 3px 10px #8685EF',
      },
      transitionProperty: {
        background: 'background-color',
      },
    },
  },
  plugins: [],
};
