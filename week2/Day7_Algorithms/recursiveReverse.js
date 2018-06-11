
function recReverse(string) {
    if (string.length === 0) {
        return "";
    } else {

        // return recReverse(string.substring(1, string.length)) + string[0];
        return recReverse(string.slice(1)) + string[0];

    }
}

console.log(recReverse("Erika"))