const numbers = [1, 2, 3, 4]

function sum(numbers) {
    let result = 0;
    for (let num of numbers) {
        if (typeof num === "number") {
            result += num;
        }
    }
    return result;
}
console.log(sum(numbers));