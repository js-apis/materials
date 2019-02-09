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


/* 
   You can pass an `inline` `anonymous` function as a callback function to `getJSON`
   Like this.
   - anonymous: it doesn't have a name. (see `getJSON`? that is a named function) - more about anonymous functions: http://helephant.com/2008/08/23/javascript-anonymous-functions/
*/

getJSON('https://icanhazdadjoke.com/', function (joke) {
  console.log('I am an inline, anonymous function and I got joke: ', joke);
});

// 1. call random joke API
// 2. print joke in HTML
function printJoke(jokeData) {
  var jokeEl = document.querySelector('.joke');
  jokeEl.innerText = jokeData.joke;
}

function loadRandomJoke(event) { 
  // prevent default behavior of this event.
  event.preventDefault();
  getJSON('https://icanhazdadjoke.com/', printJoke);
}

// grab a reference to the <button> element in html
var loadJokeBtn = document.querySelector('.random-joke');
// call `loadRandomJoke` whenever `<button>` is clicked
loadJokeBtn.addEventListener('click', loadRandomJoke);
