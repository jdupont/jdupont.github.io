import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import 'typeface-roboto';

import Home from './home';

/* {
  ...lightBlue,
  A400: '#00e677',
} */

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: indigo,
    secondary: green,
    error: red,
  },
});

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
