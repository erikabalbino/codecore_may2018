
// Write a function, merge, that takes two objects,objA & objB respectively then 
// returns a new object with all keys of objA & objB. objA & objB should not be 
// mutated when calling this function. 
// If objects objA & objB share keys, objB's key should take precedence over objA's.

function merge(objA, objB) {
    const newObject = {};
    for (let key in objA ) {
        newObject[key] = objA[key];
    }
    for (let j in objB) {
        newObject[j] = objB[j];
    }
    // console.log(newObject);
    return newObject;
}


console.log(merge({a: 1, b: 2}, {c: 3, d: 4})); // return {a: 1, b: 2, c: 3, d: 4}
// with shared keys
console.log(merge(
  {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
  {firstName: 'Harry', lastName: 'Potter'}
)); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}