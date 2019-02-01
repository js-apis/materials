/* A fictional API that returns bogus book data. Not to be trusted for academic research */
function api() {
  return [
    {
      title: 'Moby Dick',
      author: 'Herman Mellville',
      year: '1923',
      description: 'The key is to drink coconut, fresh coconut, trust me. Every chance I get, I water the plants, Lion! Mogul talk. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. They will try to close the door on you, just open it. Every chance I get, I water the plants, Lion! Fan luv. Lion! Let’s see what Chef Dee got that they don’t want us to eat. ',
      rating: '0.2/5'
    },
    {
      title: 'Giovanni\'s Room',
      author: 'Joe Smith',
      year: '1800',
      description: 'Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Let’s see what Chef Dee got that they don’t want us to eat.',
      rating: '4.5/5'
    },
    {
      title: 'The Master and Margerita',
      author: 'Somebody with a name',
      year: '1774',
      description: 'Life is what you make it, so let’s make it. I’m up to something. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it.',
      rating: '2.1/5'
    },
    {
      title: 'Blood Meridian',
      author: 'First Name Last Name',
      year: '2200',
      description: ' Let’s see what Chef Dee got that they don’t want us to eat. How’s business? Boomin. Learning is cool, but knowing is better, and I know the key to success. Let’s see what Chef Dee got that they don’t want us to eat. ',
      rating: '3.5/5'
    },
    {
      title: 'Mason and Dixon',
      author: 'harry Potter',
      year: '2027',
      description: 'I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing.',
      rating: '5/5'
    },
    {
      title: 'The Divine Comedy',
      author: 'DJ Khaled',
      year: '1300',
      description: 'It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Hammock talk come soon.',
      rating: '1/5'
    },
  ]
}

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

  // inside of the callback for `DomContentLoaded`
  // call to `api` function returns our data
  var data = api();
  var books = [];
  for (var i = 0; i < data.length; i ++) {
    var bookData = data[i];
    var book = new Book(bookData);
    // `push` is a `method` on Arrays (e.g: books Array) that allows us to add an item at the end of an array
    books.push(book);
    book.render();
  }

});





