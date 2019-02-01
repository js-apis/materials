/* a Book cosntructor `class` - Classes start with capital letter by convetion */
function Book(data) {
  // Properties
  this.title = data.title;
  this.year = data.year;
  this.author = data.author;
  this.rating = data.rating;
  this.description = data.description;

  // Methods - methods are functionalities that every object inherits. AKA it "comes out of the box" with those functionalities
  this.render = function() {
    // explain what the hell querySelector is.
    var containerEl = document.querySelector('#container');
    // explain this one as well
    var bookEl = document.createElement('div');

    // <div class="book red hardcover"></div>
    bookEl.classList.add('book');

    var titleEl = document.createElement('h3');
    titleEl.innerText = this.title;
    titleEl.classList.add('title');

    var yearEl = document.createElement('span');
    yearEl.innerText = this.year;
    yearEl.classList.add('year');

    var authorEl = document.createElement('span');
    authorEl.innerText = this.author;
    authorEl.classList.add('author');

    var ratingEl = document.createElement('span');
    ratingEl.innerText = this.rating;
    ratingEl.classList.add('rating');

    var descriptionEl = document.createElement('p');
    descriptionEl.innerText = this.description;
    descriptionEl.classList.add('description');

    bookEl.append(titleEl);
    bookEl.append(yearEl);
    bookEl.append(authorEl);
    bookEl.append(ratingEl);
    bookEl.append(descriptionEl);

    containerEl.append(bookEl);
  }

}

// This is a good example of Asycnhronous JavaScript code. We handle asynchrony using what is known as a `callbak function`
document.addEventListener("DOMContentLoaded", function(event) {

  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', './data.json', true);
  req.onload  = function() {
     

  };
  req.send(null);

  var data = req.response;
     // do something with jsonResponse
    var books = [];
    for (var i = 0; i < data.length; i ++) {
      var bookData = data[i];
      var book = new Book(bookData);
      // `push` is a `method` on Arrays (e.g: books Array) that allows us to add an item at the end of an array
      books.push(book);
      book.render();
    }

  
 
  

});





