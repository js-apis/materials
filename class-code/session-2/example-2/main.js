/* 
  Book cosntructor or `class` 
  Classes start with capital letter by convetion 
  Classes are "Blueprints" that create a recipe for makeing objects of the same Type.
  More about constructor functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
*/
function Book(data) {
  /* 
    Properties:
    These are data points that are added to every instance of the Class that we create.
    So every `Book` instance that we create, will have these data points attached to them.
    When you create a new `book` instance using the syntax `var book = new Book(data);`, that `book` will have all the following `properties`.
    We will use these properties to render stuff into our HTML page.
  */
  this.title = data.title;
  this.year = data.year;
  this.author = data.author;
  this.rating = data.rating;
  this.description = data.description;

  /* 
    Methods: 
    Methods are functionalities that every object inherits. 
    AKA it "comes out of the box" with those functionalities. In that sense, it is similar to `properties` above.
    The difference is, unlike `properties` that tell us something about the object, `methods` DO something. They perform a task.
    In this case, `render` prints data onto the HTML page using the DOM api.
  */
  this.render = function() {
    /* 
      `document.querySelector('#container')` gives us a reference to the `<div id="container"></div>` that we created in our HTML.
      We need a reference to this container element, because we want to print our books inside of it.
      More about `querySelector`: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    */
    var containerEl = document.querySelector('#container');
    
    /* 
      `document.createElement('div')` simply creates a `<div>` element for us.
      Please note, this `div` is still NOT attached to our HTML page. So it's not yet visible.
      We need a reference to this container element, because we want to print our books inside of it.
      More about `createElement`: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    */
    var bookEl = document.createElement('div');

    
    /* 
      `bookEl.classList.add('my-class-name')` is a way for us to add a className to an element.
      So that the HTML element we made will now have the class we need.
      In the example below, our HTML element looks like `<div class="book"></div>`
      More about `classList`: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    */
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

    /*
      The following lines attach each element (e.g: titleEl, yearEl, authorEl, ratingEl) to `<div class="book"></div>`
      So after the following line have been executed, our book HTML will look like this:
      <div class="book">
        <h3 class="title">Book Title</h3>
        <span class="year">1986</span>
        <span class="author">Ms. Author</span>
        <span class="rating">3/5</span>
        <p class="rating">Book description here</p>
      </div> 
      Remember: although the HTML elements for one book has been created at the end of the following lines, the book HTML has NOT yet been added to our page.
      More about `append`: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
    */
    bookEl.append(titleEl);
    bookEl.append(yearEl);
    bookEl.append(authorEl);
    bookEl.append(ratingEl);
    bookEl.append(descriptionEl);

    /* 
      And finally, we take the book HTML elements to the container element `<div class="container"></div>`
      NOW, we will be able to see the book HTML on the page.
    */
    containerEl.append(bookEl);
  }

}

/*
  This is a good example of Asycnhronous JavaScript code. 
  We handle asynchrony using what is known as a `callbak function`
  The following line means this:
  "Whenever all the HTML has been loaded, run the function I give you."
  More about `DOMContentLoaded` https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

  Disregard the `event` passed to this function below. We'll learn about these later.
*/
document.addEventListener('DOMContentLoaded', function(event) {
  /* 
    Create a new `XMLHttpRequest` object. This object helps us access data. `req` stands for `request`.
    This object is basically our assistant. We will send him off to go get data and come back.
    Read more about `XMLHttpRequest` here: https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest)
  */
  var req = new XMLHttpRequest();
  /* 
    We tell our assistant to expect a JSON file.
    JSON files are basically Javascript arrays that we store in a separate file.
    Read more about `JSON` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
  */
  req.responseType = 'json';
  /* 
    We tell our assistant to go and get the `data.json` file.
  */
  req.open('GET', './data.json', true);
  /* 
    Another good example of Asynchronous code. 
    What we mean is this: Whenever loading `data.json` is complete, run the function we give you.
  */
  req.onload  = function() {
    /* 
      Here, our request has been fulfilled. We can access the response via `req.respone` (That's our data!)
    */
    var data = req.response;
    // do something with jsonResponse
    var books = [];
    /* 
      Go over our data and create books objects and render them on the screen.
      Open your browser's developer tool (console) by right clicking on the screen and choosing Inspect
      or (in Google Chrome on Mac OS) command + option + j
      To see the messages printed.
    */
    console.log('Here is all the book data we got from ./data.json: ', data);
    for (var i = 0; i < data.length; i ++) {
      /* 
        `data[i]` is the data for this book. 
      */
      console.log('We are on book data number ', i, ' and the book data is: ', data[i]);
      var bookData = data[i];
      /* 
        Go ahead and create the `Book` item!
      */
      
      var book = new Book(bookData);

      /* 
        `push` is a `method` on Arrays (e.g: books Array) that allows us to add an item at the end of an array 
        More about `push`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
      */
      books.push(book);
      /* 
        Add the `book` we just created to the HTML page!
      */
      book.render();
    }

  };

  /* 
    Remember our assistant we created above using `var req = new XMLHttpRequest();` ?
    We configured it to go get `./data.json` and then we told him what to do when he gets the data.
    But ... we never actually sent him off to his journey!
    The following line tells him: OK! Go!
  */
  req.send(null);

});





