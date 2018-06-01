// argv is property of object

// console.log(process.argv);
// Slice(2) ira' ignorar os doi primeiros itens do array e me retoenar o restante

const args = process.argv.slice(2);


console.log(args);
console.log("First argument:", args[0]);
console.log("Second argument:", args[1]);
console.log("Tird argument:", args[2]);



