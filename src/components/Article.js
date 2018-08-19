import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Paper from '@material-ui/core/Paper';

import GeneralTabs from './GeneralTabs';
import CommentsList from './CommentsList';
import UserAvatar from './UserAvatar';

const styles = theme => ({
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    flexFlow: 'row-reverse'
  },
  padded: {
    ...theme.mixins.gutters(),
    paddingTop:    theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  }
});

class Article extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, user, article } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={ <UserAvatar className={classes.avatar} user={user}/> }
          title={article.title}
          subheader={article.date}
          action={
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
    
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          }
        />

        <CardMedia
          className={classes.media}
          image={article.image}
          title={article.title}
        />

        <CardContent>
          <Typography>{article.introduction}</Typography>
        </CardContent>

        <CardContent>
          <Paper>
            <GeneralTabs
              tabsData={[
                {
                  label: "Article",
                  content:
                    <Paper className={classes.padded}>
                      <Typography paragraph variant="body1">
                        {article.body}
                      </Typography>
                    </Paper>
                },
                {
                  label: "Comments",
                  content: <CommentsList comments={article.comments}/>
                }       
              ]}
            />
          </Paper>
        </CardContent>
      </Card>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
