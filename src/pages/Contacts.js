import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageTemplate     from './Template';

const styles = {}

class Contacts extends React.Component {
  render() {
    return (
      <PageTemplate>

      </PageTemplate>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);