const args = process.argv.slice(2);

const a = parseInt(args[0]);
const b = parseInt(args[1]);

// if (!a || !b || typeof a){
if (!a || !b || !typeof a){
    console.log("Give me 2 numbers");
} else if (a < 0 || b < 0){
    console.log("Give me positive numbers");
} else {
    console.log(a ** b);
}