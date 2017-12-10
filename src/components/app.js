import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import 'typeface-roboto';

import Home from './home';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Home />
    </div>
  </MuiThemeProvider>
);

export default App;
