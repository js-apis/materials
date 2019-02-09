/* 
  Base URL that we need to hit. See: https://icanhazdadjoke.com/api#search-for-dad-jokes
*/
var baseURL = 'https://icanhazdadjoke.com/search?term=';
/* 
  Grab a reference to HTML elements that we need to work with 
*/
var searchTermEl = document.querySelector('.search-term');
var searchBtnEl = document.querySelector('.search-btn');
var jokesListEl = document.querySelector('.jokes-list');
var formEl = document.querySelector('.search-form');
var notFoundEl = document.querySelector('.not-found');
var loadingEl = document.querySelector('.loading');
var loadingTermEl = document.querySelector('.loading-term');
var searchTerm = '';


/* 
    I wrote this function so you don't have to write out a lot of code to call an API.
    Using the following function, you just give it:
    - what URL to hit
    - what to do when the result is received from the API
*/
function getJSON(path, callback) {
  loadingTermEl.innerText = searchTerm;
  loadingEl.classList.remove('hidden');
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', path, true);
  req.setRequestHeader('Accept', 'application/json');
  req.onload = function() {
    callback(req.response);
    loadingEl.classList.add('hidden');
  };
  req.send();
}

// An array to hold our `joke` objects. We don't NEED this necessarily.
var jokes = [];

/* 

*/
formEl.addEventListener('submit', function(event) {
  /* 
    Prevent page refresh. 
    When you submit any form, the browser will automaically refresh your page.
    the following line prevents this behavior.
  */
  event.preventDefault();
  /* 
    Read the contents of what the user has written in the search input.
  */
  searchTerm = searchTermEl.value;
  /* 
    construct our final API URL.
  */
  var endpointURL = baseURL + searchTerm;
  console.log('endpoint URL is: ', endpointURL);
  /* 
    Call the API, and call `populateJokes` whenever the call finishes. 
    `populateJokes` is our "callback function" here.
  */
  getJSON(endpointURL, populateJokes);
});

/* 
  populate jokes
*/
function populateJokes(jokeData) {
  // clear the list. whatever was here from the last search, should be cleared off.
  jokesListEl.innerHTML = '';

  console.log('populateJokes says I got joke data! ', jokeData);
  /* 
    `jokeData` is the response we got from our API.
    It has some stuff in it. But we are only interested in its `results` property, which holds our jokes inside of it.
  */
  var results = jokeData.results;

  /* 
    If `results` includes anything in it:
  */
  if (results.length) {
    // hide the `Not found` message, if it's not already hidden.
    notFoundEl.classList.add('hidden');
    // loop through all the jokes - the `results` array.
    for(var i = 0; i < results.length; i++) {
      // create a new `Joke` instance, using the `Joke` constructur (class) below.
      var joke = new Joke(results[i].joke, jokesListEl); 
      // call `render` on the joke we just created, so it's added to our HTML
      joke.render();
      // put this joke inside the `jokes` URL. From your browser console, now you can type in `jokes` and see all the jokes.
      jokes.push(joke);
    }
  } else {
    // if no results found, just show the `no jokes found` message.
    notFoundEl.classList.remove('hidden');
  }
  
}

/* 
  A `class` to create `joke` instances
*/
function Joke(jokeText, container) {
  this.jokeText = jokeText;
  this.container = container;
  this.render = function render() {
    // make an `li` element
    this.element = document.createElement('li');
    // put the joke in it
    this.element.innerText = this.jokeText;
    // put the item in the list
    this.container.append(this.element);
  }
}

