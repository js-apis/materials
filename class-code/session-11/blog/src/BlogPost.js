import React, { Component } from 'react';

class BlogPost extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="Blog-post">
        <h3>
        {this.props.post.title}
        </h3>
        <p>
          {this.props.post.body}
        </p>
        <span>
          <strong>User Id: {this.props.post.userId}</strong>
        </span>
      </div>
    );
  }
}

export default BlogPost;