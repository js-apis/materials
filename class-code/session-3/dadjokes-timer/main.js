/* 
    I wrote this function so you don't have to write out a lot of code to call an API.
    Using the following function, you just give it:
    - what URL to hit
    - what to do when the result is received from the API
*/
function getJSON(path, callback) {
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', path, true);
  req.setRequestHeader('Accept', 'application/json');
  req.onload = function() {
      callback(req.response);
  };
  req.send();
}


// 1. call random joke API
// 2. print joke in HTML
function printJoke(jokeData) {
  console.log('jokeData: ', jokeData);
  var jokeEl = document.querySelector('.joke');
  jokeEl.innerText = jokeData.joke;
}

function loadRandomJoke() { 
  getJSON('https://icanhazdadjoke.com/', printJoke);
}

/* 
  `window.setInterval` executes the function you give it (the first parameter) repeatedly every `X` milliseconds.
  In the example below we say:
  Repeatedly run `loadRandomJoke` every 3000 milliseconds (every 3 seconds)
*/
window.setInterval(loadRandomJoke, 3000);

