/* 
  Import `React` and `Component` from `react`.
  Pay attention that `react` is a package downloaded from `npm`.
  And because `npm` knows it by name, we can import it using its name. (as opposed to a relative path.)
  For more information about names vs. relative paths, see comments in `src/App.js`.
  It's worth noting that React is a `default` import whereas `{ Component }` is a `named` import.
  Which is why we are wrapping it in the `{ }`.

  This means that somewhere in the `react` package, we have the following lines of code:
  
  `export default React`
  `export Component`

  Remember that `import` and `export` are just like trading in real life.
  Whenever a file `exports` something, another file can `import` it.
*/
import React, { Component } from 'react';
/* 
  importing the `css` file we wrote for `App`.
  For more information regarding importing css files see `index.js`
*/
import './App.css';
/* 
  In React, we want to think of repeating building blocks of our code as different components.
  So, because we need to render a whole bunch of blog posts, we are going to create a BlogPost component
  that we will re-use.
  For more information about components, read:
  - https://reactjs.org/docs/thinking-in-react.html
*/
import BlogPost from './BlogPost';

/* 
  Every React component can be a `class`.
  But not just ANY class. It needs to have the traits and functionalities of a React Component.
  Which is why, our `App` extends `Component`. Look at line 17. We imported `Component` up there.
  You will see this pattern very often when working with React:
  `class MyComponent Extends Component`
*/
class App extends Component {
  
  /* 
    `constructor` is a method (function) that gets called automatically by your computer (your JS runtime)
    When you do create an instance of a class. In this function, we initialize anything that needs to be initialized.
  */
  constructor(props) {
    /* 
      To better understand `constructor` and `props` read the following:
      - https://stackoverflow.com/questions/41837992/what-is-superprops-doing-for-my-react-component
      - 
    */
    super(props);
    
    /* 
      In every React component that has `state` (Some components won't have `state`) 
      `state` is the source of truth for data.
      Every time the component data inside `state` changes, our app will re-render the part of the app
      that relied on that data.

      So this basically allows us to focus on managing our data, and React will take care of 
      rendering our app to represent our data.
      
      in this component, initially we have no blog posts. 
      But we know that our data will basically consist of a list (Array) of blog posts.
      So we can initialize our state with an empty array.
      This is also helpful, because when your future self looks at this code, you will know 
      what your state looks like.

      For instance, if you were also storing blog posts comments in your `state`, your `state` would look something like
      ```
        this.state = {
          posts: [],
          comments: []
        }
      ```
    */
    this.state = {
      posts: []
    }

    /*
      Initially, when we start our app, blog posts are empty.
      Let's verify that by printing it to the screen:
    */
    console.log('Initially: ', this.state.posts)
  }


  /* 
    `componentWillMount` is a method that will automatically be called by React, right before
    the component is rendered in your page.
    We can use this "magical" method because we did `class App extends Component`.
    And because our `class App` is extending `Component` it comes out of the box with useful
    methods like the following.
  */
  componentWillMount() {
    /* 
      Go out and fetch the blog posts.
    */
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((posts) => {
        /*
          When you successfully got the blog posts, 
          Put the array of blog posts in our `state`.
          Remember, always, ALAYWS use the method `this.setState` to update our `state`.
        */
        this.setState({
          posts: posts
        })

        /* 
          Notice that as soon as the `fetch` function call above fulfills successfully,
          and we update our `state`, our App automatically re-renders to show the blog posts.
          That's the power of `state`.
        */
        console.log('Afterwards: ', this.state.posts)
      })
  }

  /* 
    `render` is a function that gets called automatically by react anytime the `state` changes.
    It should always return JSX. `JSX` represents the HTML that this Component creates.
    It is very similar to HTML with some subtle differences.
    Read more about `JSX` here: 
    - https://flaviocopes.com/jsx/
    - https://www.sitepoint.com/an-introduction-to-jsx/
  */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to my blog
        </header>
        <div className="Blog-container">
          /* 
            This is the recursive process that goes through all the blog posts
            and creates blog posts for us.
            Pay attention that we can execute any javascript code we need inside our `jsx` markup
            as long as we wrap it in `{}`
            So a valid `jsx` block could look like
            ```
              <div className="my-div">
                { console.log('I am JavaScript inside JSX.') }
              </div>
            ```
            Also pay attention that we are using the `map` method on the `this.state.posts` array.
            We have covered `map` in class before, but you can read more about it here:
            - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
            - https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
          */
          {this.state.posts.map((post) => {
            /* 
              the `map` method should ALWAYS return something. 
              In this case, we are returning a React Component we created and imported.
              Then, we pass the data necessary to render that Component, with this syntax:
              ```
                <ComponentName data={data} />
                <ShoppingList list={[ 'eggs', 'mushrooms', 'rice', 'juice', 'chips' ]} />
              ```
            */
            return <BlogPost post={post} />
          })}
        </div>
      </div>
    );
  }
}

/* 
  In the end, we export `App` as a default export.
  If you look into `index.js` you'll see that we import it there.
*/
export default App;
