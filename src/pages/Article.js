import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ArticleComponent from '../components/Article';

import ArticleMockUp from '../mock-ups/Articles';

const styles = theme => ({
  page: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing.unit * 5
  }
});

function getArticle(id) {
  let article;

  article = ArticleMockUp[id];
  
  return article;
}

class Article extends React.Component {
  render() {
    const classes = this.props.classes;
    const articleID = Number(this.props.match.params.id);

    if (typeof(articleID) !== typeof(Number())) {
      return (
        <Paper className={classes.page}>
          <div className={classes.wrapper}>
            <Typography>Article not found by ID={this.props.match.params.id}.</Typography>
          </div>
        </Paper>
      )
    }

    return (
      <Paper className={classes.page}>
        <div className={classes.wrapper}>
          <ArticleComponent article={getArticle(articleID)}/>
        </div>
      </Paper>
    );
  };
};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);