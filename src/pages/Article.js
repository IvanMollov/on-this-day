import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import PageTemplate     from './Template';
import ArticleComponent from '../components/Article';

import articlesData from '../mock-ups/Articles';

const styles = {}

function getArticle(id) {
  let article;

  article = articlesData[id];
  
  return article;
}

class Article extends React.Component {
  render() {
    const classes = this.props.classes;
    const articleID = Number(this.props.match.params.id);

    return (
      <PageTemplate>
        <div className={classes.wrapper}>
          {
            typeof(articleID) !== typeof(Number()) ?
              <Typography>Article not found by ID={this.props.match.params.id}.</Typography> 
            :
              <ArticleComponent article={getArticle(articleID)}/>
          }
        </div>
      </PageTemplate>
    );
  };
};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);