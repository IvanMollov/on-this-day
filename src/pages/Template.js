import React          from 'react';
import PropTypes      from 'prop-types';

import Paper          from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import MenuBar        from '../components/MenuBar';

const styles = theme => ({
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    padding: theme.spacing.unit * 5
  },
  bodyCover: {
    display: 'block',
    height: '100vh',
    overflow: 'auto'
  }
});

class Template extends React.Component {
	render() {
    const { classes } = this.props;

		return (
			<Paper className={classes.bodyCover}>
        <MenuBar user={{logedIn: true}}/>
        <div className={this.props.classes.pageWrapper}>
          {this.props.children}
        </div>
			</Paper>
    );
	};
};

Template.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);