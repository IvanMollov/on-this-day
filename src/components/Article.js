import React        from 'react';
import PropTypes    from 'prop-types';

import withStyles   from '@material-ui/core/styles/withStyles';

import Card         from '@material-ui/core/Card';
import CardHeader   from '@material-ui/core/CardHeader';
import CardMedia    from '@material-ui/core/CardMedia';
import CardContent  from '@material-ui/core/CardContent';
import CardActions  from '@material-ui/core/CardActions';
import IconButton   from '@material-ui/core/IconButton';
import Typography   from '@material-ui/core/Typography';
import Paper        from '@material-ui/core/Paper';
import Button       from "@material-ui/core/Button";

import AddIcon      from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon    from '@material-ui/icons/Share';

import GenericTabs  from './GenericTabs';
import CommentsList from './CommentsList';
import UserAvatar   from './UserAvatar';

import Session      from '../utils/Session'

const styles = theme => ({
  card: {
    maxWidth: 800,
    margin: theme.spacing.unit * 4
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
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
  },
  addIcon: {
    marginRight: theme.spacing.unit,
  },
  commentsRoot: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center'
  }
});

class Article extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, article } = this.props;

    return (
      <Card className={classes.card} raised elevation={13}>
        <CardHeader
          avatar={ <UserAvatar className={classes.avatar} user={article.author}/> }
          title={article.title}
          subheader={article.date.toDateString()}
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

        {/* TODO: Use a carousel */}
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
            <GenericTabs
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
                  content: 
                    <div className={classes.commentsRoot}>
                      <CommentsList comments={article.comments}/>
                      <Session.Consumer>
                      {session => (
                        session.isLoggedin && 
                        <Button 
                        variant="extendedFab" 
                        aria-label="Leave a comment"
                        className={classes.button}>
                          <AddIcon className={classes.addIcon}/>
                          Leave a comment
                        </Button>)}
                      </Session.Consumer>
                    </div>
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
