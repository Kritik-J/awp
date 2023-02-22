const http = require("http");

const port = 5000;

http
  .createServer(function (req, res) {
    console.log("Server is running on port " + port);
    res.end("Hello World!");
  })
  .listen(port);
