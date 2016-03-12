
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

// .sort()

// .concat()

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
