const fs = require("fs");

// fs.readFile("some_data", "utf8", (error, data) => {
//     console.log("Finishing reading file ...\n");
//     console.log(data);
    
// })

const readFile = (path, encoding = "utf8") => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (error, data) => {
            if (error) return reject(error);

            resolve(data);
        })
    })
}

readFile("some_data").then(data => console.log(data));
