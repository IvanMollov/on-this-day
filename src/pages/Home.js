import React          from 'react';
import PropTypes      from 'prop-types';
import classnames     from 'classnames'

import withStyles     from '@material-ui/core/styles/withStyles';
import Paper          from '@material-ui/core/Paper';
import Typography     from '@material-ui/core/Typography';
import Button         from '@material-ui/core/Button';

import PageTemplate   from './Template';
import Articles       from '../components/Articles'

import LoginDialog    from '../components/LoginDialog';
import SignupDialog   from '../components/SignupDialog';

import Session        from '../utils/Session'

const styles = theme => ({
  root: {
    maxWidth: 800
  },
  padded: {
    padding: theme.spacing.unit * 4
  },
  marginedBottom: {
    marginBottom: theme.spacing.unit * 4
  },
  marginedTop: {
    marginTop: theme.spacing.unit * 4
  },
  primaryColored: {
    backgroundColor: theme.palette.secondary
  },
  article: {
    width: 600
  }
});

class Home extends React.Component {
  state = {
    loginOpen: false,
    signupOpen: false
  };

  handleLoginOpen = () => {
    if (this.login !== undefined) 
      this.login.handleClickOpen();

    this.setState({ loginOpen: true });
  };

  handleSignupOpen = () => {
    if (this.signup !== undefined) 
      this.signup.handleClickOpen();

    this.setState({ signupOpen: true });
  };

  handleLoginClose = () => {
    this.setState({ loginOpen: false });
  };

  handleSignupClose = () => {
    this.setState({ signupOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <PageTemplate>
        <Paper className={classnames(classes.root, classes.padded)} elevation={1}>
          <Paper className={classnames(classes.padded, classes.marginedBottom)}>
            <Typography variant="headline">
              On this day...
            </Typography>
          </Paper>

          <Articles criteria={{ dates: [new Date()] }} withSubheaders={false} className={classnames(classes.article, classes.marginedBottom)}/>

          <LoginDialog
          onRef={((ref) => this.login = ref)} 
          handleClose={this.handleLoginClose}
          handleLoginChange={this.props.onLoginChange}/>

          <SignupDialog
          onRef={((ref) => this.signup = ref)} 
          handleClose={this.handleSignupClose}
          handleLoginChange={this.props.onLoginChange}/>

          <Session.Consumer>
            {(session) => {
              if (session.isLoggedin) {
                return (
                  <Paper className={classnames(classes.padded, classes.marginTop)}>
                    <Typography>
                      To see our archives, write new articles or leave comments about articles you should <Button color="secondary" onClick={this.handleLoginOpen}>login</Button>. Don't have an account? <Button color="secondary" onClick={this.handleSignupOpen}>Signup</Button> for free!
                    </Typography>
                  </Paper>
                );
              }
            }}
          </Session.Consumer>
        </Paper>
      </PageTemplate>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);