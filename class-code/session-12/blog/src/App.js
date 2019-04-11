import React, { Component } from 'react';
import './App.css';
import BlogPost from './BlogPost';
import BlogHeader from './BlogHeader';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((posts) => {
        this.setState({
          posts: posts
        })
      })
  }

  render() {
    return (
      <div className="App">
        <BlogHeader headerText={'Welcome to my awesome blog.'} />
        <div className="Blog-container">
          {this.state.posts.map((post, index) => {
            return <BlogPost key={index} post={post} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
