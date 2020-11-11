let socket = io();

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function newConnection() {
  console.log("your id:" + socket.id)
}

function drawOtherMouse(data) {
  noStroke()
  fill(255, 255, 0)
  ellipse(data.x, data.y, 10)
}

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("purple")
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 20)
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
  }
  // send to the server
  socket.emit("mouse", message); //"mouse" is title, message is the variable
}
