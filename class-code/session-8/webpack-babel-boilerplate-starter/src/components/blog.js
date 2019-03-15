/* 
    What we learn below:
    1. Destructuring https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    2. Default parameters https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
*/
function blog(data) {
    
    const appContainer = document.querySelector('#app');

    const blogContainer = document.createElement('div');
    blogContainer.className = 'blog-container';

    console.log('data is ', data);

    data.forEach((post) => {
        const postEl = document.createElement('div');
        postEl.className = 'post';

        const titleEl = document.createElement('h3');
        titleEl.innerText = post.title;

        postEl.appendChild(titleEl);

        blogContainer.appendChild(postEl);
    })

    appContainer.appendChild(blogContainer);
}

export default blog;