export function getPosts() {  
  return fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(response => response.json())
}

//TODO: export a function that gets a post by `id`



