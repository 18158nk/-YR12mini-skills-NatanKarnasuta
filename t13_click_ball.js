//*****************/
//*****************/
//*****************/
//*****************/
var ballsArray = [];
var speedArray = [10, 9, 8, 7, 6, -6, -7, -8, -9, -10];
const NUMBALLS = [10];
var score = 0;
var scoreText;
var misses = 0;
var miss

function setup() {
  createCanvas(windowWidth, windowHeight);
  createBall(NUMBALLS, 100);

  scoreText = createP("Score : " + score);
  missesText = createP("Misses : " + misses)
}

function draw() {
  background(200, 200, 200);
  scoreBoard();
  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].movePos()
    ballsArray[i].borderCheck()
    ballsArray[i].colour()

  }
}

//Scoreboard
function scoreBoard() {
  scoreText.html("Score : " + score)
  scoreText.position(10, 20)
  missesText.html("Misses : " + misses)
  missesText.position(10, 10)
}

function mousePressed() {
  checkBallHit()
}

//Fact checks when/if a ball has been clicked
function checkBallHit() {
  var ballHit = false;
  for (var i = 0; i < ballsArray.length; i++) {
    var px2Ball = dist(ballsArray[i].posX, ballsArray[i].posY, mouseX, mouseY);
    if (px2Ball <= ballsArray[i].diameter / 2) {
      ballHit = true;
      ballsArray.splice(i, 1);
    }
  }
  if (ballHit == true) {
    score++;
  } else {
    misses++;
  }
}

//function that creates the balls

function createBall(_ballAmount, _diameter) {

  for (var i = 0; i < _ballAmount; i++) {
    ballsArray[i] = {
      posX: width / 2,
      posY: height / 2,
      diameter: 100,
      speedX: random(speedArray),
      speedY: random(speedArray),
      colR: random(0, 255),
      colG: random(0, 255),
      colB: random(0, 255),

      size: function () {
        this.diameter = slider.value();
      },

      colour: function () {
        noStroke();
        fill(this.colR, this.colG, this.colB);
        ellipse(this.posX, this.posY, this.diameter);
      },
      movePos: function () {
        this.posY = this.posY + this.speedY;
        this.posX = this.posX + this.speedX;
      },

      borderCheck: function () {
        if (this.posX >= width - (this.diameter / 2)) {
          this.speedX = this.speedX * -1;
          this.posX = width - (this.diameter / 2);
        } else if (this.posX < this.diameter / 2) {
          this.posX = (this.diameter / 2);
          this.speedX = this.speedX * -1;
        }
        if (this.posY >= height - (this.diameter / 2)) {
          this.speedY = this.speedY * -1;
          this.posY = height - (this.diameter / 2);
        } else if (this.posY < this.diameter / 2) {
          this.posY = (this.diameter / 2);
          this.speedY = this.speedY * -1;

        }

      }
    }
  }
}

//Scoreboard
function scoreBoard() {
  scoreText.html("Score : " + score)
  scoreText.position(10, 20)
  missesText.html("Misses : " + misses)
  missesText.position(10, 10)
}