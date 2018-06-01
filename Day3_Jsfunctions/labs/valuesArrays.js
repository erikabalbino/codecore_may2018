
function areValuesArrays(arr) {
    for (let i of arr) {
        if (!Array.isArray(i)){
            return false;
        } 
    }
    return true;
}

console.log(areValuesArrays([[1], [2], [4, 5]])) // returns true
console.log(areValuesArrays([1, [2], [6, 7, 8]])) // returns false
console.log(areValuesArrays(['true', 'false'])) // returns false
console.log(areValuesArrays([[1], 'false'])) // returns false