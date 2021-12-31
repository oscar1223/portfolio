function setup() {
  canvas = createCanvas(300, 300, WEBGL);
} 

function draw(){

  background(30);
  normalMaterial();
  translate(20, 0, 0);
  push();

  rotateX( frameCount * 0.01 );
  rotateY( frameCount * 0.01 );
  rotateZ(frameCount * 0.05);
 
  box(100, 100);
  pop();
}

window.onresize = function() {  
  canvas.size(300, 300);
}
