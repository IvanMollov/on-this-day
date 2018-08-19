import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'

import UserAvatar from './UserAvatar';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

function generateListItems(comments) {
  let listItems = [];

  for (const comment of comments) {
    listItems.push(
      <ListItem>
        <ListItemIcon>
          <UserAvatar user={{
              name: comment.author.name
          }}/>
        </ListItemIcon>
        <ListItemText inset primary={comment.body} />
      </ListItem>
    );
    listItems.push(<Divider inset/>);
  };
  // remove last divider
  listItems.pop();

  return listItems;
}

class CommentsList extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, comments } = this.props;

    const listItems = generateListItems(comments);

    return (
      <div className={classes.root}>
        <List component="nav">
          {listItems}
        </List>
      </div>
    );
  }
}

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsList);