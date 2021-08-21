import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h4: {
      fontWeight: 1000,
      fontSize: 24
    },
    body2: {
      fontSize: 12
    }
  },
  palette: {
    primary: { main: '#3A8DFF' },
    secondary: { main: '#dc3545'},
  },
  shape: {
    borderRadius: 5,
  },
});
