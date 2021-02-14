/********************************************************/
//
/********************************************************/
 var circleX = 0;
  var circleY = 0;

function setup() {
  createCanvas(400, 400);
   
}

function draw() {
background(255)
fill(0, 255, 255);
circle(circleX, circleY, 10, 10, 75,);

circleX = circleX + 1;
circleY = circleY + 1;
}