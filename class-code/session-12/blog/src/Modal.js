import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    //https://jsonplaceholder.typicode.com/comments?postId=1
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.postId}`)
      .then(response => response.json())
      .then((comments) => {
        this.setState({
          comments: comments
        })
      })
  }

  render() {
    return(
      <div className="Modal-container">
        <br />
        <div className="Modal-backdrop"></div>
        <div className="Modal">
          <header className="Modal-header">
            <a onClick={this.props.onCloseClick}>CLOSE</a>
            <br/>
            <h1>{this.props.title}</h1>
          </header>
          <div className="Modal-content">
            {this.props.content}
          </div>
          <div className="Modal-content">
            <ul>
              {this.state.comments.map((comment, index) => {
                return (
                  <li key={index}>{comment.body}</li>
                )
              }) }
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default Modal;