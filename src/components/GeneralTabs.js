import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function generateTabs(tabsData, shownTab) {
  let tabs = {
    labels: [],
    content: undefined
  };

  for (const tabIdx in tabsData) {
    tabs.labels.push(
      <Tab label={tabsData[tabIdx].label} />
    );
    if (shownTab === Number(tabIdx)) {
      tabs.content = tabsData[tabIdx].content
    }
  }

  return tabs;
}

class GeneralTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, tabsData} = this.props;
    const { value } = this.state;

    const tabs = generateTabs(tabsData, value);

    return (
      <div className={classes.root}>
        <Tabs 
          value={value} 
          onChange={this.handleChange} 
          centered 
          textColor='secondary'
        >
          {tabs.labels}
        </Tabs>
        {tabs.content}
      </div>
    );
  }
}

GeneralTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralTabs);