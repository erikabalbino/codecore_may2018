const args = process.argv.slice(2);

const a = parseInt(args[0]);
const b = parseInt(args[1]);

for (let i = 1; i <= 100; i +=1) {
    if (i % a === 0 && i % b === 0) {
        console.log("fizzbuzz");
    } else if (i % a === 0) {
        console.log("fizz");
    } else if (i % b === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }

}