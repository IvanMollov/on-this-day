import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search'
import { Button } from '@material-ui/core';

import SearchDialog from './SearchDialog';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  noDecoration: {
    textDecoration: 'none',
    color: 'inherit'
  }
};

class MenuBar extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    if (this.child !== undefined) 
      this.child.handleClickOpen();

    this.setState({ open: true });
  };

  handleClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    const logedIn = this.props.user.logedIn;
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link className={classes.noDecoration} to="/">
                On This Day
              </Link>
            </Typography>

            {logedIn && 
              <Button variant="outlined" color="secondary">
                New Article
              </Button>}

            <IconButton 
            color="inherit"
            onClick={this.handleClickOpen} >
              <SearchIcon/>
            </IconButton>
            
            <SearchDialog 
            onRef={((ref) => this.child = ref)} 
            handleClickClose={this.handleClickClose} />
            
            <Link className={classes.noDecoration} to="/articles">
              <Button color="inherit">
                Articles
              </Button>
            </Link>

            <Link className={classes.noDecoration} to="/about-us">
              <Button color="inherit">
                  About us
              </Button>
            </Link>

            {logedIn ? (
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            ): (
              <Button variant="outlined" color="inherit">
                Signin/signup
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);