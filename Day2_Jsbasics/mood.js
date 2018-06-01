// Control Flow
// Conditonals

const args = process.argv.slice(2);

const mood = args[0];

// if (typeof mood === "undefined") {
if (!mood) {
    // Checa se mood tem valor
    console.log("Tell me your mood!");
} else if (mood === "happy"){
    console.log("😁 yay!");
} else if (mood === "angry") {
    console.log("😡 I hate you!");
} else {
    console.log("👍 OK !!");
}