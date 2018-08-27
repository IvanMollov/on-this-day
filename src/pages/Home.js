import React          from 'react';
import PropTypes      from 'prop-types';
import classnames     from 'classnames'

import withStyles     from '@material-ui/core/styles/withStyles';
import Paper          from '@material-ui/core/Paper';
import Typography     from '@material-ui/core/Typography';
import Snackbar       from '@material-ui/core/Snackbar'

import pink           from '@material-ui/core/colors/pink';
import blueGrey       from '@material-ui/core/colors/blueGrey'

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
  },
  a: {
    color: pink[500],
    cursor: 'pointer'
  },
  dark: {
    backgroundColor: pink[500]
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

          <Session.Consumer className={classes.dark}>
            {(session) => {
              return (
                <Snackbar className={classes.dark}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={!session.isLogedin}
                onClose={this.handleClose}
                message={<Typography style={{color: blueGrey[500]}}>
                  To write new articles or leave comments about articles you should <span className={classes.a} onClick={this.handleLoginOpen}>login</span>. Don't have an account? <span className={classes.a} onClick={this.handleSignupOpen}>Signup</span> for free!
                </Typography>}/>
              );
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