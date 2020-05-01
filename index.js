const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

httpServer.listen(3000, () => console.log("listening on *:3000"));
