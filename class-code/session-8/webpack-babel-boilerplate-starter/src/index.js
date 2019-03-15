// Using https://jsonplaceholder.typicode.com/
import header from './components/header';
import blog from './components/blog';
import { getPosts } from './api';
import 'main.css';

header({ title: 'I am really confused' });

//TODO write a `post` components, use it to populate posts
//TODO clicking on `post` should show the post, its comments and a comment posting form. You should be able to post comments.
getPosts().then(posts => {
  console.log('Have posts! ', posts);

  blog(posts);

})


// POST adds a random id to the object sent
fetch('https://jsonplaceholder.typicode.com/comme', {
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