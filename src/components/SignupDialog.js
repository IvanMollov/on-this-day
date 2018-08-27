import React         from 'react';
import PropTypes     from 'prop-types';

import withStyles    from '@material-ui/core/styles/withStyles';

import Button        from '@material-ui/core/Button';
import TextField     from '@material-ui/core/TextField';
import Dialog        from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle   from '@material-ui/core/DialogTitle';

import LoginDialog   from './LoginDialog'

import Session       from '../utils/Session'

const styles = {
  narrow: {
    flexBasis: 170
  }
};

class SignupDialog extends React.Component {
  state = {
    open: false,
    loginOpen: false,
    signupData: {
      username: undefined,
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined
    }
  };

  componentDidMount = () => {
    this.props.onRef(this);
  }

  handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.props.handleClose();
    this.setState({ open: false });
  };

  handleSignup = () => {
    this.setState({ open: false });
    this.handleClose();
  };

  handleLoginOpen = () => {
    if (this.login !== undefined) 
      this.login.handleClickOpen();

    this.setState({ loginOpen: true });
  };

  handleEmailChange = (event) => {
    this.setState({ signupData: { email: event.target.value } });
  };

  handlePasswordChange = (event) => {
    this.setState({ signupData: { password: event.target.value } });
  };

  handleUsernameChange = (event) => {
    this.setState({ signupData: { password: event.target.value } });
  };

  handlePasswordConfirmationChange = (event) => {
    this.setState({ signupData: { password: event.target.value } });
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>

        <DialogContent>
            <TextField
            margin="dense"
            id="username"
            label="Username"
            type="name"
            fullWidth
            required
            onChange={this.handlePasswordChange}/>
        </DialogContent>

        <DialogContent>
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            required
            onChange={this.handleEmailChange}/>
        </DialogContent>

        <DialogContent>
            <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            required
            onChange={this.handlePasswordChange}/>
        </DialogContent>

        <DialogContent>
            <TextField
            margin="dense"
            id="passwordConfirmation"
            label="Confirm password"
            type="password"
            fullWidth
            required
            onChange={this.handlePasswordChange}/>
        </DialogContent>

        <LoginDialog
        onRef={((ref) => this.login = ref)} 
        handleClose={this.handleClose}/>

        <DialogActions>
          <Button onClick={this.handleLoginOpen} color="inherit">
              Go to login page...
          </Button>
          <Button onClick={this.handleClose} color="secondary">
            Cancel
          </Button>

          <Session.Consumer>
            {(session) => (
              <Button onClick={() => {
                session.onLoginChange();
                this.handleSignup();
              }} 
              color="primary">
                Signup!
              </Button>
            )}
          </Session.Consumer>

          <Button onClick={this.handleSignup} color="primary">
            Signup!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SignupDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupDialog);