let w = 600;
let a = 0; // ángulo

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);

  fill(200,0,0);
  rectMode(CENTER);
  square(100,100,60);

  push(); // registra el punto de origen // grab origin point
  translate(w/2, w/3); // mueve el punto de origen // move origine
  rotate(PI/4); // rotate
  square(0,0,120);
  pop(); // devuelve el punto de origen ... a su sitio // back to original position (push)

  a = map(mouseX, 0, w, 0, TWO_PI);
  fill(128);
  push();
  translate(w/2, w/4*3);
  rotate(a);
  square(0,0,90);
  pop();
}
