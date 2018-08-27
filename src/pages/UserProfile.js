import React        from 'react';
import PropTypes    from 'prop-types';

import withStyles   from '@material-ui/core/styles/withStyles';

import pink         from '@material-ui/core/colors/pink';

import Card         from '@material-ui/core/Card'
import CardContent  from '@material-ui/core/CardContent'
import CardHeader   from '@material-ui/core/CardHeader'
import Typography   from '@material-ui/core/Typography'
import Grid         from '@material-ui/core/Grid'

import PageTemplate from './Template';

import UserAvatar   from '../components/UserAvatar'

import queryUsers   from '../mock-ups/Users'

const styles = {}

class UserProfile extends React.Component {
  render() {
    const {classes} = this.props;
    const user = queryUsers(Number(this.props.match.params.id))

    console.debug(Number(this.props.match.params.id))

    return (
      <PageTemplate>
        <Card>
          <CardHeader title="D3M0_US3R"/>
          <CardContent>
            <Grid container>
              <Grid item>
                <UserAvatar user={user}/>
              </Grid>
              <Grid>
                
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </PageTemplate>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile);