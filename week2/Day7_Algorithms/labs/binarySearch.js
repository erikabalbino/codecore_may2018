// The binarySearch function should take a value to search and an array. 
// Then, it should return the index of that value in the array. 
// It should return -1 if the value doesn't exist. For example:

let array100 = [];
for (let i = 0; i < 10; i++){
    array100.push(i);
}
let array1000 = [];
for (let i = 0; i < 1000; i++){
    array1000.push(i);
}

function binarySearch(target, array){
    if (target > array[array.length-1] || target < array[0])
        return -1;
    let min = 0
    let max = array.length-1
    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (target === array[mid]) {
            return mid;
        } else if (target > array[mid])  {
            min = mid+1;
        } else {
            max = mid-1;
        }
    }
    return -1;
}
console.log(binarySearch(5, array100)) // returns 5

function linearSearch(n, myArray) {
    for (let i = 0; i < myArray.length; i++){
        if (n === myArray[i]){
            return i;
        } 
    }
    return -1;
}

console.log(linearSearch(5, array100)) // returns 5
console.log(binarySearch(5, array100)) // returns 5
