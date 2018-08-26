import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'

import PageTemplate   from './Template';

const styles = {}

class AboutUs extends React.Component {
  render() {
    return (
      <PageTemplate>
        <Card>
          <CardHeader title="Description"/>
          <CardContent>
            <Typography>
              'On This Day' is a web organization that aims to educate and entertain its community and the society with various facts about the world's history. Many different topics are covered: science, music, cinema, sports, significant events, famous and not so famous people. By far we administered [this Facebook page](). We were writing articles thatwe found interesting and the people were happy. Now we seek to grow our community even further and to give everyone a chance to be an author and share his interests with the society.
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