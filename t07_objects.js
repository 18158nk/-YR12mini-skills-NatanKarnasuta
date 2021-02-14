var x = 25;
var y = 25;
var speedY = 2;
var speedX = 6;
function setup() {
  createCanvas(600, 400);
background (0, 59, 100);
}

function draw() {
    background (0, 59, 100);
  fill(0, 0, 255);
  ellipse(x, y, 25, 25);



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