export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    black1: 'rgb(27, 26, 26)',
    black2: 'rgba(36, 34, 34, 0.295)',
    black3: 'rgba(44, 44, 46, 0.575)',
    black4: 'rgb(176, 176, 188)',

    lightPurple: 'rgb(12, 12, 59)'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {},
  text: {},
  radii: {
    default: 4
  },

  buttons: {
    primary: {
      bg: 'black',
      color: 'rgba(255, 255, 255, 0.945)',
      padding: '12px 29px',
      fontSize: '20px',
      borderRadius: '50px'
    },
    secondary: {
      bg: 'white',
      color: 'black',
      padding: '12px 29px',
      fontSize: '20px',
      borderRadius: '50px'
    }
  }
};
