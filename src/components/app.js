import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Reboot from 'material-ui/Reboot';

import Home from './home';

const App = () => (
  <div>
    <Reboot />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </div>
);

export default App;
