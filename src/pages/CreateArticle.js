import React        from 'react';
import PropTypes    from 'prop-types';

import withStyles   from '@material-ui/core/styles/withStyles';

import pink         from '@material-ui/core/colors/pink';

import Card         from '@material-ui/core/Card'
import CardContent  from '@material-ui/core/CardContent'
import CardHeader   from '@material-ui/core/CardHeader'
import TextField   from '@material-ui/core/TextField'

import PageTemplate from './Template';

const styles = theme => ({
  colored: {
    color: pink[500]
  },
  root: {
    minWidth: 800,
    display: 'flex',
    justifyContent: 'center'
  }
})

class CreateArticle extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <PageTemplate>
        <Card className={classes.root}>
          <CardHeader title="Create Article"/>
          <CardContent>
            <TextField 
            id="articleFile"
            label="Article"
            helperText="Upload a .json file."
            type="file"/>
          </CardContent>
        </Card>
      </PageTemplate>
    );
  }
}

CreateArticle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateArticle);