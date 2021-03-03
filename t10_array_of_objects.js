//*****************/
//*****************/
//*****************/
//*****************/
var ballsArray = [];
var speedArray = [10, 9, 8, 7, 6, -6, -7, -8, -9, -10];
const ballcap = [10];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(144);

  slider = createSlider(25, 100, 100);
  slider.position(10, 10);
  slider.style('width', '100px');

  for (var i = 0; i < ballcap; i++) {
    ballsArray[i] = {
      posX: width / 2,
      posY: height / 2,
      diameter: 100,
      speedX: random(speedArray),
      speedY: random(speedArray),
      colR: random(0, 255),
      colG: random(0, 255),
      colB: random(0, 255),

      size: function() {
         this.diameter = slider.value();
      },
     
      
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
  background(255, 255, 255, 75);



  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].movePos()
    ballsArray[i].borderCheck()
    ballsArray[i].colour()
    ballsArray[i].size() 
  }
}