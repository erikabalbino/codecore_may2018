// Write a function, findDuplicates, that takes an array of strings and/or integers, values. 
// Return a new array containing all the values are duplicated in the array.

function findDuplicates(arr) {
    const newarr = [];
    const duparr = [];
    for (let elem of arr){
        if (newarr.includes(elem)){
            duparr.push(elem);
        } else {
            newarr.push(elem);
        }
    }
    return duparr;
}


console.log(findDuplicates([1, 1, 3, 4, 4, 5, 6, 7, 8, 9, 9])) // returns [1, 9]
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4])) // returns ['Rob', 4]