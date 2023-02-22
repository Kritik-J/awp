// Blocking I/O

const fs = require("fs");

const data = fs.readFileSync("myfile.txt");

console.log(data.toString());

console.log("File read synchronously");
