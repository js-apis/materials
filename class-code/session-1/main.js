console.log('HI!');
console.log('We have for loops and more!');

var colors = [
  'orange',
  'red',
  'blue',
  'purple'
];

var primeNumbers = [1, 3, 5, 7, 11, 13, 17];

var pets = ['cat', 'dog', 'guinea pigs', 'hamster'];

/*
for (var i = 0; i < colors.length; i ++) {
  console.log('Color is: ', colors[i]);
} 

for (var j = 0; j < primeNumbers.length; j ++) {
  console.log('Prime Number is: ', primeNumbers[j]);
} 

for (var k = 0; k < pets.length; k ++) {
  console.log('Pet is: ', pets[k]);
} 
*/

// describe why arr has no var declaration
function printArray(arr) {
  for (var i = 0; i < arr.length; i ++) {
    // talk about separating with comma
    console.log('printArray says: ', arr[i]);
  }  
}

printArray(colors);
printArray(primeNumbers);
printArray(pets);


var bottle = {
  color: 'green',
  material: 'coated metal',
  height: 8,
  capColor: 'black',
  capMaterial: 'plastic',
  open: function() {
    this.isOpen = true;
    console.log('Water Bottle is Open: ', this.isOpen);
  },
  close: function () {
    // explsin `this`;
    this.isOpen = false;
    console.log('Water Bottle is Open: ', this.isOpen);
  },
  pour: function() {
    this.isEmpty = true;
    console.log('Pouring water. is Bottle empty: ', this.isEmpty);
  },
  isEmpty: false,
  isOpen: false
}


for(var key in bottle) {
  console.log('Key is: ', key, ' And value is: ', bottle[key], ' And type of value is: ', typeof bottle[key]);
}
