import React, { Component } from 'react';


class BlogHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header className="App-header">
        {this.props.headerText}
      </header>
    );
  }
}

export default BlogHeader;