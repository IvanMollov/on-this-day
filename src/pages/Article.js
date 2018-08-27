import React            from 'react';
import PropTypes        from 'prop-types';

import Typography       from '@material-ui/core/Typography';
import withStyles       from '@material-ui/core/styles/withStyles';

import ArticleComponent from '../components/Article';

import PageTemplate     from './Template';

import queryArticles    from '../mock-ups/Articles';

const styles = {}

class Article extends React.Component {
  render() {
    const classes = this.props.classes;
    const articleID = Number(this.props.match.params.id);
    
    const article = queryArticles({ ids: [articleID] })[0];
    console.debug(article);

    return (
      <PageTemplate>
        <div className={classes.wrapper}>
          {
            typeof(articleID) !== typeof(Number()) ?
              <Typography>Article not found by ID={this.props.match.params.id}.</Typography> 
            :
              <ArticleComponent article={article} user={{logedIn: true}}/>
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