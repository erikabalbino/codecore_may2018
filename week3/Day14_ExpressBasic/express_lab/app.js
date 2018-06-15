const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));

app.get("/hello_world", (request, response) => {
    response.send("Hello World!");
});

app.get("/", (request, response) => {
    response.render("welcome");
});

app.get("/car_status", (request, response) => {
    console.log("This is the GET car_status event handler", request.query);
    const year = request.query.year;
    let age = null;
     if (year > 2018){
        age = "Future";
     } else if (year > 2010) {
        age = "New";
     } else if (year > 1999){
        age = "Old";
     } else {
        age = "Very Old";
     }
    response.render("car", { carAge: age, carYear: year });
    
})

app.get("/random_person", (request, response) => {
    console.log("This is the GET random_person event handler", request.query);
    const names = request.query.names;
    let winner;
    if (names) {
        const newStr = names.split(",");
        winner = newStr[Math.floor(Math.random() * newStr.length)]
    }
    response.render("random", {pickerName: winner, listNames: names});
});


const PORT = 4000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
    console.log(`❤️ Server is listening at http://${DOMAIN}:${PORT}`);
});
