let socket = io();
let myColor = "white"

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer)

function newPlayer(newPlayerColor) {
  console.log(newPlayerColor)

  push()
  textSize(30)
  textAlign("center")
  fill(newPlayerColor)
  text("new player joined: " + newPlayerColor, width / 2, height / 2 + 60)
  pop()
}

function setColor(assignedColor) {
  myColor = assignedColor;
  textSize(30)
  // textAlign("center")
  // fill(myColor)
  // text("welcome " + myColor, width / 2, height / 2)
}

function newConnection() {
  console.log("your id:" + socket.id)
}

function drawOtherMouse(data) {
  noStroke()
  fill(data.color)
  ellipse(data.x, data.y, 10)
}

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("purple")
  //Welcome message
  push()
  fill("purple")
  rectMode(CENTER)
  noStroke()
  rect(width / 2, height / 2, 400, 100)

  pop()
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  push()
  noStroke()
  fill(myColor)
  ellipse(mouseX, mouseY, 20)
  pop()
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  }
  // send to the server
  socket.emit("mouse", message); //"mouse" is title, message is the variable
}
