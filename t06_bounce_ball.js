/*
var x = 25;
var y = 25;
var speedY = 2;
var speedX = 6;
var ballwidth = 25
var ballheight = 25
function setup() {
  createCanvas(600, 400);
background (0, 59, 100);
}

function draw() {
    background (0, 59, 100);
  fill(0, 0, 255);
  ellipse(x, y, ballheight,  ballwidth);



  if (x > width) {
    speedX = speedX *-1;
  } else if (x < 12) {
    speedX = speedX*-1;
  }
  x = x + speedX;


  if (y > height) {
    speedY = speedY *-1;
  } else if (y < 12) {
    speedY = speedY *-1;
  }
 y = y + speedY;
}
*/

var ball = {
  posX: 200,
  posY: 200,
  speedX: 7,
  speedY: 4,
  diameter: 100,
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 59, 100);
  fill(0, 0, 255);

  ball.posY = ball.posY + ball.speedY;
  ball.posX = ball.posX + ball.speedX;

  if (ball.posX >= width - (ball.diameter / 2)) {
    ball.speedX = ball.speedX * -1;
    ball.posX = width - (ball.diameter / 2);
  } else if (ball.posX < ball.diameter / 2) {
    ball.posX = (ball.diameter / 2);
    ball.speedX = ball.speedX * -1;
  }
  ellipse(ball.posX, ball.posY, ball.diameter);

 if (ball.posY >= height - (ball.diameter / 2)) {
    ball.speedY = ball.speedY * -1;
    ball.posY = height - (ball.diameter / 2);
  } else if (ball.posY < ball.diameter / 2) {
    ball.posY = (ball.diameter / 2);
    ball.speedY = ball.speedY * -1;
  }
  ellipse(ball.posX, ball.posY, ball.diameter);
}
/*

ball.posX = 



*/