// Create an object named, StringExtras, that contain several 
// utility methods that re-implement some string library methods. 
// You are not allowed to use the existing methods of the same name to 
// implement these.

// It should have a:

// repeat method that duplicates a string n of times.
// leftPad method that adds space to the left of a string until the 
// string is of length n.
// rightPad method like leftPad, but adds spaces to the right of the string.
// pad method like leftPad, but adds spaces to the left & right of the string.
// capitalize method which uppercases the first letter of a string.

const StringExtras = {

    repeat(str, n) {
        newStr = str;
        for (let i = 1; i < n; i++) {
            newStr += str;
        }
        return  newStr
    },

    leftPad(str, n) {
        if (str.length >= n){
            return str;
        }
        return this.repeat(" ", n - str.length) + str;
    },

    rightPad(str, n){
        if (str.length >= n){
            return str;
        }
        return str + this.repeat(" ", n - str.length);
    },

    pad (str, n){
        const leftPadding = Math.ceil((n -str.length) / 2) + str.length;
        return this.rightPad(this.leftPad(str, leftPadding), n);
    },

    capitalize(str){
        return str[0].toUpperCase() + str.slice(1);
    }
}

let a = 'you';

console.log(StringExtras.repeat(a, 3)); // returns 'youyouyou'
// StringExtras.repeat(' ', 6); // returns '      '
console.log(StringExtras.leftPad(a, 5)); // returns '  you'
// StringExtras.leftPad(a, 1); // returns 'you'
// StringExtras.leftPad(a, 3); // returns 'you'
// StringExtras.leftPad(a, 4); // returns ' you'
// StringExtras.rightPad(a, 6) + 'me'; // returns 'you   me'
// StringExtras.pad(a, 5); // returns ' you '
// StringExtras.pad(a, 6); // returns '  you '
// StringExtras.pad(a, 10); // returns '    you   '
// StringExtras.capitalize(a); // returns 'You'