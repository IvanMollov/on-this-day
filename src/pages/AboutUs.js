import React        from 'react';
import PropTypes    from 'prop-types';

import withStyles   from '@material-ui/core/styles/withStyles';

import pink         from '@material-ui/core/colors/pink';

import Card         from '@material-ui/core/Card'
import CardContent  from '@material-ui/core/CardContent'
import CardHeader   from '@material-ui/core/CardHeader'
import Typography   from '@material-ui/core/Typography'

import PageTemplate from './Template';

const styles = theme => ({
  colored: {
    color: pink[500]
  }
})

class AboutUs extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <PageTemplate>
        <Card>
          <CardHeader title="Description"/>
          <CardContent>
            <Typography>
              'On This Day' is a web organization that aims to educate and entertain its community and the society with various facts about the world's history. Many different topics are covered: science, music, cinema, sports, significant events, famous and not so famous people. By far we administered <a className={classes.colored} href="https://www.facebook.com/natoziden681/" target="_blank">this Facebook page</a>. We were writing articles thatwe found interesting and the people were happy. Now we seek to grow our community even further and to give everyone a chance to be an author and share his interests with the society.
            </Typography>
          </CardContent>
        </Card>
      </PageTemplate>
    );
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);