// Blocking I/O

const fs = require("fs");

console.time("Time taken");

const data = fs.readFileSync("myfile.txt");
console.log(data.toString());

console.timeEnd("Time taken");

console.log("File read synchronously");
