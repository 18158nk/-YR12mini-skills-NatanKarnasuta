var ball1 = {
  posX: 30,
  posY: 30,
  speedX: 5,
  speedY: 6,
  diameter: 25,
};

var ball2 = {
  posX: 100,
  posY: 100,
  speedX: -3,
  speedY: 4,
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
//ball2 colour red
  fill(255, 0, 0)
  ellipse(ball2.posX, ball2.posY, ball2.diameter);

  //ball 1 positioning/moving code
  ball1.posY = ball1.posY + ball1.speedY;
  ball1.posX = ball1.posX + ball1.speedX;
  //Ball 2positioning/moving code
  ball2.posY = ball2.posY + ball2.speedY;
  ball2.posX = ball2.posX + ball2.speedX;









