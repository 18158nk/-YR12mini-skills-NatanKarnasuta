//*****************/
//*****************/
var ball1 = {
  posX: 200,
  posY: 200,
  speedX: 10,
  speedY: 8,
  diameter: 50,

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