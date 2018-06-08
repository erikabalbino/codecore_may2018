function reduce(array, fn, value) {
    
    for (let i = 0; i < array.length; i++) {
         value = fn(value, array[i], i); 
    }
    return value;
}

const plus = (a, b) => a + b;
let arr = [1, 2, 3, 4, 5];

reduce(arr, plus, 0); // returns 15
reduce(arr, (a, b) => a * b, 1); // returns 120