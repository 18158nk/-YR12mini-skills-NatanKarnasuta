/********************************************************/
//
/********************************************************/
var timeUp;
var timeDown;
var counter = 0;
var counter2 = 30;

function setup() {
  createCanvas(400, 400)
  background(255,0,255)
  timeUp = createP("timeUp");
  timeDown = createP("timeDown");
  setInterval(playTimer, 1000)
}

function playTimer() {
  timeUp.html("timeUp = " + counter);
  counter++;
  if (counter > 30) {
    background(0, 255, 255)
    counter = 30;
    countDown();
  }
}

function countDown() {
  timeUp.html("timeUp");
  timeDown.html("timeDown = " + counter2);
  counter2--;
  if (counter2 < 0) {
    background(0, 0, 0)
    counter2 = 0;
  }
}