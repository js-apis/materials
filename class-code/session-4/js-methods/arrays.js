// push
// pop
// shift
// unshift
// concat
// spread
// recursion
const trains = ['Metro North', 'NJ Transit', 'MTA', 'Maintenance', 'Amtrack', 'Accela'];
// for (let i = 0; i < trains.length; i ++) {
//     console.log('train is: ', trains[i]);
// }

// trains.forEach(function(train, index) {
//     console.log('Look mom! I am a functional train! ', train, 'and I am at index: ', index);
// });

function printTrain(train, index) {
    console.log(train);
}

//trains.forEach(printTrain);

const nums = [7, 6, 4, 9, 10, 13, 100, 404, 808];

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(nums);

const evenNums = nums.filter(isEven);

//console.log(evenNums);

// old JS
/* 
function Car() {

}
*/

class Car {

    constructor(make, model, price, color, year) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.color = color;
        this.year = year;
    }

    isOld() {
        if (this.year < 2000) {
            return true;
        }
        return false;
    }

    isExpensive() {
        if(this.price > 4000) {
            return true;
        }
        return false;
    }
    
    start() {
        if(this.isOld()) {
            console.log('Bang bang boom brrrrrrr');
        } else {
            console.log('Vroom vroom');
        }
    }

}

//make, model, price, color, year
var cars = [
    new Car('isuzu', 'tooper', 4000, 'yellow', 1985),
    new Car('Land Rover', 'defender', 88000, 'black', 2007),
    new Car('Ford', 'Bronco', 2000, 'blue', 1999),
    new Car('VW', 'Westfalia', 30000, 'orange', 1975),
];

const expensiveCars = cars.filter(function(car) {
    return car.isExpensive();
});
const cheapCars = cars.filter(function(car) {
    return !car.isExpensive();
});
const newCars = cars.filter(function(car) {
    return !car.isOld();
});
const oldCars = cars.filter(function(car) {
    return car.isOld();
});

console.log('expensiveCars \n', expensiveCars, '\n');
console.log('cheapCars \n', cheapCars, '\n');
console.log('oldCars \n', oldCars, '\n');
console.log('newCars \n', newCars, '\n');

cars.forEach(function(car) { car.start(); })

//cars.forEach((car) => car.start())

/*
const myFunc = (arg) => {

}
*/

// find
// character encoding
// nvm is not in path
// string includes
// other string 
console.log('I am here _-------', __dirname);











