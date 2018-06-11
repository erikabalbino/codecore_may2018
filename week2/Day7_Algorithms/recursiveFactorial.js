

function recFac(number) {
    if ( number === 0) {
        return 1;
    } else {
        return number * recFac(number - 1)
    }
    
}

console.log(recFac(5));