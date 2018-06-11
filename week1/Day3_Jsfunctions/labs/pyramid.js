// Write a script pyramid.js that takes a number as an argument 
// then logs a pyramid of # with that many number of rows.

const args = process.argv.slice(2);
let a = parseInt(args[0]);

// let line = "";
const block = "# ";
const maxPadding = (a + a -1)/2;
let result = "";

for (let i = 0; i < a; i += 1) {

    result = ' '.repeat(maxPadding - i) + block.repeat(i+1);
 
    console.log(result);
}


// WEB SOLUTION
// function pyramid(n) {
//     for (var i = 0; i < n; i++) {
//       var str = '';
//       for (var j = 1; j < n-i; j++) {
//         str = str + ' ';
//       }
//       for (var k = 1; k <= (2*i+1); k++) {
//         str = str + '*';
//       }
//       console.log(str);
//     }
//   }
// pyramid(4);


// $ node pyramid.js 4
//    #
//   # #
//  # # #
// # # # #