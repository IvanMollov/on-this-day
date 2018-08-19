import React, { Component } from 'react';

import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Article from './pages/Article';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Article id={0}/>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  };
};

export default App;
