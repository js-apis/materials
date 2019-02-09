/*
  'use strict' is called a "directive". We don't use directives elsewhere in JavaScript. 
  This is the only one you'll probably see. But this is a line that tells the browser: "Hey, don't let me write bad code. Catch my mistakes". For example, if you forget to use put `var` before a variable while declaring it, your code will throw an error, instead of implicitly declaring it as a global variable.
  Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/
// 'use strict';

/*
  `studentCount` is a global variable. It's in the outer-most scope.
  You can open your browser console and type in `studentCount` and you'll get 12.
*/
var studentCount = 12;
console.log('Number of students in class: ', studentCount);

/*
  In JavaScript (in this version that we are currently working with, which is technically called ES5 - [read more here: https://en.wikipedia.org/wiki/ECMAScript]) ONLY functions create `scope` - meaning: if you define a variable inside of a function it will ONLY be accessible withing that function. That is to say that the variable is local to the function.
*/
function foo () {
  // `snacks` can not be accessed from outside of this function
  var snacks = ['granola bar', 'milkshake', 'cheese puffs'];
  /*
    But `studentCount` IS accessible from inside this function because it is declared in a "parent scope" or in the "outer scope". 
  */
  console.log('function foo says studentCount is: ', studentCount);
  console.log('function foo says snacks are: ', snacks);

  /*
    If you un-comment `use strict` in the beginning of this file, your code won't run and it will throw an error.
    If you keep that line commented out or remove it, then the line below will implicitly declare the variable as a "global variabel". In other word, it will attach it to the global `window` object as `window.food`. 
    Remember that the `window` object is the big global object that our web browser introuces to JavaScript. 
    Open your browser console and type in `window` - inspect this large object. What do you find in there?
  */
  food = 'burger';
  /* 
    The line above in non-`strict mode` is equivalent to `window.food = "burger";`
  */

  /* 
    The following function is `nested` insode `function foo`. Just like a variable, it is accessible inside function `foo` but not outside.
  */
  function nested () {
    var localVar = 'banana';
    console.log('Local var is: ', localVar);
    /* 
      Because `snacks` is in the parent scope, it can be accessed here.
    */
    console.log('I am nested in function foo, and snacks are: ', snacks);
  }
  // call function `nested`
  nested();
}

/* 

  `nested` can not be accessed here.
*/
//nested();

foo();

console.log(food);

//console.log('I am outside of foo function and snacks are: ', snacks);
