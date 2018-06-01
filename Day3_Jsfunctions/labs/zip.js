// Write a function, zip, that takes two arrays of the same length, 
// arrA & arrB. If arrA and arrB are not the same length, 
// the function should return null. Otherwise, it should combine both arrays 
// together in a two-dimensional array:


function zip(arr1, arr2) {
    const newarr = [];
    if (arr1.length != arr2.length) {
        return null
    } else {
        for (let i = 0; i < arr1.length; i +=1) {
            newarr.push([arr1[i], arr2[i]]);
        }
        return newarr
    }
}

console.log(zip([1, 2, 3], [4, 5, 6])) // returns  [[1, 4], [2, 5], [3, 6]]
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow'])) // returns [['firstName', 'Jon'], ['lastName', 'Snow']]