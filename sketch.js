var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  canvas = createCanvas(w, h, WEBGL);

} 

function draw(){

  background(20);
  normalMaterial();
  translate(20, 0, 0);
  push();
  if(mouseIsPressed){
    rotateX( 0.01 * mouseX);
    rotateY( 0.01 * mouseY);
  }else{
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.03);
  }
  torus(50, 15);
  pop();
}


window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}
