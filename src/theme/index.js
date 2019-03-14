import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#2EC4B6' },
  secondary: { main: '#FF6B6B' },
  ui: { main: '#FFFFFF' },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

const typography = {
  useNextVariants: true
};

export default createMuiTheme({ palette, typography });
