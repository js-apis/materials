var baseURL = 'https://icanhazdadjoke.com/search?term=';
var searchTermEl = document.querySelector('.search-term');
var searchBtnEl = document.querySelector('.search-btn');
var jokesListEl = document.querySelector('.jokes-list');
var formEl = document.querySelector('.search-form');
var notFoundEl = document.querySelector('.not-found');
var loadingEl = document.querySelector('.loading');
var loadingTermEl = document.querySelector('.loading-term');
var searchTerm = '';

// https://icanhazdadjoke.com/search?term=hipster
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

var jokes = [];

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  searchTerm = searchTermEl.value;
  var endpointURL = baseURL + searchTerm;
  console.log('endpoint URL is: ', endpointURL);
  getJSON(endpointURL, populateJokes);
});


function populateJokes(jokeData) {
  // clear the list
  jokesListEl.innerHTML = '';
  var results = jokeData.results;
  
  if (results.length) {
    notFoundEl.classList.add('hidden');
    for(var i = 0; i < results.length; i++) {
      var joke = new Joke(results[i].joke, jokesListEl); 
      joke.render();
      jokes.push(joke);
    }
  } else {
    notFoundEl.classList.remove('hidden');
  }
  
}


function Joke(jokeText, container) {
  this.jokeText = jokeText;
  this.container = container;
  this.render = function render() {
    this.element = document.createElement('li');
    this.element.innerText = this.jokeText;
    this.container.append(this.element);
  }
}

