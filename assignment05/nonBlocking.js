// Non-blocking I/O

const fs = require("fs");

fs.readFile("myfile.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log("File read asynchronously");
