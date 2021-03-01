//*****************/
//*****************/
//*****************/
//*****************/
var ballsArray = [];
var speedArray = [10, 9, 8, 7, 6, -6, -7, -8, -9, -10];

function setup() {
  createCanvas(windowWidth, windowHeight);

 for (var i = 0; i < 20; i++) {
    ballsArray[i] = {
      posX: width / 2,
      posY: height / 2,
      diameter: 50,
      speedX: random(speedArray),
      speedY: random(speedArray),
      colR: random(0, 255),
      colG: random(0, 255),
      colB: random(0, 255),

      colour: function() {
        fill(this.colR, this.colG, this.colB);
        ellipse(this.posX, this.posY, this.diameter);
      },
      movePos: function() {
        this.posY = this.posY + this.speedY;
        this.posX = this.posX + this.speedX;
      },
      borderCheck: function() {
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



function draw() {
  background(200, 200, 200, 100);


  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].movePos()
    ballsArray[i].borderCheck()
    ballsArray[i].colour()
  }
}




/*

var ball1 = {
  posX: 200,
  posY: 200,
  speedX: 9,
  speedY: 5,
  diameter: 50,

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



    fill(0, 255, 255);
    ellipse(this.posX, this.posY, this.diameter);
  },
};


var ball2 = {
  posX: 200,
  posY: 200,
  speedX: -8,
  speedY: 5,
  diameter: 80,
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



    fill(255, 0, 0);
    ellipse(this.posX, this.posY, this.diameter);
  },
};



function setup() {
  createCanvas(windowWidth, windowHeight);

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

  //moves balls
  ball1.movePos();
  ball2.movePos();

  //makes sure balls stay inside border
  ball1.borderCheck();
  ball2.borderCheck();
}