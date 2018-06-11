
function clone(y) {
    const x = {};
    for (let key in y){
        x[key] = y[key];
    }
    return x;
}

let objA = {a: 1, b: 2}
let objB = clone(objA);
console.log(objB);

console.log(objA === objB);

let objC = {c:3, d:4}
objB = clone(objC);
console.log(objB);


console.log(objC === objB);

