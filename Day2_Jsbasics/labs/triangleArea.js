const args = process.argv.slice(2);

const side1 = parseInt(args[0]);
const side2 = parseInt(args[1]);
const side3 = parseInt(args[2]);

if (side1 <= 0 || side2 <= 0 || side3 <= 0 || side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    console.log("Impossible Triangle!");
} else {
    let perimeter = side1 + side2 + side3;
    console.log("Perimeter:", perimeter);
    let i = perimeter/2;
    let area =  Math.sqrt(i*((i-side1)*(i-side2)*(i-side3)));
    console.log(`Area: ${area.toFixed(4)}`);
}
