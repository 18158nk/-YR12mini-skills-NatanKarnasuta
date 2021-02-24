//*****************/
//*****************/
 var ball1 = {
  posX: 200,
  posY: 200,
  speedX: 10,
  speedY: 8,
  diameter: 50,
};

var ball2 = {
  posX: 200,
  posY: 200,
  speedX: -5,
  speedY: 8,
  diameter: 80,
};



function setup() {
  createCanvas(windowWidth, windowHeight );

slider = createSlider(25, 100, 100);
slider.position(10, 10);
slider.style('width', '100px');


//randomize ball starting location
ball1.posX = random(25, 375)
ball1.posY = random(25, 375)
ball2.posX = random(25, 375)
ball2.posY = random(25, 375)
}


function draw() {
  background(255, 255, 255, 75);

ball1.diameter = slider.value();
ball2.diameter = slider.value();

//moves ball 1
  ball1.posY = ball1.posY + ball1.speedY;
  ball1.posX = ball1.posX + ball1.speedX;


//moves ball 2
  ball2.posY = ball2.posY + ball2.speedY;
  ball2.posX = ball2.posX + ball2.speedX;


//checks/corrects ball 1 from going out of canvas
  if (ball1.posX >= width - (ball1.diameter / 2)) {
    ball1.speedX = ball1.speedX * -1;
    ball1.posX = width - (ball1.diameter / 2);
  } else if (ball1.posX < ball1.diameter / 2) {
    ball1.posX = (ball1.diameter / 2);
    ball1.speedX = ball1.speedX * -1;
  }
 if (ball1.posY >= height - (ball1.diameter / 2)) {
    ball1.speedY = ball1.speedY * -1;
    ball1.posY = height - (ball1.diameter / 2);
  } else if (ball1.posY < ball1.diameter / 2) {
    ball1.posY = (ball1.diameter / 2);
    ball1.speedY = ball1.speedY * -1;
  }
 
 
  //colour of ball 1
  fill(255, 0, 0);
  ellipse(ball1.posX, ball1.posY, ball1.diameter);


//checks/corrects ball 2 from going out of canvas
  if (ball2.posX >= width - (ball2.diameter / 2)) {
    ball2.speedX = ball2.speedX * -1;
    ball2.posX = width - (ball2.diameter / 2);
  } else if (ball2.posX < ball2.diameter / 2) {
    ball2.posX = (ball2.diameter / 2);
    ball2.speedX = ball2.speedX * -1;
  }
 if (ball2.posY >= height - (ball2.diameter / 2)) {
    ball2.speedY = ball2.speedY * -1;
    ball2.posY = height - (ball2.diameter / 2);
  } else if (ball2.posY < ball2.diameter / 2) {
    ball2.posY = (ball2.diameter / 2);
    ball2.speedY = ball2.speedY * -1;
  }
  
  //colour of ball 2
  fill(0, 255, 255);
  noStroke();
  ellipse(ball2.posX, ball2.posY, ball2.diameter);
}
 
 