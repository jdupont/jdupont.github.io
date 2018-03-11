import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

/* {
  ...lightBlue,
  A400: '#00e677',
} */

const startingTheme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: indigo,
    secondary: green,
    error: red,
  },
});

export { startingTheme };
