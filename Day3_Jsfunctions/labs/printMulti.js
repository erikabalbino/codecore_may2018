
function printMulti(myArray) {
    for (let i of myArray){
        newArray = i
        for (let x of newArray) {
            console.log(x);
        }
    }
}

const myArray = [[2,3,4], ["Hello CodeCore", 1, true]]
printMulti(myArray);

// > printMulti(myArray)
// 2
// 3
// 4
// Hello CodeCore
// 1
// true