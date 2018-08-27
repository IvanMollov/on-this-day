import React      from 'react';
import PropTypes  from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import MenuBar    from '../components/MenuBar';

import background from '../images/earth.jpg'

const styles = theme => ({
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    padding: theme.spacing.unit * 5,
    maxWidth: 800
  },
  bodyCover: {
    display: 'block',
    height: '100vh',
    overflow: 'auto',
    backgroundImage: `url(${background})`
  }
});

class Template extends React.Component {
	render() {
    const { classes } = this.props;

		return (
			<div className={classes.bodyCover}>
        <MenuBar user={{logedIn: false}}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className={this.props.classes.pageWrapper}>
            {this.props.children}
          </div>
        </div>
			</div>
    );
	};
};

Template.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);