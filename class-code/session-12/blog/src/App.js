// 1. create a modal component
// 2. upon clicking on a post, show the modal component, load in the comments
// 3. add a comment box, upon filling the comment box and submitting, add the comment

import React, { Component } from 'react';
import './App.css';
import BlogPost from './BlogPost';
import BlogHeader from './BlogHeader';
import Modal from './Modal'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isModalVisible: false,
      modalTitle: '',
      modalContent: '',
      currentPostId: null
    }
  }

  handleBlogPostClick = (index) => {
    console.log(index)
    this.setState({
      currentPostId: index,
      modalTitle: this.state.posts.find((post) => post.id === index).title,
      modalContent: this.state.posts.find((post) => post.id === index).body
    })
    this.showModal();
  }

  showModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  hideModal = () => {
    this.setState({
      isModalVisible: false
    })
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
        { this.state.isModalVisible && <Modal onCloseClick={this.hideModal} title={this.state.modalTitle} postId={this.state.currentPostId} content={this.state.modalContent} /> }
        <BlogHeader headerText={'Welcome to my awesome blog.'} />
        <div className="Blog-container">
          {this.state.posts.map((post, index) => {
            return <BlogPost handleClick={this.handleBlogPostClick} key={index} post={post} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
