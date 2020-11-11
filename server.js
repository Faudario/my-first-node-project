console.log("node is running");

let express = require("express"); // load express code into express variable

let socket = require("socket.io") //io means input-output

let app = express(); //execute express variable

let port = 3000;

let server = app.listen(port);

app.use(express.static("public"))

let io = socket(server);

io.on("connection", newConnection)

function newConnection(socket) {
  console.log("new connection: " + socket.client.id)

  socket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(socket.client.id, dataReceived);
    socket.broadcast.emit("mouseBroadcast", dataReceived)
  }
}
