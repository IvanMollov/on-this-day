import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Article from './pages/Article';
import Articles from './pages/Articles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path='/articles' component={Articles}/>
              <Route path='/articles/:id' component={Article}/>
            </Switch>
          </MuiThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  };
};

export default App;
