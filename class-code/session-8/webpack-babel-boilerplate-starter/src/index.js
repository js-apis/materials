// Using https://jsonplaceholder.typicode.com/

/* 
  `import` helps us import stuff from other JavaScript file.
  In real world programming, we would not want to put all of our program's code in one file. 
  Rather, we would want to break it down into different `modules`. 
  In that way, our code will become much easier to maintain, and much easier to reason about,
  and much easier to work on.

  When we `import` something from another file, that means we have `export`ed something from that file. 
  Go ahead and open the fles below (for example `./components/header.js` and `./components/blog.js`) to see 
  What they each `export`ed.

  An important thing to keep in mind regarding `import` is that you can either:
  1. `import` one or more things from another file in your project using a relative path
  2. `import` one or more things from a library you might have installed using `npm`

  Read more about `immport` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

*/
import header from './components/header';
import blog from './components/blog';
// console.log(blog)
// function blog() { .......... }

/* 
  Pay attention to how `getPosts` is imported below, copared to `blog` and `header` above.
  Refer to `./api.js` and `./compoentns/header.js` for explanation.
*/
import { getPosts, getPostById } from './api';
/* 
  Yep! we can import css files directly into our app like this.
  Pay attention that `main.css` is sitting in the same directory as this file.
  So we can import our `css` file like this instead of doing so in HTML with a `link` tag (<link href="main.css" />)
  We are able to do this thanks to Webpack. Read more about Webpack: https://webpack.js.org/
  Intro to webpack https://codingcompiler.com/webpack-tutorial/
*/
import 'main.css';

header({ title: '⚡️ My Awesome Feed ⚡️' });


getPostById(20).then(post => {
  console.log('Post number 20 is: ', post);
  const containerEl = document.querySelector('#app');
  const highlightBlogPostContainerEl = document.createElement('div');
  highlightBlogPostContainerEl.classList.add('highlight');
  highlightBlogPostContainerEl.classList.add('post');
  highlightBlogPostContainerEl.innerText = post.title;

  containerEl.appendChild(highlightBlogPostContainerEl);
})

//TODO write a `post` components, use it to populate posts
//TODO clicking on `post` should show the post, its comments and a comment posting form. You should be able to post comments.
getPosts().then(posts => {
  //console.log('Have posts! ', posts);
  blog(posts);
})




// POST adds a random id to the object sent
/*
fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(json => console.log(json))
*/