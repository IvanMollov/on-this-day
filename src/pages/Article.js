import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ArticleComponent from '../components/Article';

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

  switch (id) {  
  default:
    article = {
      id: 0,
      title: "Direct Operations Orchestrator",
      date: "Sun Aug 19 2018 06:36:44 GMT+0300 (EEST)",
      introduction: "Esse officia sunt sequi iusto aut molestiae voluptatem deleniti eos. Ea voluptas ducimus nostrum. Quod eos eum. Consequuntur vero illum.",
      body: "Eveniet ut labore. Qui sed ex corrupti illum repellat aut rerum. Rerum tempora exercitationem. Molestias ut voluptatem ad tempora unde aut odit tenetur a. Id earum odio modi sit labore enim aut molestias. Explicabo architecto illum aut praesentium numquam neque nemo ratione atque.\nExercitationem expedita non repudiandae officiis. Sequi voluptatem amet architecto ipsum saepe officia aut ut. Id sit qui rem maxime esse magnam. Mollitia qui iusto dolorem quia qui consequatur.\nQuia officia voluptate. Sapiente doloribus similique consequatur sint et repudiandae maxime. Impedit voluptas qui dolorum quae ipsam. Et dolorem et ducimus delectus cupiditate consequatur magni qui corrupti. Aut dolorem et.",
      image: "http://lorempixel.com/640/480",
      comments: [{
          author: { name: "Miss Monty Parker" },
          body: "Eveniet velit amet occaecati eligendi incidunt nihil et placeat."
        }, {
          author: { name: "Johann Schmidt" },
          body: "Similique doloribus et eos aliquid placeat ea nihil. Recusandae at rerum voluptatum. Reprehenderit non quia qui iure voluptas expedita dolores explicabo."
        }, {
          author: { name: "Bette McClure" },
          body: "Quas excepturi totam repellat eum dolorem eos impedit. Velit sunt sit eligendi commodi occaecati. Et sit iure ut qui nihil et earum natus nihil. Voluptas rerum adipisci."
        }
      ],
      author: {
        name: 'Mara Wilderman'
      }
    };
    break;
  };
  
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