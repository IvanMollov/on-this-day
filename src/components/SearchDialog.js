import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {};

class SearchDialog extends React.Component {
  state = {
    open: false,
    searchData: {
      date: {
        date: undefined,
        month: undefined,
        year: undefined
      },
      user: undefined,
      keywords: undefined
    }
  };

  componentDidMount = () => {
    this.props.onRef(this);
  }

  handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.props.handleClickClose();
    this.setState({ open: false });
  };

  handleFind = () => {
    this.setState({ open: false });
    console.log(this.state.searchData);
  };

  handleKeywordsChange = (event) => {
    this.setState({ searchData: { keywords: event.target.value } });
  };

  handleDateChange = (event) => {
    this.setState({ searchData: { date: { date: event.target.value } } });
  };

  handleMonthChange = (event) => {
    this.setState({ searchData: { date: { month: event.target.value } } });
  };

  handleYearChange = (event) => {
    this.setState({ searchData: { date: { year: event.target.value } } });
  };

  handleUserChange = (event) => {
    this.setState({ searchData: { user: event.target.value } });
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Find articles</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="keywords"
            label="Keywords"
            type="search"
            fullWidth
            onChange={this.handleKeywordsChange}
          />
            <div style={{display: 'flex', flexFlow: 'center'}}>
              <TextField
                id="dateDate"
                className={this.props.classes.narrow}
                label="Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                type="number"
                onChange={this.handleDateChange}
              />
              <TextField
                id="dateMonth"
                className={this.props.classes.narrow}
                label="Month"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                type="number"
                onChange={this.handleMonthChange}
              />
              <TextField
                id="dateYear"
                className={this.props.classes.narrow}
                label="Year"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                type="number"
                onChange={this.handleYearChange}
              />
            </div>
          <TextField
            id="user"
            label="User"
            autoFocus
            margin="dense"
            type="text"
            fullWidth
            onChange={this.handleUserChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleFind} color="primary">
            Find!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SearchDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchDialog);