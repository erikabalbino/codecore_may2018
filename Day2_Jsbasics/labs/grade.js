const args = process.argv.slice(2);

const grade = parseInt(args[0]);

if (grade >= 0 && grade <=100 ) {
    if (grade >= 86 && grade <=100 ){
        console.log("Final grade is A");
    } else if (grade >= 73 && grade <=85){
        console.log("Final grade is B");
    } else if (grade >= 67 && grade <=72) {
        console.log("Final grade is C+");
    } else if (grade >= 60 && grade <=66) {
        console.log("Final grade is C");
    } else if (grade >= 50 && grade <=59) {
        console.log("Final grade is C-");
    } else if (grade >= 0 && grade <=49) {
        console.log("Final grade is F");
    }
} else { 
    console.log("Ivalid Grade!");
}