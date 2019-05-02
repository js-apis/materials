import React, { Component } from 'react';
import './App.css';

// new App();
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postBody: '',
      userId: 1,
      posts: []
    };
  }

  updateTitle = (event) => {
    this.setState({
      postTitle: event.target.value
    });
  }

  updateBody = (event) => {
    this.setState({
      postBody: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.postTitle,
        body: this.state.postBody,
        userId: this.state.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((json) => {
      // creates a copy of `this.state.posts`
      const oranges = [... this.state.posts];
      oranges.unshift(json);
      this.setState({
        posts: oranges
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Blog Admin</h1>
        </header>
        <div className="App-content">
          <div className="Create-post">
            <form onSubmit={this.handleSubmit}>
              <label>Create a Blog Post </label>
              <input
                placeholder={'title'}
                onChange={this.updateTitle}
                className="Post-title" 
                type="text"
                value={this.state.postTitle} />
              <textarea
                onChange={this.updateBody}
                className="Post-body" 
                value={this.state.postBody} />
              <input 
                onClick={this.handleSubmit}
                className="Post-submit" 
                type="submit" 
                value="Post" />
            </form>
          </div>
          <div className="Posts-list">
            {this.state.posts.map((post) => {
              return (
                <div className="Single-post">
                  <h3 className="title">{post.title}</h3>
                  <p className="body">{post.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
