
/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    var total = 1;

    for (i = 0; i < array.length; i++) {
        total = callback(array[i]);
    }

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sum = 0; 

   
// here I am using the array args and using forEach on it 
// the function called by forEach is called add and is defined inline here.  
    args.forEach(function add (currentValue, index, array) {
        sum = currentValue + sum; 
    }); 

    return sum; 
}


console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var total = 0;
    var average = 0;

    for (var i = 0; i < args.length; i++) {
        total = total + args[i]
    }
    average = total / args.length; 
    return average;  
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    var largest = 0;

    args.forEach(function getBiggest(currentValue, index, array) {
        if(currentValue > largest) {
            largest  = currentValue;
        }


    })
    return largest; 
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    var longest = "";

    args.forEach(function findLongestString(currentValue, index, array) {
        if(currentValue.length > longest.length) {
            longest = currentValue; 
        }
     })   
        return longest; 
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort() method sorts the elements of an array in place and returns the array.  

var animals = ["fish", "dog", "horse", "cat", "elephant"];

console.assert(animals.sort() === ["cat", "dog", "elephant", "fish", "horse"]);

// .concat() method returns a new array made up of the array on which it is based joined with the additional arrays.

var dogs = ["poodle", "chow", "retriever"];
var cats = ["tabby", "Siamese", "calico"];

console.assert(dogs.concat(cats) === ["poodle", "chow", "retriever", "tabby", "Siamese", "calico"]);

// .indexOf() method returns the first index in the array at which the item can be found or -1 if the item is not present.

var stuff = ["pencil", "paper", "eraser", "calculator", "eraser", "pen"];

console.assert(stuff.indexOf("eraser") === 2);


// .split() method 



// .join() method joins all elements of an array into a string.

var array = ["red", "white", "blue"];

console.assert(array.join() === "red,white,blue")


// .pop() method removes the last element of an array and returns that element.

var trees = ["oak", "pecan", "willow", "sycamore", "elm"];

console.assert(trees.pop() === "elm");


// .push() method adds one or more elements to an array and returns the new length of the array.

var cars = ["Toyota", "Ford", "Nissan"];

console.assert(cars.push("Honda", "Chrylser") === 5);

// .slice() method returns a shallow copy of a portion of an array into a new array object.

var plants =  ["grass", "tree", "shrub", "weed", "vine"];

console.assert(plants.slice(1, 4) === ["tree", "shrub", "weed"]);


// .splice() method changes an array by removing elements or adding elements.  




// .shift() method removes the first element of an array and returns that element.

var chocolate = ["milk", "dark", "white"];

console.assert(chocolate.shift() === "milk");


// .unshift() method adds one or more elements to an array and returns the array's new length.

var size = ["tiny", "large", "medium"];

console.assert(size.unshift("huge") === 4);

// .filter() creates a new array with all elements that pass the test of the provided function. 

var numbers = [34, 51, 17, 65, 70, 8, 90];
var number; 

function greaterThanFifty(number) {
  return number > 50; 
} 

console.assert(numbers.filter(greaterThanFifty) === [51, 65, 70, 90]); 

// .map() creates a new array with the results of calling a provided function on each element of the array.

var numbers = [7, 9, 25, 28, 34];
var number 

function multiplyByThree(number) {
    return number = number * 3;  
}

console.assert(numbers.map(multiplyByThree) === [21, 27, 75, 84, 102]);




