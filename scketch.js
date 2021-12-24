function setup() {
  canvas = createCanvas(400, 400, WEBGL);
} 


function draw(){

  background(20,);
  normalMaterial();
  translate(20, 0, 0);
  push();

  rotateX( frameCount * 0.01 );
  rotateY( frameCount * 0.01 );
  rotateZ(frameCount * 0.05);
 
  torus(50, 15);
  pop();
}

window.onresize = function() {  
  canvas.size(400, 400);
}
