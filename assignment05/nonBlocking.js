// Non-blocking I/O

const fs = require("fs");

console.time("Time taken");

fs.readFile("myfile.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.timeEnd("Time taken");

console.log("File read asynchronously");
