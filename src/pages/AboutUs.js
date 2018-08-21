import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageTemplate   from './Template';

const styles = {}

class AboutUs extends React.Component {
  render() {
    return (
      <PageTemplate>

      </PageTemplate>
    );
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);