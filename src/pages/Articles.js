import React             from 'react';
import PropTypes         from 'prop-types';

import withStyles        from '@material-ui/core/styles/withStyles';

import ArticlesComponent from '../components/Articles';

import PageTemplate      from './Template';

const styles = {};

function Articles(props) {
  return (
    <PageTemplate>
      <ArticlesComponent criteria={'all'} withSubheaders={true}/>
    </PageTemplate>
  );
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);