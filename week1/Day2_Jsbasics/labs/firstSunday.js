// Write a script to find the first occurrence 
// of the 1st of January being a Sunday between 
// 2014 and 2050.


for (i = 2014; i <= 2050; i += 1) {
    let d = new Date(i, 0, 1);
    
    if (d.getDay() === 0 ) {
        console.log(i);
        break;
    }    
}

// it should return 2017.
// to confirm the code you can type in node: new Date(2017, 0, 1).getDay()


