import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageTemplate from './Template';

import ArticlesComponent from '../components/Articles';

const styles = {};

function Articles(props) {
  return (
    <PageTemplate>
      <ArticlesComponent criteria={'all'}/>
    </PageTemplate>
  );
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);