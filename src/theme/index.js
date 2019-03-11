import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a535c',
    },
    secondary: {
      main: '#f7fff7',
    },
    error: {
      main: '#ff6b6b',
    }
  }
});

export default theme;