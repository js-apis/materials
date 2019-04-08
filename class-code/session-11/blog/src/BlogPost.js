/* 
  For explanation for this line, look at `App.js`
*/
import React, { Component } from 'react';

/* 
  For explanation for this line, look at `App.js`
*/
class BlogPost extends Component {
  /* 
    For explanation for this line, look at `App.js`
  */
  constructor (props) {
    super(props)
  }

  /* 
    For eplxanation for this method look at `App.js`.
    Here is the important part.
    Remember back in `App.js` -> `render` we wrote the folloing line of code?
    `<BlogPost post={post}` />`
    Great. Now, inside the `BlogPost` component where we are right now,
    You can access  the data inside `post` using `this.props`.
    Any time you pass in data to a `Component` using this syntax:
    ```
      const myClothes = ['blue pants', 'red shirt', 'black hat', 'polka dot socks']
      <MyCloset clothes={ myClothes } />
    ```
    Inside of that component (in the example ebove, the `MyCloset`) component
    You will be able to access the passed-in data via `this.props`.
    So if you do `console.log(this.props.clothes);` you will see:
    `['blue pants', 'red shirt', 'black hat', 'polka dot socks']`

    Remember, you are not limited to passing only 1 data object to React Components like this. You can do something like:

    ```
      const isDoorLocked = false;
      const hasShelves = true;
      const doorColor = 'white'l
      const location = 'hallway'
      <MyCloset locked={isDoorLocked} shelves={hasShelves} color={doorColor} location={location} />
    ```

    And then inside the Component you will have:
    ```
      this.props.locked
      this.props.shelves
      this.props.color
      this.props.location
    ```
  */
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

/* 
  We export the component here so we can import and use it in `App.js`
*/
export default BlogPost;