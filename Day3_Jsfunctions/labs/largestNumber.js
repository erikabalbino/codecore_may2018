
function largestNumber(arr) {

    // let number = 0;
    let number = arr[0];
    for (let i of arr ){
        if (i > number){
            number = i;
        }
    }
    return number
} 

console.log(largestNumber([40, -2, 13, 34, 42])) // returns 42
console.log(largestNumber([1, 2, 3, 4, 5, 6])) // returns 6
console.log(largestNumber([99, 77, 55, 33, 22, 11])) // returns 99



// console.log(`Largest Number is: ${largestNumber = Math.max(a, b, c)}`);
// return Math.max(arr);