
// Write a method that returns the maximum number in an array in 
// two ways without using Math.max or Array#sort:
// Using iteration.
// Using recursion.
// Benchmark your two solutions with console.time and console.timeEnd. 
// Make sure to benchmark with really large arrays.

function maximumInteraction(array) {
    let maxNum = array[0];
    for (let i of array) {
        if (i > maxNum){
            maxNum = i;
        }
    }
    return maxNum;
}


function maximunRecursive(array) {
    if (array.length === 1) {
        return array[0];
    } 
    const maxRest = maximunRecursive(array.slice(1));
    // if (array[0] > maxRest){
    //     return array[0];
    // } 
    // return maxRest;
    return array[0] > maxRest ? array[0] : maxRest;
}

console.log(maximumInteraction([ 1000, 213, 12, 66, 999 ])); // should return 999
console.log(maximumInteraction([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11
console.log(maximunRecursive([ 1000, 213, 12, 66, 999 ])); // should return 999
console.log(maximunRecursive([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11


console.time('Loop Factorial'); // start the timer
for(let i = 0; i < 1e7; i++) {
    maximumInteraction([ 213, 12, 66, 999 ]);
}
console.timeEnd('Loop Factorial'); // end the timer and display results


console.time('Recursive Factorial'); // start the timer
  for(let i = 0; i < 1e7; i++) {
    maximunRecursive([ 213, 12, 66, 999 ]);
  }
console.timeEnd('Recursive Factorial'); // end the timer and display results