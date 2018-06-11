function find (array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)){
            return array[i];
        }
    }
}

// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
const even = function (n) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
// const odd = function (n) { return !even(n) };

// creates a function that returns true if its argument is above min
// const above = function (min) {
//   return function (n) {
//     return n > min;
//   }
// }

let arr = [1,2,3,4,5,6];

find(arr, even) // returns 2
// find(arr, odd) // returns 1
// find(arr, above(3)) // returns 4

// find(
//   arr,
//   function (value, index, arr) { return value % 5 === 0 }
// ) // returns 5 (or, the first multiple of 5)