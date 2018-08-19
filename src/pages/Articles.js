import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  page: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing.unit * 5
  }
});

class Articles extends React.Component {
  render() {
    const classes = this.props.classes;

    return (
      <Paper className={classes.page}>
        <div className={classes.wrapper}>
          <Link to='/articles/0'>
            <Button variant="contained" className={classes.button}>
              Default Article
            </Button>
          </Link>
        </div>
      </Paper>
    );
  };
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);