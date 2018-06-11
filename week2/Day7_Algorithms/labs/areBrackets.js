// Create a function areBalanced that takes a string containing opening and 
// closing parenthesis return if true all open parenthesis are properly closed 
// otherwise return false. Use a stack data structure to solve this problem.

/* Sem usar stack, ou seja, sem usar push e pop :
function areBalanced(string) {
    let array = string.split("");
    let open = 0;
    let close = 0;
    for (let i of array){
        if (i === "("){
            open +=1;
        } else if (i === ")") {
            close +=1;
        }
    }

    return open === close ? true : false;
}
*/

//Usando stack solution:
// function areBalanced(string) {
//     let array = [];
//     for (let i of string){
//         if (i === "("){
//             array.push(i)
//         } else if (i === ")") {
//             if (array.length < 1) {
//                 return false;
//             }
//             array.pop();
//         }
//     }
//     return array.length < 1 ? true : false;
// }

const OPEN = 1;

function areBalanced(str) {
	let stack = [];

	for (let char of str) {
		if (char === '(') {
			stack.push(OPEN);
		} else if (char === ')') {
			if (stack.pop() === undefined) return false;
		}
	}

	return stack.length === 0;
}
console.log(areBalanced("(1 + (2 * 8) ** (3 + 4))")) // returns true
// console.log(areBalanced("(4 + 4 + (6 * 9)")) // returns false
// console.log(areBalanced("function rob (arg) { return (arg }")) // returns false
// console.log(areBalanced("hello )")) // returns false
// console.log(areBalanced(")(")) // returns false