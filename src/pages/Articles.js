import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import PageTemplate from './Template';

import articlesData from '../mock-ups/Articles';

const styles = theme => ({
  gridList: {
    width: 800
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
});

function Articles(props) {
  const { classes } = props;

  const articleDates = Array.from(new Set(
    articlesData.map(article =>
      new Intl.DateTimeFormat('bg-BG', {month: 'numeric', day: 'numeric'}).format(new Date(article.date))
    )
  )).sort((d1, d2) => d2 - d1);

  return (
    <PageTemplate>
      <GridList cols={1} cellHeight='auto' spacing={32} className={classes.gridList}>
        {articleDates.map((date) => {
          let tiles = [];
          
          tiles.push(
            <GridListTile key="Subheader" style={{ height: 'auto' }}>
              <ListSubheader component="div">{date}</ListSubheader>
            </GridListTile>
          );

          tiles.push(
            articlesData.filter( article => {
              return new Intl.DateTimeFormat('bg-BG', {month: 'numeric', day: 'numeric'}).format(new Date(article.date)) === date
            }).map(article => {
              return (
                <GridListTile key={article.id}>
                  <Link to={`/articles/${article.id}`}>
                    <img src={article.image} alt={article.title} />
                    <GridListTileBar
                      title={`${new Intl.DateTimeFormat('bg-BG', {year: 'numeric', month: 'numeric', day: 'numeric'}).format(article.date)}: ${article.title}`}
                      subtitle={<span>by: {article.author.name}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </Link>
                </GridListTile>
              );
            })
          );

          return tiles;
        })}
      </GridList>
    </PageTemplate>
  );
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);