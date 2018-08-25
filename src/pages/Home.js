import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import PageTemplate   from './Template';
import Articles from '../components/Articles'

const styles = theme => ({
  padded: {
    padding: theme.spacing.unit * 4
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <PageTemplate>
        <Paper className={classes.padded} elevation={1}>
          <Articles criteria={{ dates: [new Date()] }}/>
        </Paper>
      </PageTemplate>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);