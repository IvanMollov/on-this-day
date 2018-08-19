import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
};

function getInitials(user) {
  return user.name.split(' ').map((name) => name[0]).join('');
}

function UserAvatar(props) {
  const { classes, user } = props;

  return (
    <Avatar className={classes.avatar}>
      {getInitials(user)}
    </Avatar>
  );
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);