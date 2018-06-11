function partition(array, partitioner) {
    arrayTrue = [];
    arrayFalse = [];
    newArray = [];
    for (let i = 0; i < array.length; i++){

        if (partitioner(array[i], i, array)) {
            arrayTrue.push(array[i]);
        } else {
            arrayFalse.push(array[i]);
        }
    }
    newArray.push(arrayTrue, arrayFalse); 
    return newArray; 
    // return [arrayTrue, arrayFalse]; 
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8 ];

console.log(partition(arr, val => val > 4)); // returns [ [ 5, 6, 7, 8 ], [ 1, 2, 3, 4 ] ]
console.log(partition(arr, val => val % 2 === 0)); // returns [ [ 2, 4, 6, 8 ], [ 1, 3, 5, 7 ] ]