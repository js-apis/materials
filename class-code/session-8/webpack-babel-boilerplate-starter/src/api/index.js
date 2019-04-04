export function getPosts() {  
  return fetch(`https://jsonplaceholder.typicode.com/posts/`)
    // 1
    .then(response => response.json())
    /*
    // Line 4 is equal to the lines below

    .then(function(response) {
      return response.json();
    })
    */
}

export function getPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
}

//TODO: export a function that gets a post by `id`



