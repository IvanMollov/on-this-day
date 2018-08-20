import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import articlesData from '../mock-ups/Articles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'auto',
    padding: theme.spacing.unit * 5
  }
});

function Articles(props) {
  const { classes } = props;

  return (
    <Paper className={classes.page}>
      <div className={classes.root}>
        <GridList cols={1} cellHeight='auto' spacing={32} className={classes.gridList}>
          <GridListTile key="Subheader" style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {articlesData.map(article => (
            <GridListTile key={article.image}>
              <img src={article.image} alt={article.title} />
              <GridListTileBar
                title={article.title}
                subtitle={<span>by: {article.author.name}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Paper>
  );
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);