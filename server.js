const express = require("express");
const path = require("path");
const socket = require("socket.io");

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

var server = app.listen(port, function () {
  console.log("listening to requests on port 8000...");
});

var io = socket(server);

io.on("connection", function (socket) {
  console.log("socket connection made " + socket.id);
});
