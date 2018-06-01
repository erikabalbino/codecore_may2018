
const args = process.argv.slice(2);

const pswd = args[0];


if (!pswd) {
    console.log("What is your password?");
} else {
    if (pswd.length > 12){
        console.log("Too long!");
    } else if (pswd.length < 8) {
        console.log("Too short!");
    } else {
        console.log("👍 OK !!");
    }
}