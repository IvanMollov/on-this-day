import React              from 'react';
import { BrowserRouter, 
         Switch, 
         Route }          from 'react-router-dom';

import                         'typeface-roboto';

import CssBaseline        from '@material-ui/core/CssBaseline';
import { MuiThemeProvider,
         createMuiTheme } from '@material-ui/core/styles';

import Article            from './pages/Article';
import Articles           from './pages/Articles';
import AboutUs            from './pages/AboutUs';
import Home               from './pages/Home';
import CreateArticle      from './pages/CreateArticle'

import Session            from './utils/Session';
import UserProfile        from './pages/UserProfile';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedin: false,
      onLoginChange: this.toggleLoggedin
    }
  }

  toggleLoggedin = () => {
    console.debug(`toggleLoggedin: ${this.state.isLoggedin}`)
    this.state.isLoggedin = !this.state.isLoggedin;
    console.debug(`toggleLoggedin: ${this.state.isLoggedin}`)
    return this.state.isLoggedin
  }

  render() {
    return (
      <Session.Provider value={this.state}>
        <BrowserRouter>
          <React.Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <Switch>
                <Route exact path='/'         component={Home}    />
                <Route exact path='/articles' component={Articles}/>
                <Route path='/articles/:id'   component={Article} />
                <Route path='/about-us'       component={AboutUs} />
                <Route path='/createArticle'  component={CreateArticle}/>

                {/* dev */}
                <Route path='/users/:id'      component={UserProfile}/>
              </Switch>
            </MuiThemeProvider>
          </React.Fragment>
        </BrowserRouter>
      </Session.Provider>
    );
  };
};

export default App;
