import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import SignupDialog from './SignupDialog'

const styles = {
  narrow: {
    flexBasis: 170
  }
};

class LoginDialog extends React.Component {
  state = {
    open: false,
    signupOpen: false,
    loginData: {
      email: undefined,
      password: undefined
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

  handleLogin = () => {
    this.setState({ open: false });
    console.log(this.state.searchData);
  };

  handleSignupOpen = () => {
    if (this.signup !== undefined) 
      this.signup.handleClickOpen();

    this.setState({ signupOpen: true });
  };

  handleEmailChange = (event) => {
    this.setState({ loginData: { email: event.target.value } });
  };

  handlePasswordChange = (event) => {
    this.setState({ loginData: { password: event.target.value } });
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>

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

        <SignupDialog
        onRef={((ref) => this.signup = ref)} 
        handleClose={this.handleClose}/>

        <DialogActions>
          <Button onClick={this.handleSignupOpen} color="inherit">
              Go to signup page...
          </Button>
          <Button onClick={this.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleFind} color="primary">
            Login!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginDialog);