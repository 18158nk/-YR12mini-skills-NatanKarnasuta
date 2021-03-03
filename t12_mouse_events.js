/********************************************************/
//
/********************************************************/
var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.mouseOver(aqua);
  canvas.mouseOut(purple);
  canvas.mouseClicked(black)
}

function aqua(){
  background(255,0 ,255)
}
function purple(){
  background(0,255 ,255)
}
function black(){
  background(0)
}