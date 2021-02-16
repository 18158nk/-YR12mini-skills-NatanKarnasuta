var ball1 = {
  posX: 30,
  posY: 30,
  directionX: 5,
  directionY: 6,
  diameter: 25,
};

var ball2 = {
  posX: 100,
  posY: 100,
  directionX: -3,
  directionY: 4,
  diameter: 40,
 
};























function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(200, 200);

  // ball1 colour aqua
  fill(0, 255, 255);
  ellipse(ball1.posX, ball1.posY, ball1.diameter);

  fill(50, 75, 255)
  ellipse(ball2.posX, ball2.posY, ball2.diameter);

  //ball 1 positioning/moving code
  ball1.posY = ball1.posY + ball1.speedY;
  ball1.posX = ball1.posX + ball1.speedX;
  //Ball 2positioning/moving code
  ball2.posY = ball2.posY + ball2.speedY;
  ball2.posX = ball2.posX + ball2.speedX;



  if (ball1.posX >= (width - (ball1.diameter / 2))) {

    ball1.speedX = ball1.speedX * -1;
  } else if (ball1.posX <= ((width - width) + (ball1.diameter / 2))) {
    ball1.speedX = ball1.speedX * -1;
  }
  //checks if balls are off screen on X axis
  if (ball1.posY >= (height - (ball1.diameter / 2))) {
    ball1.speedY = ball1.speedY * -1;
  } else if (ball1.posY <= ((height - height) + (ball1.diameter / 2))) {
    ball1.speedY = ball1.speedY * -1;
  }
  if (ball2.posX >= (width - (ball2.diameter / 2))) {
    ball2.speedX = ball2.speedX * -1;
  } else if (ball2.posX <= ((width - width) + (ball2.diameter / 2))) {
    ball2.speedX = ball2.speedX * -1;
  }
  if (ball2.posY >= (height - (ball2.diameter / 2))) {
    ball2.speedY = ball2.speedY * -1;
  } else if (ball2.posY <= ((height - height) + (ball2.diameter / 2))) {
    ball2.speedY = ball2.speedY * -1;
  }

}






