const myArray = [1,4,7,3,8,9];

// destructuring an array
const [first, second, ...rest] = myArray;

console.log(first); // LOGS 1
console.log(second); // logs 2
console.log(third); // logs [7,3,8,9]

// instead of doing
const myArray = [1,4,7,3,8,9];
const first = myArray[0];
const second = myArray[1];
const rest = myArray.slice(2);

// OBJECT

const myObject = { frist: 1, b: 2, c: 3, d: 4 };

const {a, b, ...rest} = myObject;

console.log(a); // myObject.a
console.log(b); // myObject.b
console.log(rest); // { c: 3, d: 4 }

//FUNCTION

function myFunc(array) {
    console.log(array[0]);
    console.log(array.slice(1));
  }
  
  function myFuncDestruc([first, ...rest]) {
    console.log(first);
    console.log(rest);
  }

  function myFn ({a, b, ...rest}) {
    console.log(a);
    console.log(b);
    console.log(rest);
  }
  
  myFn({ x: 1, b: 2, t: 4, f: 5 });