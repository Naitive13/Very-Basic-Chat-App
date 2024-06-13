const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// to fix the "stylesheet not loaded because of MIME type" error
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("a user dicsconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("==> " + msg);
  });
});

// in case we have an error
io.engine.on("connection_error", (err) => {
  console.log(err.req);
  console.log(err.code);
  console.log(err.message);
  console.log(err.context);
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
  console.log("url: http://localhost:8000/");
});
