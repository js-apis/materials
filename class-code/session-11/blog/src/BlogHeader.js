/* 
  Nothing new here. For explanation of all code in this component, look at `./index.js` and `App.js`
*/
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