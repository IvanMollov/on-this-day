import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="Article">
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
