// https://icanhazdadjoke.com/search?term=hipster
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

window.setInterval(loadRandomJoke, 3000);
//
/*
window.setTimeout(function() {
  console.log('I am happening after 3 seconds')
}, 3000);
*/

