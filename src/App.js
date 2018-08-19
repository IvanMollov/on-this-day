import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Article from './components/Article';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Article 
            article = {{
              title: "ibasi mamata",
              date: "July 22, 2018",
              introduction: "koit ima baldyza",
              body: "ibe dva gyza",
              image: "https://i2.offnews.bg/events/2017/11/13/669241/phprbam1n_800x*.jpg",
              comments: [{
                  author: { name: "Ivan Mollov" },
                  body: "ohhhhoooooooo"
                }, {
                  author: { name: "Radoslav Filipov" },
                  body: "mchi to"
                }, {
                  author: { name: "Hristo Georgiev" },
                  body: "mnogu dubre we"
                }
              ]
            }}
            user = {{
              name: 'Hristo Georgiev'
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  };
};

export default App;
