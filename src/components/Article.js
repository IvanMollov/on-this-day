import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <Button color="primary" onClick={this.handleClose}>
          OK
        </Button>
        <header>
          <h2>{this.props.heading}</h2>
        </header>
        <p>
          {this.props.body}
        </p>
      </div>
    );
  }
}

export default Article;
