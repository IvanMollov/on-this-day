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
import MoreVertIcon from '@material-ui/icons/MoreVert';

import GeneralTabs from './GeneralTabs';
import CommentsList from './CommentsList';
import UserAvatar from './UserAvatar';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
};

class Article extends React.Component {
  render() {
    const { classes, user, article } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={ <UserAvatar className={classes.avatar} user={user}/> }
          action={
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          }
          title={article.title}
          subheader={article.date}
        />

        <CardMedia
          className={classes.media}
          image={article.image}
          title={article.title}
        />

        <CardContent>
          <Typography>{article.introduction}</Typography>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>

        <CardContent>
          <GeneralTabs
            tabsData={[
              {
                label: "Article",
                content: 
                  <Typography paragraph variant="body2">
                    {article.body}
                  </Typography>
              },
              {
                label: "Comments",
                content:
                  <Typography paragraph variant="body2">
                    <CommentsList comments={article.comments}/>
                  </Typography>
              }       
            ]}
          />
        </CardContent>
      </Card>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
