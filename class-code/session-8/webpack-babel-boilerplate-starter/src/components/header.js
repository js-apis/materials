/* 
    What we learn below:
    1. Destructuring https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    2. Default parameters https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
*/
function header({ title = 'Placeholder Title' }) {
    
    const appContainer = document.querySelector('#app');

    const header = document.createElement('header');
    header.className = 'global-header';

    const heading = document.createElement('h1');
    heading.className = 'global-heading';

    const titleText = document.createTextNode(title);
    
    heading.appendChild(titleText);
    header.appendChild(heading);
    appContainer.appendChild(header);
}

export default header;