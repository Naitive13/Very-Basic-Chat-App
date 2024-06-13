const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
  console.log("url: http://localhost:8000/");
});
