import React, { Component } from 'react';
import './App.css';
import BlogPost from './BlogPost';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      posts: []
    }
    console.log('Initially: ', this.state.posts)
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((posts) => {
        this.setState(
          {
            posts: posts
          }
        )
        console.log('Afterwards: ', this.state.posts)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to my blog
        </header>
        <div className="Blog-container">
          {this.state.posts.map((post) => {
            return <BlogPost post={post} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
