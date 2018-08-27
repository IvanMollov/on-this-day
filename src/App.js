import React              from 'react';
import { BrowserRouter, 
         Switch, 
         Route }          from 'react-router-dom';

import                         'typeface-roboto';

import CssBaseline        from '@material-ui/core/CssBaseline';
import { MuiThemeProvider,
         createMuiTheme } from '@material-ui/core/styles';

import MenuBar            from './components/MenuBar';
import SearchDialog       from './components/SearchDialog';

import Article            from './pages/Article';
import Articles           from './pages/Articles';
import AboutUs            from './pages/AboutUs';
import Home               from './pages/Home';

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
              <Route exact path='/' component={Home}/>
              <Route exact path='/articles' component={Articles}/>
              <Route path='/articles/:id' component={Article}/>
              <Route path='/about-us' component={AboutUs}/>

              {/* dev tests under */}
              <Route path='/dev/menu-bar/:loggedIn' component={MenuBar}/>
              <Route path='/dev/search-dialog' component={SearchDialog}/>
            </Switch>
          </MuiThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  };
};

export default App;
