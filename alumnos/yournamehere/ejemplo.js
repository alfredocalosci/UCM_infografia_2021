let w = 600;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
}

function draw() {
  background(0,0,90); 
}

function keyTyped(){
  console.log(key);
}