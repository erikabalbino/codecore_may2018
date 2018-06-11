// Write a JavaScript function, mergeSet, that merges two arrays and 
// removes all duplicate elements. For example:

// function mergeSet(array1, array2) {
//     newArr = array1;

//     for (let i of array2) {
//         if (!newArr.includes(i)){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// let array1 = [1, 2, 3];
// let array2 = [3, 4, 5];
// console.log(mergeSet(array1, array2));
// [1,2,3,4,5]

/* --------------------------- */

// const array1 = [1, 2, 3, 5, 100];
// const array2 = [3, 4, 5, 6, 7, 100, 7];
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
let newArray = [];

function merge (a, b) {
    newArray = a.concat(b);
    //console.log(newArray);
  
    let mySet = new Set(newArray);
    newArray = Array.from(mySet);

    return newArray;
}

console.log(merge(array1, array2));