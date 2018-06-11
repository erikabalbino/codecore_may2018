// Creating a function, matchingSet, that takes two arrays as arguments. 
// It should return an array of all the elements that are shared between the 
// two arrays (without duplicates). Effectively, it should return the 
// intersection of both arrays.

function matchingSet(arr1, arr2) {
    newArr = [];
    for (let i of arr1){
        if (arr2.includes(i)){
            if (!newArr.includes(i)){
                newArr.push(i);
            }
        }
    }

    return newArr
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])) // returns [3, 4]
console.log(matchingSet(['j', 'a', 'n', 'j', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])) // returns ['j', 'n']
