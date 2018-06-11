
// Write a function, reverse that takes in a string and 
// returns another string with the characters in reverse order.

function reverse(string){
    var spliString = string.split("").reverse().join("");
    return spliString;
}

console.log(reverse("erika"))
