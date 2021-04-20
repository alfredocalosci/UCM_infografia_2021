let w = 500;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(0);
  
  // la A
  strokeWeight(20);
  stroke(255);
  noFill();
  // triangle(w/5,w/5*4, w/2, w/5, w/5*4, w/5*4);
  line(w/5,w/5*4, w/2, w/10);
  line(w/2, w/10, w/5*4, w/5*4);
  
  // la C
  fill(255, 128); 
  noStroke();
  arc(w/2,w/2, w/2, w/2, PI/4, PI/4*7);
  
  fill(0);
  circle(w/2,w/2, w/4);
  
}

function keyTyped(){
  console.log(key);
}